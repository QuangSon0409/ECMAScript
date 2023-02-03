const myDisplay = (item) => {
  document.querySelector("#app").innerHTML = item;
};
const myCalculator = (a, b, myCallback) => {
  myCallback(a + b);
};
myCalculator(10, 30, myDisplay);
