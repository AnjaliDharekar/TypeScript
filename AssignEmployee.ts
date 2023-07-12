
export class Employee {
    public id: number;
    public fName: string;
    public lName : string;
    public salary : number;
    public age : number;
    public isTrasportAvail? : boolean;

    constructor( id: number,fName : string , lName: string , salary : number, age : number,isTrasportAvail: boolean){
        this.id= id ;
        this .fName = fName;
        this.lName=lName;
        this. salary = salary;
        this. age = age;
        this. isTrasportAvail = isTrasportAvail;

    }
} 
let Anju =new Employee (11, "anjali", " Dharekar",40000, 30,false )
let Rupa =new Employee (22, "rupali", " shirale",30000, 20,true )
let amol =new Employee (33, "Amol", " Patil",45000, 25,false )
console.log(`id is : ${Anju.id}, fname is: ${Anju.fName} , Salary is :  ${Anju.salary} ,isTrasportAvail  : ${Anju.isTrasportAvail }`);
const arrayEmp= [ Anju, Rupa,amol];

export function hello(h:string) {
    
    console.log("hello world");
    console.log(`i love  ${h}`);

}
hello(`Angular`)

arrayEmp.forEach( (employee)=> {
    if (employee.id==11 || employee.fName==`Amol`) {
        console.log(employee);
        
    }
}  );








