import { Projects } from "../../data/index";
import { useState, useEffect } from "../../lib";
const AdminProjectsPage = () => {
  const [data, setData] = useState(Projects);

  useEffect(function () {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      btn.addEventListener("click", function () {
        const id = btn.dataset.id;
        setData(data.filter((project) => project.id != id));
        console.log(data);
        // console.log(setData);
      });
    }
  });

  return `
  <div>
  <table class="table table-bordered">
      <thead>
          <tr>
              <th>#</th>
              <th>Name</th>
              <th></th>
          </tr>
      </thead>
      <tbody>
          ${data
            .map(function (project, index) {
              return `
                  <tr>
                      <td>${index + 1}</td>
                      <td>${project.name}</td>
                      <td ><button width="150" class="btn btn-remove btn-danger" data-id="${
                        project.id
                      }">Remove</button>
                      <a href="admin/projects/${project.id}/edit">Sửa </a>
                      </td>
                  </tr>
              `;
            })
            .join("")}
      </tbody>
  </table>
</div>
  `;
};

export default AdminProjectsPage;
