// 1. Function name
function sum(a, b) {
  return a + b;
}
console.log(sum(10, 20));
// 2. Function Expession
const sum2 = function (a, b) {
  return a + b;
};
console.log("function expression", sum2(10, 20));
// 3. Arrow function
const sum3 = (a, b) => a + b;
console.log("arrow function", sum3(10, 20));
// 4. IIFE Function
((a, b) => console.log(a + b))(500, 1000);

// Khai báo hàm: động từ và phải là tiếng anh
const productsList = [1, 2, 3, 4];
function showProduct(products) {
  // checking
  if (!Array.isArray(products)) return "";
  // processing
  let result = "";
  for (let i = 0; i < products.length; i++) {
    result += "<div>" + products[i] + "</div>";
  }
  // return
  return result;
}
document.querySelector(".productList").innerHTML = showProduct(productsList);
