let recipeCard = {
    title: 'Omelette',
    servings: 2,
    ingredients: ['4 eggs', '2 strips of bacon', '1 tsp salt/pepper']
}
for (let property in recipeCard) {
    console.log(`${property}: ${recipeCard[property]}`);
}