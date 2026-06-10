import { useState } from 'react';
import ProjectCard from './ProjectCard.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1>My Portfolio</h1>
      <p>Learning React basics: components, props, and state</p>

      <hr />

      <h2>Projects</h2>

      <ProjectCard title="Landing Page" tech="HTML / CSS" />
      <ProjectCard title="Shop App" tech="JavaScript" />
      <ProjectCard title="React Counter" tech="React" />

      <hr />

      <h2>Counter</h2>
      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default App;