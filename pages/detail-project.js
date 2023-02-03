import HeaderPage from "../component/header";
import { ProjectGalley } from "../component/ProjectGalley";
import ProjectInfo from "../component/ProjectInfor";
import { Projects } from "../data";
import { router } from "../lib/index";
const DetailProduct = ({ id }) => {
  const currentProject = Projects.find((project) => project.id == id);
  if (!currentProject) {
    return router.navigate("/projects");
  } else {
    return `
  ${HeaderPage()}
  
  
            <div>
                ${ProjectGalley({
                  img: "https://salt.tikicdn.com/cache/750x750/media/catalog/producttmp/6a/60/66/ff4cb75b85731c218a341ece64190f0c.png.webp",
                })}
            </div>
            <div class="projectInfo">
                ${ProjectInfo(currentProject)}
            </div>
  `;
  }
};
export default DetailProduct;
