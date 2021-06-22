interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}

const studentOne: Student = {
  firstName: "Isabella",
  lastName:"Garcia",
  location: "Miami",
  age: 22,
};

const studentTwo: Student = {
  firstName: "Valentina",
  lastName:"Alvarez",
  location: "Los Angeles",
  age: 21,
};

const studentList: Array<Student> = [studentOne, studentTwo];

const table: HTMLTableElement = document.createElement('table');

// create Table header
const head: HTMLTableSectionElement = table.createTHead();
const row: HTMLTableRowElement = head.insertRow();
row.innerHTML = `<th>First Name</th><th>Location</th>`;

// create Table dody
const body: HTMLTableSectionElement = table.createTBody();
for (const student of studentList) {
  const row: HTMLTableRowElement = body.insertRow();
  const name: HTMLTableDataCellElement = row.insertCell();
  const location: HTMLTableDataCellElement = row.insertCell();
  name.innerHTML = student.firstName;
  location.innerHTML = student.location;
}

document.body.appendChild(table);
