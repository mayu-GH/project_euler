class Student {
  fullName: string;
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return 'Hello, ' + person.firstName + ' ' + person.lastName;
}

function hello(user: any) {
  console.log('Hello, ', user);
}

const user = new Student('Jane', 'M.', 'User');

document.body.textContent = greeter(user);

const s = [1, 2, 3];
const t = 201;
s.push(4);

const v = [];
v.push(10);
