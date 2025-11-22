class User {
  id: number;
  name: string;
  email: string;
  address: string;
  constructor(id: number, name: string, email: string, address: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.address = address;
  }
}

class Student extends User {
  role: string;
  constructor(
    id: number,
    name: string,
    email: string,
    address: string,
    role: string
  ) {
    super(id, name, email, address);
    this.role = role;
  }
}
class Admin extends User {
  role: string;
  constructor(
    id: number,
    name: string,
    email: string,
    address: string,
    role: string
  ) {
    super(id, name, email, address);
    this.role = role;
  }
}

const studen1 = new Student(
  1,
  "Ahosanul",
  "ahosanul81@gmail.com",
  "Comilla",
  "student"
);
const admin1 = new Admin(2, "Rahim", "rahim@gmail.com", "Comilla", "admin");
const getUser = (user: User) => {
  if (user instanceof Student) {
    console.log("From student insatance", user);
  } else if (user instanceof Admin) {
    console.log("From admin insatance", user);
  }
};
console.log(getUser(admin1));
