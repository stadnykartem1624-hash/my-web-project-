function ProjectCard(props) {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '10px',
      marginBottom: '10px',
      borderRadius: '8px'
    }}>
      <h3>{props.title}</h3>
      <p>Tech stack: {props.tech}</p>
    </div>
  );
}

export default ProjectCard;