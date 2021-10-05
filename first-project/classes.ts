class Department {
  //   private name: string;
  private employees: string[] = [];

  constructor(public name: string) {
    // this.name = n;
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(name: string, public admins: string[]) {
    super(name);
  }
}

const accounting = new Department("Accounting");

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

accounting.describe();

accounting.printEmployeeInformation();
