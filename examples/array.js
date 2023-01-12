const projects = ["Product1", "Product2", "Product3"];
let result = "";
// for()
// for (let i = 0; i < projects.length; i++) {
//   result += `<div>${projects[i]}</div>`;
// }

// for ...in  (index)
// for (let index in projects) {
//   result += `<div>${projects[index]}</div>`;
// }

// for ...of  (index)
// for (let value of projects) {
//   result += `<div>${value}</div>`;
// }

//forEach
// const newProject = projects.forEach((value, index) => {
//   result += `<div>${value}</div>`;
// });

// map-method
const newProject = projects
  .map((value, index) => `<div>${value}</div>`)
  .join("");
console.log("result: ", newProject);
