import { Projects } from "../../data";
import { router, useEffect } from "../../lib";

const AdminEditProjectPage = ({ id }) => {
  const currentProject = Projects.find((project) => project.id == id);
  useEffect(function () {
    const form = document.querySelector("#form-add");
    const projectName = document.querySelector("#project-name");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const newProject = {
        id: currentProject.id,
        name: projectName.value,
      };
      const newProjects = Projects.map(function (project) {
        return project.id == newProject.id ? newProject : project;
      });
      console.log(newProjects);
      router.navigate("admin/projects");
    });
  });
  if (!currentProject) return null;

  return `    
      <div class="container">
            <h1>Sửa sản phẩm</h1>
            <form action="" id="form-add">
                <div class="from-group">
                <label for="" class="form-label">Tên dự án</label>
                <input type="text" class="form-control" id="project-name" value=${currentProject.name} />
                </div>
                <button class="btn btn-primary">Cập Nhật </button>
            </form>
      </div>`;
};

export default AdminEditProjectPage;
