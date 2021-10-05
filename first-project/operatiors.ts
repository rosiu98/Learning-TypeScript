// const userName = "Max";

// let age = 30;

// age = 29;

// const add = (a: number, b: number = 1) => a + b;

// const printOutput: (a: number | string) => void = (result) =>
//   console.log(result);

// console.log(add(2, 5));

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];

activeHobbies.push(...hobbies);

const person = {
  firstName: "Max",
  age: 30,
};

const copiedPerson = { ...person };

const add = (...numbers: number[]) => {
  numbers.reduce((item, value) => {
    return item + value;
  }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);
const [hobby1, hobby2] = hobbies;

const { firstName, age } = person;
