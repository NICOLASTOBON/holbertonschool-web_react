interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [propName: string]: any,
}

interface Directors extends Teacher {
  numberOfReports: number,
}

interface PrintTeacherFunction {
  (firstName: string, lastName: string): string,
}

interface StudentClassInteface {
  firstName: string,
  lastName: string,
  workOnHomework(): string,
  displayName(): string,
}

interface StudentConstructor {
  new(firstName: string, lastName: string): StudentClassInteface,
}

export const printTeacher: PrintTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName[0]}. ${lastName}`;
}

export const StudentClass: StudentConstructor =  class StudentClass implements StudentClassInteface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently workin";
  }

  displayName(): string {
    return this.firstName;
  }
}
