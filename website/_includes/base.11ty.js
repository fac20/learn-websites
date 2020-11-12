exports.render = (data) => {
    return `
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="${data.css}">
          <title>${data.title}</title>
        </head>
        <body>
        <p>${data.pickle}</p>
          <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
          </nav>
          ${data.content}
        </body>
      </html>
    `;
  };