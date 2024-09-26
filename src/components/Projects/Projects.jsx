import style from "./Projects.module.css";
import project from "../../data/projects.json";
import ProjectCard from "./ProjectCard/";

const Projects = () => {
  return (
    <section className={style.container} id="projects">
      <h2 className={style.title}>Projects</h2>
      <div className={style.projects}>
        {project.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
