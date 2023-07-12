"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(id, fName, lName, salary, age, isTrasportAvail) {
        this.id = id;
        this.fName = fName;
        this.lName = lName;
        this.salary = salary;
        this.age = age;
        this.isTrasportAvail = isTrasportAvail;
    }
    return Employee;
}());
exports.Employee = Employee;
var Anju = new Employee(11, "anjali", " Dharekar", 40000, 30, false);
var Rupa = new Employee(22, "rupali", " shirale", 30000, 20, true);
var amol = new Employee(33, "Amol", " Patil", 45000, 25, false);
console.log("id is : ".concat(Anju.id, ", fname is: ").concat(Anju.fName, " , Salary is :  ").concat(Anju.salary, " ,isTrasportAvail  : ").concat(Anju.isTrasportAvail));
var arrayEmp = [Anju, Rupa, amol];
function hello(h) {
    console.log("hello world");
    console.log("i love  ".concat(h));
}
exports.hello = hello;
hello("Angular");
arrayEmp.forEach(function (employee) {
    if (employee.id == 11 || employee.fName == "Amol") {
        console.log(employee);
    }
});
