function Product(n, p, d) {
    this.name = n;
    this.price = p;
    this.description = d;
    
    this.displayProduct = function() {
        console.log("Name:", this.name, "Price", this.price, "description:", this.description);
    }

    
}

let a = new Product("macbook", 12500, "Apple macbook");
