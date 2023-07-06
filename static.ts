export class Check {
    static bankName: string = "Bank Of India";
     customerName: string;
     accNumber: number;
 
     display() {
         console.log(Check.bankName);
     }
 }
 
 
 
 // object
 var check = new Check();
 Check.bankName = "BOA";
 check.display();