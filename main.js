// import './style.css'
// import javascriptLogo from './javascript.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="/vite.svg" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

// import { homePage, a } from "./pages/home";
// console.log("homePage", homePage);
// console.log("Biến a là ", a);

// import homePage from "./pages/home";
// console.log("homePage1 là: ", homePage());
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/home";
import ProjectPage from "./pages/project";
import Post from "./pages/post";
import DetailProduct from "./pages/detail-project";
import ContactPage from "./pages/contact";
import AboutPage from "./pages/about";
import { render, router } from "./lib";
import NotFoundPage from "./pages/not-found";
import AdminProjectsPage from "./pages/admin/project";
import AdminAddProjectsPage from "./pages/admin/projects-add";
import AdminEditProjectPage from "./pages/admin/projects-edit";

const app = document.querySelector("#app");
// app.innerHTML = ProjectPage();

// render(ProjectPage, app);
router.on("/", () => {
  render(HomePage, app);
});
router.on("/about", () => render(AboutPage, app));
router.on("/contact", () => render(ContactPage, app));
router.on("/projects", () => render(ProjectPage, app));
router.on("/project/:id", ({ data }) => render(() => DetailProduct(data), app));
router.on("/posts", () => render(Post, app));

// admin/projects
router.on("/admin/projects", () => render(AdminProjectsPage, app));
router.on("/admin/projects/add", () => render(AdminAddProjectsPage, app));
router.on("/admin/projects/:id/edit", ({ data }) =>
  render(() => AdminEditProjectPage(data), app)
);
router.notFound(() => render(NotFoundPage, app));
router.resolve();
