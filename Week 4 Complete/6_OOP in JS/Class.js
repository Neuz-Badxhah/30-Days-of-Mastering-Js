class StudentDetails {
  constructor(id, name, faculty) {
    this.id = id;
    this.name = name;
    this.faculty = faculty;
  }
  getDetails() {
    console.log(`ID: ${this.id}, Name: ${this.name}, Faculty: ${this.faculty}`);
  }
}

const student1 = new StudentDetails(1, "Ram", "Science");
const student2 = new StudentDetails(2, "Shyam", "Management");
student1.getDetails();
student2.getDetails();