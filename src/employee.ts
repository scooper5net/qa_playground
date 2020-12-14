class employee {
 id: number;
 name: string;
 phoneNumber: string;
 email: string;
 constructor(id: number, name: string, phoneNumber: string, email: string) {
    this.id = id;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.email = email;
 }
 toString(): string {
     let output = 
     `Employee Record\n============\n` +
     `ID: ${this.id}\n` +
     `Name: ${this.name}\n` +
     `Phone Number: ${this.phoneNumber}\n` + 
     `Email: ${this.email}\n============`;
    return output;
    }
}


let newEmployee = new employee(0, "Steven Cooper", "321-200-2976", "steven.cooper@securenettech.com");

console.log(newEmployee.toString());

