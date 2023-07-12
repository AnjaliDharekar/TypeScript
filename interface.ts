// in general code
// interface Icity {
//     name: string;
//     displayCityName(); //only for declaration or all methods for abstract means incomplate
    
// }
// class ABC implements Icity {
//     name: string; 
//     // it is for implementation
//     displayCityName() {
//     throw new Error("method not implemented");
    
//     }
// }

// interface code for iphone product
interface IProduct {
    id: number;
    name: string;
    description: string;
    price?: number
}

class Product implements IProduct {
id: number = 2;
name: string = 'IPhone';
description: string = 'Its awesome ';


}
let objProduct = new Product();
console.log(objProduct);

// print in all types files i.e. pdf,doc,excel

interface IPrint {
    print(): void
}


class PDF  implements IPrint{
    print() {
        // print the file as pdf format
    }
}

class DOC implements IPrint {
    print() {
        // print the doc file as doc format
    }
}

class Excel implements IPrint {
    print() {
        // print the excel file as xls format
    }
}


// exterior and interior interface for car
interface Exterior {
    color: string;
    numOfDoors: number;
}

interface Interior {
    seats: number;
    auto: boolean;
}

interface Car extends Exterior, Interior {
    make: string;
    model: string;
    year: number;
}

var myCar: Car = {

    make : 'Tata',
    model : 'nexon',
    year: 2023,
    color: 'gray',
    numOfDoors : 4,
    seats : 4 ,
    auto : true
}

console.log("My Car", myCar)