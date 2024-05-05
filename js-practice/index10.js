const students = [
  { name: "Abhishek", class: "A", age: 17 },
  { name: "Akanksha", class: "B", age: 18 },
  { name: "Anurag", class: "C", age: 18 },
  { name: "Aniket", class: "D", age: 16 },
  { name: "Boman", class: "A", age: 19 },
  { name: "Bishal", class: "B", age: 19 },
  { name: "Brijesh", class: "C", age: 17 },
  { name: "Bicky", class: "D", age: 18 },
  { name: "Charan", class: "A", age: 20 },
  { name: "Chaitanya", class: "B", age: 20 },
  { name: "Chirag", class: "C", age: 19 },
  { name: "Devansh", class: "D", age: 17 },
  { name: "Emanuel", class: "A", age: 18 },
  { name: "Farukh", class: "B", age: 21 },
  { name: "Gauri", class: "C", age: 20 },
  { name: "Dharam", class: "D", age: 19 },
];

// console.log(students);

const studentClassed = students.reduce((acc, student) => {
  if (!acc[student.class]) {
    acc[student.class] = [];
  }
  acc[student.class].push(student);
  return acc;
}, {});

// console.log(studentClassed);

// finding the student with min age in each class
const studentsWithMinAge = {};
for (const [classCategory, studentsOfClass] of Object.entries(studentClassed)) {
  const minAgeStudent = studentsOfClass.reduce(
    (minAgeStudent, currentStudent) => {
      return minAgeStudent
        ? currentStudent.age < minAgeStudent.age
          ? currentStudent
          : minAgeStudent
        : currentStudent;
    },
    null
  );
  studentsWithMinAge[classCategory] = minAgeStudent;
}

console.log(studentsWithMinAge);
