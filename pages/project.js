import HeaderPage from "../component/header";
import { Projects } from "../data/index";
// import { Products } from "../data/index";
const ProjectPage = () => {
  return `
  ${HeaderPage()}
  <h1>ProjectPage</h1>
  <div class="projects">${Projects.map((project) => {
    return `<a href="/projects/${project.id}"><div class="project-item"> ${project.name} </div></a>`;
  })}</div>;
  
  `;
};
export default ProjectPage;
