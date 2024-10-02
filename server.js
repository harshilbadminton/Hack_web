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
    const { blogTitle } = req.body;

    // Generate HTML content for the blog post
    const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${blogTitle}</title>
            <!-- Include any CSS stylesheets -->
        </head>
        <body>
            <header>
                <h1>${blogTitle}</h1>
            </header>
            <main>
                <!-- Include blog content here -->
            </main>
            <footer>
                <p>© 2023 Hacker's Den. All rights reserved.</p>
            </footer>
        </body>
        </html>
    `;

    // Save HTML file for the blog post
    const fileName = `${blogTitle.toLowerCase().replace(/\s+/g, '-')}.html`;
    const filePath = path.join(__dirname, 'public/created_blogs', fileName);

    fs.writeFile(filePath, htmlContent, (err) => {
        if (err) {
            console.error('Error saving HTML file:', err);
            res.status(500).send('Error saving HTML file');
        } else {
            console.log('HTML file saved:', fileName);
            res.status(200).send('Blog post created successfully');
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});


