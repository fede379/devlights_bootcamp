// scopes and variable declaration
var a = "Java";
var x = "Javascript";

const falsy = null;
const truthy = {};

function main() {
  console.log("inside function", a);
  console.log("inside function", x);
}

function hello() {
  if (true) {
    var a = "Javascript"; // function scope
    let b = "C++"; // block scope
    const c = "Python"; // block scope
    b = "JAVA";
    console.log("inside block", a);
    console.log("inside block", b);
    console.log("inside block", c);
  }

  // console.log("outside block", a);
  // console.log("outside block", b);
  // console.log("outside block", c);
}

// if (truthy) {
//   console.log("truthy value");
// } else {
//   console.log("falsy value");
// }

// console.log(true && truthy);

// hello();

// if (a === "Java") {
//   a = "C##";
// }

// console.log("outside function", a);
// main();
// console.log("after function", a);

// Object

const myCar = {
  color: "red",
  brand: "Toyota",
  wheels: 4,
  engine: { cylinders: 4, cv: 155 },
  hello: () => {
    console.log(`Hello!`);
  },
};

// console.log(Object.keys(myCar));
// console.log(Object.values(myCar));
// console.log(myCar.hasOwnProperty("brand"))
// console.log(myCar["brand"])
// console.log(myCar.brand)
// myCar.hello()

// Arrays
const students = [
  { name: "Peter", age: 35, language: "C++" },
  { name: "John", age: 17, language: "Javascript" },
  { name: "Sarah", age: 21, language: "Ruby" },
  { name: "Isaac", age: 40, language: "Python" },
  { name: "Susan", age: 32, language: "C#" },
  { name: "Fede", age: 28, language: "Javascript" },
];

// function filterAge(student) {
//     return student.age > 25
// }

// console.log(students.filter((student) => student.age > 25));

// console.log(students.map(student => student.name))

// console.log(
//   students.reduce(
//     (previousValue, currentValue) => previousValue + currentValue.age,
//     0
//   )
// );

// Destructuring assignment
const languages = ["Python", "Javascript", "C++", "C#", "Ruby"];

const [first, second, ...rest] = languages;

const { brand, color } = myCar;

// console.log({ brand, color });
// console.log({first, second});

// callbacks
function makeAsync(fun) {
  return setTimeout(fun, 300);
}

function test() {
  console.log("test1");
  timeout(() => console.log("test2")).then(() => {
    console.log("fulfilled");
  });
  console.log("test3");
}

// test();

// promises
function timeout(fun) {
  return new Promise((resolve) => setTimeout(resolve(fun()), 300));
}

function fetchData() {
  const url = "https://randomuser.me/api/?page=3&results=10&seed=abc";
  return fetch(url).then((response) => response.json());
}

function fetchPromiseTest() {
  fetchData()
    .then((data) => console.log(data))
    .catch((error) => console.log(error.message));
}

// async await
async function fetchAsyncAwaitTest() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.log("Error", error.message);
  }
}
