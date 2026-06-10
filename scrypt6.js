const projects = [
  { id: 1, title: "Business Card Website", tech: "HTML/CSS" },
  { id: 2, title: "Todo App", tech: "JavaScript" },
  { id: 3, title: "Portfolio Website", tech: "HTML/CSS/JS" },
  { id: 4, title: "Blog Platform", tech: "HTML + CSS" },
  { id: 5, title: "Calculator", tech: "JavaScript" }
];

const container = document.querySelector('#projects-container');
const searchInput = document.querySelector('#search-input');

function createProjectCard(project) {
  return `
    <div class="project-card">
      <h3>${project.title}</h3>
      <p>${project.tech}</p>
    </div>
  `;
}

function renderProjects(list) {
  if (!container) return;

  const html = list
    .map(project => createProjectCard(project))
    .join('');

  container.innerHTML = html;
}

if (searchInput) {
  searchInput.addEventListener('input', () => {
    const value = searchInput.value.toLowerCase();

    const filtered = projects.filter(project =>
      project.title.toLowerCase().includes(value)
    );

    renderProjects(filtered);
  });
}

renderProjects(projects);