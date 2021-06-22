interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}

const studentOne: Student = {
  firstName: "Isabella",
  lastName:"Garcia",
  age: 22,
  location: "Miami",
};

const studentTwo: Student = {
  firstName: "Valentina",
  lastName:"Alvarez",
  age: 21,
  location: "Los Angeles",
};

const studentList: Array<Student> = [studentOne, studentTwo];

const table: HTMLTableElement = document.createElement("table");
document.body.appendChild(table);

studentList.forEach((student) => {
  const newRow: HTMLTableRowElement = table.insertRow();
  const newRowFirstName: HTMLTableDataCellElement = newRow.insertCell();
  const newRowLocation: HTMLTableDataCellElement = newRow.insertCell();
  newRowFirstName.innerHTML = student.firstName;
  newRowLocation.innerHTML = student.location;
});
