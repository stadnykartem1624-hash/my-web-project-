async function loadPosts() {
  const loading = document.querySelector('#loading');
  const container = document.querySelector('#posts-container');

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!response.ok) {
      throw new Error('Server error');
    }

    const data = await response.json();

    const html = data.slice(0, 5)
      .map(post => `
        <div class="post">
          <h3>${post.title}</h3>
          <p>${post.body}</p>
        </div>
      `)
      .join('');

    container.innerHTML = html;

    loading.style.display = 'none';

  } catch (error) {
    console.error(error);
    loading.textContent = 'Failed to load data';
  }
}

loadPosts();