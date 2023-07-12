// interface Icity {
//     name: string;
//     displayCityName(); //only for declaration or all methods for abstract means incomplate
var Product = /** @class */ (function () {
    function Product() {
        this.id = 2;
        this.name = 'IPhone';
        this.description = 'Its awesome ';
    }
    return Product;
}());
var objProduct = new Product();
console.log(objProduct);
