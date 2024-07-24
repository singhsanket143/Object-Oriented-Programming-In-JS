class Product {
    #price;
    #name;
    #description;

    constructor(builder) {
        // valuidations before object creation
        console.log("Calling Product constructor")
        this.#name = builder.name;
        if (builder.price > 0) {
            this.#price = builder.price;
        } else {
            return {};
        }
        this.#description = builder.description;
    }

    displayProduct() {
        console.log("Product displayed", this.#name, this.#price, this.#description);
    }


    static get Builder() {
        class Builder {
            constructor() {
                this.name = ""; // default values
                this.price = 0;
                this.description = "";
            }

            setName(incomingName) {
                this.name = incomingName;
                return this;
            }

            setPrice(incomingPrice) {
                this.price = incomingPrice;
                return this;
            }

            setDescription(incomingDescription) {
                this.description = incomingDescription;
                return this;
            }

            build() {
                return new Product(this);
            }
        }

        return Builder;
    }

}

/**
 * Product.Builder() calls the Builder getter
 */
const p = new Product.Builder()
                    .setName("Iphone")
                    .setPrice(1000)
                    .setDescription("Apple Iphone")
                    .build();
                    

p.displayProduct();