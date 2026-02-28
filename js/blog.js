fetch('posts.json')
  .then(response => response.json())
  .then(posts => {
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    const container = document.getElementById('posts-container');

    posts.forEach(post => {
      const article = document.createElement('article');
      article.className = 'post-entry';

      const date = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      article.innerHTML = `
        <a href="${post.slug}.html" class="post-title">${post.title}</a>
        <span class="post-date">${date}</span>
        <p class="post-description">${post.description}</p>
      `;

      container.appendChild(article);
    });
  });
