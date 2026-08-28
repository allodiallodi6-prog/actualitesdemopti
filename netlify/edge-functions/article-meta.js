export default async (request, context) => {
  const url = new URL(request.url);
  const idParam = url.searchParams.get('id');
  const id = idParam ? parseInt(idParam, 10) : null;

  const response = await context.next();

  // Pas d'id, ou c'est un article de démo (id < 9000) : on ne touche à rien
  if (!id || id < 9000) {
    return response;
  }

  try {
    const articlesUrl = new URL('/content/articles.json', url.origin);
    const res = await fetch(articlesUrl);
    if (!res.ok) return response;

    const data = await res.json();
    const list = Array.isArray(data.articles) ? data.articles : [];
    const index = id - 9000; // même logique que main.js (id = 9000 + index dans le JSON)
    const article = list[index];
    if (!article) return response;

    const titreBrut = article.titre || 'Article';
    const titre = titreBrut.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

    const descBrute = article.extrait || article.soustitre || (article.corps ? article.corps.slice(0, 150) : '');
    const description = descBrute.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

    const image = article.image
      ? `https://actualitesdemopti.com/${String(article.image).replace(/^\/+/, '')}`
      : 'https://actualitesdemopti.com/img/android-chrome-512x512.png';

    const pageUrl = `https://actualitesdemopti.com/article.html?id=${id}`;

    let html = await response.text();

    html = html.replace(
      /<title>[^<]*<\/title>/,
      `<title>${titre} — Actualités de Mopti</title>`
    );

    html = html.replace(
      /<meta property="og:title" content="[^"]*">/,
      `<meta property="og:title" content="${titre}">`
    );

    html = html.replace(
      /<meta property="og:description" content="[^"]*">/,
      `<meta property="og:description" content="${description}">`
    );

    html = html.replace(
      /<meta property="og:image" content="[^"]*">/,
      `<meta property="og:image" content="${image}">`
    );

    if (!/<meta property="og:url"/.test(html)) {
      html = html.replace(
        '</head>',
        `<meta property="og:url" content="${pageUrl}">\n<meta name="twitter:card" content="summary_large_image">\n</head>`
      );
    }

    return new Response(html, {
      status: response.status,
      headers: response.headers,
    });
  } catch (e) {
    return response;
  }
};

export const config = { path: "/article.html" };
