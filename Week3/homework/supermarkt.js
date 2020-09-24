let shoppingCart = ["Bananas", "Milk"];

function addToShoppingCart(groceryItem) {
    shoppingCart.push(groceryItem);

    let groceries = "";

    if (shoppingCart.length > 3) {
        shoppingCart.shift();
    }

    shoppingCart.forEach((item, index) => {
        groceries += item;

        if (shoppingCart.length - 1 !== index) {
            groceries += ", ";
        }
    });

    console.log(`You bought ${groceries}!`);
}

addToShoppingCart("chocolate");
addToShoppingCart("watermelon");
addToShoppingCart("tea");