// rest parameter

const add = ({ a, b, ...orther }) => {
  console.log("a là: ", a); // a
  console.log("b là: ", b); // b
  console.log("orther là: ", orther); //object {c:6,d:10}
};
add({ a: 1, b: 2, c: 6, d: 10 }); //
