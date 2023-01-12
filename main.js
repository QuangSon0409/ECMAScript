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
import HomePage from "./pages/home";
import ProjectPage from "./pages/project";
import Post from "./pages/post";
import DetailProduct from "./pages/detail-product";
import ContactPage from "./pages/contact";
import AboutPage from "./pages/about";
import { render, router } from "./lib";
import NotFoundPage from "./pages/not-found";

const app = document.querySelector("#app");
// app.innerHTML = ProjectPage();

// render(ProjectPage, app);
router.on("/", () => {
  render(HomePage, app);
});
router.on("/about", () => render(AboutPage, app));
router.on("/contact", () => render(ContactPage, app));
router.on("/projects", () => render(ProjectPage, app));
router.on("/projects/:id", () => render(DetailProduct, app));
router.on("/posts", () => render(Post, app));
router.resolve();
router.notFound(() => render(NotFoundPage, app));
