const drinkTray = [];
const drinkTypes = ['cola', 'lemonade', 'water'];

let drinkTypeIndex = 0;

for (let i = 0; i < 5; i++) {
    drinkTray.push(drinkTypes[drinkTypeIndex]);

    const drinks = drinkTray.filter(drink => {
        return drink === drinkTypes[drinkTypeIndex];
    });

    if (drinks.length >= 2) {
        drinkTypeIndex++
    }
}
console.log('Hey guys, I brought ' + drinkTray.join(', ') + '!');