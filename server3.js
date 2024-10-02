const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Serve main HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'main.html'));
});

// Handle form submission
app.post('/create-blog', (req, res) => {
    // Extract data from request body
    const { blogTitle, introduction, codeSnippet, errorFix, correctedCode } = req.body;

    // Generate HTML content
    const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${blogTitle}</title>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
            <style>
                /* Add your custom styles here */
            </style>
        </head>
        <body class="bg-black text-green-500">
            <header class="bg-black py-8">
                <div class="container mx-auto px-4">
                    <h1 class="text-4xl font-bold">${blogTitle}</h1>
                </div>
            </header>
            <main class="container mx-auto px-4 py-8">
                <div class="bg-green-900 p-8 rounded-lg">
                    <h2 class="text-3xl font-bold mb-4">Introduction</h2>
                    <p>${introduction}</p>
                    <h2 class="text-3xl font-bold mb-4">Code Snippet</h2>
                    <pre><code>${codeSnippet}</code></pre>
                    <h2 class="text-3xl font-bold mb-4">Error Fix</h2>
                    <pre><code>${errorFix}</code></pre>
                    <h2 class="text-3xl font-bold mb-4">Corrected Code</h2>
                    <pre><code>${correctedCode}</code></pre>
                </div>
            </main>
            <footer class="bg-green-900 py-4">
                <div class="container mx-auto px-4">
                    <p class="text-center text-green-500">© 2024 Hacker's Den. All rights reserved.</p>
                </div>
            </footer>
        </body>
        </html>
    `;

    // Save HTML file
    const fileName = `${blogTitle.toLowerCase().replace(/\s+/g, '-')}.html`;
    const filePath = path.join(__dirname, 'public', fileName);

    // Check file permissions before writing the file
    fs.access(filePath, fs.constants.F_OK | fs.constants.W_OK, (err) => {
        if (err) {
            console.error(`Error accessing file '${fileName}':`, err);
            res.status(500).send(`Error accessing file '${fileName}'`);
        } else {
            // Write HTML file
            fs.writeFile(filePath, htmlContent, (err) => {
                if (err) {
                    console.error(`Error saving HTML file '${fileName}':`, err);
                    res.status(500).send(`Error saving HTML file '${fileName}'`);
                } else {
                    console.log(`HTML file '${fileName}' saved successfully`);
                    res.status(200).send('Blog post created successfully');
                }
            });
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
