const cartForParty = {
    beer: 3.7,
    water: 2.2,
    orange: 2.5,
    tea: 2,
    cigarettes: 7,
};

function calculateTotalPrice(cartForParty) {
    let totalPriceItem = 0;
    for (let key in cartForParty) {
        totalPriceItem += cartForParty[key];
    }
    console.log(`Total: €${totalPriceItem}`);
}
calculateTotalPrice(cartForParty);