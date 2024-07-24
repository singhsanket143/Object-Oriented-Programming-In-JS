class Product {
    #name;
    #price;
    #category;
    #description;
    #rating;

    constructor(productName, productPrice, productCategory, productDescription, productRating) {
        if(productName === undefined || productPrice === undefined || productCategory === undefined || productDescription === undefined || productRating === undefined){
            console.log("Invalid parameters");
            return;
        }
        this.#name = productName;
        if(productPrice > 0 && typeof(productPrice) === "number"){
            this.#price = productPrice;
        }
        this.category = productCategory;
        this.description = productDescription;
        this.rating = productRating;
    }

    getPrice() {
        return this.#price;
    }

    setPrice(p) {
        if (p > 0) {
            this.#price = p;
        } else {
            console.log("Invalid price");
        }
    }

    getName(){
        return this.#name;
    }

    setName(n){
        this.#name = n;
    }

    getCategory(){
        return this.#category;
    }

    setCategory(c){

        if(c === undefined){
            console.log("Invalid category");
            return;
        }
        this.#category = c;
    }

    addToCart() {
        console.log("Product added to cart");
    }

    removeFromCart() {
        console.log("Product removed from cart");
    }

    displayProduct() {
        console.log("Product displayed", this.#name, this.#price, this.category, this.description, this.rating);
    }

    buyProduct() {
        console.log("Product bought");
    }

}

let iphone = new Product("Iphone 11", 900, "Electronics", "Apple Iphone 11", 4.5);

console.log(iphone);

// iphone.name = "Iphone 13";
// iphone.price = -1000;
// iphone.category = "Electronics";

iphone.setPrice(-1000);

iphone.displayProduct();

console.log(iphone.getPrice())

/**
 * 
 * let obj ={
    x:1,
    y:2,

    fn: function(){
       let x = 3;
       let y = 4;
       const printVariables = () =>{
            console.log(this.x,this.y)
             console.log(x,y)

       }
        printVariables()
    }
}
obj.fn()
 */

