interface Person {
  name: string;
  age: number;

  greet(text: string): void;
}

let user1: Person;

user1 = {
  name: "Max",
  age: 30,
  greet(text: string) {
    console.log(text + " " + this.name);
  },
};

user1.greet("Hi there - I am");
