class Product {
    name;
    price;
    category;
    description;
    rating;

    constructor(productName, productPrice, productCategory, productDescription, productRating) {
        this.name = productName;
        this.price = productPrice;
        this.category = productCategory;
        this.description = productDescription;
        this.rating = productRating;
    }

    addToCart() {
        console.log("Product added to cart");
    }

    removeFromCart() {
        console.log("Product removed from cart");
    }

    displayProduct() {
        console.log("Product displayed", this);
    }

    buyProduct() {
        console.log("Product bought");
    }

}

let iphone = new Product("iPhone 12", 80000, "Mobile", "Apple iPhone 12", 4.5);

console.log(iphone);

iphone.displayProduct();

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