// use public so you can not need to declare propertries initially
var Person = /** @class */ (function () {
    function Person(fname, age) {
        this.fname = fname;
        this.age = age;
        this.fname = fname;
        this.age = age;
    }
    return Person;
}());
var jack = new Person('Jack', 50);
console.log(jack.fname, jack.age);
// optional parameter
var Person = /** @class */ (function () {
    function Person(fname, age) {
        this.fname = fname;
        this.age = age;
        this.fname = fname;
        this.age = age;
    }
    return Person;
}());
var jack = new Person('Jack', 50);
console.log(jack.fname, jack.age);
function Display(id, name, role) {
    if (role === void 0) { role = "Guest User"; }
    console.log('Id', id);
    console.log('Name', name);
    if (role != undefined) {
        console.log('Role', role);
    }
}
//Display(1, 'Jack', 'Admin');
Display(1, 'Jack');
var Anjali = /** @class */ (function () {
    function Anjali(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }
    return Anjali;
}());
var jack1 = new Anjali("anjali", " Dharekar");
var jack2 = new Anjali("Rupali", "Shirale");
console.log(jack1.fName, jack2.fName);
