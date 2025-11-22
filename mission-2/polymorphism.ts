class Person {
  getSleep() {
    console.log("I am a common person. So I sleep for 10 hours.");
  }
}

class Teacher extends Person {
  getSleep() {
    console.log("I am a  teacher. So I sleep for 9 hours.");
  }
}
class Student extends Person {
  getSleep() {
    console.log("I am a  student. So I sleep for 8 hours.");
  }
}

const getSleepHours = (param: Person) => {
  return param.getSleep();
};

const person1 = new Person();
const teacher1 = new Teacher();
const student1 = new Student();

getSleepHours(teacher1);

// area of shape

class Shape {
  getArea() {
    return 0;
  }
}
class Circle extends Shape {
  radious: number;
  constructor(radious: number) {
    super();
    this.radious = radious;
  }

  getArea() {
    return Math.PI * this.radious ** 2;
  }
}
class Rectangle extends Shape {
  height: number;
  width: number;
  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }

  getArea() {
    return this.height * this.width;
  }
}

const circle1 = new Circle(12);
console.log(circle1.getArea());
