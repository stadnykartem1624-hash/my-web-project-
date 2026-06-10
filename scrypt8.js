let allPosts = [];

const container = document.querySelector('#posts-container');
const loading = document.querySelector('#loading');
const searchInput = document.querySelector('#search-input');

async function loadPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!response.ok) {
      throw new Error('Server error');
    }

    const data = await response.json();

    allPosts = data.slice(0, 10);

    renderPosts(allPosts);

    loading.style.display = 'none';

  } catch (error) {
    console.error(error);
    loading.textContent = '? Failed to load data';
  }
}

function renderPosts(list) {
  if (!container) return;

  container.innerHTML = list.map(post => `
    <div class="post">
      <h3>${post.title}</h3>
      <p>${post.body}</p>
    </div>
  `).join('');
}

searchInput.addEventListener('input', () => {
  const value = searchInput.value.toLowerCase();

  const filtered = allPosts.filter(post =>
    post.title.toLowerCase().includes(value)
  );

  renderPosts(filtered);
});

loadPosts();