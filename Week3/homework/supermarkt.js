let shoppingCart = ["Bananas", "Milk"];

function addToShoppingCart(groceryItem) {
    shoppingCart.push(groceryItem);

    let groceries = shoppingCart.join(", ");

    if (shoppingCart.length > 2) {
        shoppingCart.shift();
    }

    console.log(`You bought ${groceries}!`);
}

addToShoppingCart("chocolate");
addToShoppingCart("watermelon");
addToShoppingCart("tea");