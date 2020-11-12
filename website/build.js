const fs = require("fs");
const path = require('path');

fs.mkdirSync("build", { recursive: true });


const files = fs.readdirSync(".");

files.forEach((filename) => {
    if (filename.endsWith(".html")) {
        const content = fs.readFileSync(filename);
        const outputPath = path.join("build", filename);
        const outputContent = `
                <!doctype html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Our site</title>
                </head>
                <body>
                    <nav>
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                    </nav>
                    ${content}
                </body>
                </html>
    `;
        
        fs.writeFileSync(outputPath, outputContent);
        console.log(`${filename} -> build/${filename}`);
    }
})


