enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

// const person: {
//   name: string;
//   age: number;
//   role: [number, string];
// } = {
const person = {
  name: "Pawel",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person);

for (const hooby of person.hobbies) {
  console.log(hooby);
}

if (person.role === Role.ADMIN) {
  console.log("is admin!");
}
