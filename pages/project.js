import HeaderPage from "../component/header";
import { ProjectGalley } from "../component/ProjectGalley";
import ProjectList from "../component/ProjectList";

const ProjectPage = () => {
  return `
  ${HeaderPage()}
  <h1>${ProjectGalley({
    img: "https://icms-image.slatic.net/images/ims-web/fc0f16a8-78ce-4a94-9149-11563ba45571.jpg",
  })}</h1>
  <div class="projects">
    
    ${ProjectList()}
  </div>;
  
  `;
};
export default ProjectPage;
