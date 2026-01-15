//SECTION 1: OOPS Thinking with Objects
let Laptop = {
  name: "brand",
  price: 100,

  start: function () {
    return "Laptop started...";
  },
  increasePrice: function () {
    return (this.price += this.price * 0.01);
  },
};

//SECTION 2: Classes and Objects (Reinforcement)
class Employee {
  constructor(name, salary) {
    this.name = name;
    this._salary = salary;
  }

  showDetails = function () {
    return this.name + "-" + this.salary;
  };

  set salary(val) {
    this._salary = val;
  }

  get salary() {
    return this._salary;
  }
}

let emp1 = new Employee("Rakesh", 10000);
let emp2 = new Employee("Ramesh", 12000);
let emp3 = new Employee("aakash", 14000);

emp1.salary = 11000;

//SECTION 3: Constructor and Initialization
class BankAccount {
  constructor(accountHolderName, balance) {
    this.accountHolderName = accountHolderName;
    this._balance = balance;
  }

  set deposit(amount) {
    this._balance += amount;
  }

  get deposit() {
    return this._balance;
  }
}

let bankAcc1 = new BankAccount("Ramesh", 100000);
let bankAcc2 = new BankAccount("Gaurav", 130000);
bankAcc1.deposit = 20000;

//SECTION 4: Understanding this (Very Important)
let profile = {
  username: "Dishant",
  printName: function () {
    console.log(this.username);
  },
  //   printName: () => {
  //     console.log(this.username);
  //   },
};

//SECTION 5: Constructor Function and Prototype
function Vehicle(type, wheels) {
  this.type = type;
  this.wheels = wheels;

  //   this.describe = function () {
  //     return this.type + " " + this.wheels;
  //   };
}

Vehicle.prototype.describe = function () {
  return this.type + " " + this.wheels;
};

let Vehicle1 = new Vehicle("Car", 4);

//SECTION 6: call Method Practice
function showBrand(brand) {
  console.log(brand);
}

let brand1 = {
  brand: "Puma",
};

let brand2 = {
  brand: "Addidas",
};

showBrand.call(brand1);
showBrand.call(brand2);
