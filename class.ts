// use public so you can not need to declare propertries initially

class Person {
    constructor(public fname: string, public age: number) {
        this.fname = fname;
        this.age = age;
    }
}

const jack = new Person('Jack', 50);
console.log(jack.fname, jack.age);

// optional parameter

class Person2 {

    constructor(public fname?: string, public age?: number) {
        this.fname = fname;
        this.age = age;
    }
}

const jack2 = new Person2('Jack', 50);
console.log(jack2.fname, jack2.age);

function Display(id: number, name: string, role: string = "Guest User") {
    console.log('Id', id);
    console.log('Name', name);
    if(role != undefined) {
        console.log('Role', role);
    }
    
}

//Display(1, 'Jack', 'Admin');

Display(1, 'Jack');


class Anjali {
    public fName: string;
    public lName : string;

    constructor(fName : string , lName: string ){
        this .fName = fName;
        this.lName=lName;

    }
} 
let jack3 =new Anjali ("anjali", " Dharekar")
let jack4 = new Anjali("Rupali", "Shirale");
console.log(jack3.fName, jack4.fName);

