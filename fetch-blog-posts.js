<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Website Blog</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f7f7f7; /* Light gray background */
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 900px;
            margin: 20px auto;
            padding: 0 20px;
        }
        .post {
            margin-bottom: 30px;
            background-color: white;
            padding: 20px;
            border-radius: 5px;
        }
        .post h3 {
            margin-top: 0;
        }
        .post p {
            margin-top: 10px;
            color: #555;
        }
    </style>
</head>
<body>
    <div class="container">
        <section id="latest-posts">
            <h2>Latest Posts</h2>
            <!-- Posts will be dynamically inserted here -->
        </section>
    </div>

    <script>
        // Fetch blog posts from GitHub repository
        fetch('https://api.github.com/repos/glitchingreality/glitchingreality.github.io/contents/blog/post1.md')
          .then(response => response.json())
          .then(posts => {
            // Filter out non-Markdown files
            const markdownFiles = posts.filter(post => post.name.endsWith('.md'));

            // Fetch and display each Markdown file
            markdownFiles.forEach(file => {
              fetch(file.download_url)
                .then(response => response.text())
                .then(markdown => {
                  const converter = new showdown.Converter(); // Assuming you're using Showdown.js for Markdown conversion
                  const html = converter.makeHtml(markdown);
                  const postElement = document.createElement('div');
                  postElement.classList.add('post');
                  postElement.innerHTML = html;
                  document.getElementById('latest-posts').appendChild(postElement);
                });
            });
          })
          .catch(error => console.error('Error fetching blog posts:', error));
    </script>
    
    <!-- Include Showdown.js library for Markdown to HTML conversion -->
    <script src="https://cdn.jsdelivr.net/npm/showdown@1.9.1/dist/showdown.min.js"></script>
</body>
</html>
