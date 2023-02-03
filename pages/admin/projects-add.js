import { useEffect, router } from "../../lib";
import { Projects } from "../../data/index";
const AdminAddProjectsPage = () => {
  useEffect(function () {
    const form = document.querySelector("#form-add");
    const projectName = document.querySelector("#project-name");
    form.addEventListener("click", function (e) {
      // chặn sự kiện reload lại trang
      e.preventDefault();
      // bắt sự kiện thêm mới vào Projects
      Projects.push({ id: Projects.length + 1, name: projectName.value });
      console.log(Projects);
      router.navigate("/admin/projects");
    });
  });
  return `    
  <div class="container">
        <h1>Thêm sản phẩm</h1>
        <form action="" id="form-add">
            <div class="from-group">
            <label for="" class="form-label">Tên dự án</label>
            <input type="text" class="form-control" id="project-name" />
            </div>
            <button class="btn btn-primary">Thêm</button>
        </form>
  </div>`;
};

export default AdminAddProjectsPage;
