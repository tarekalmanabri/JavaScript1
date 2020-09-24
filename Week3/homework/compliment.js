function giveCompliment(myName) {
    const compliments = ['great', 'perfect', 'awesome', 'nice', 'good person', 'funny', 'fit', 'healthy', 'smart', 'good'];
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    console.log("You are " + randomCompliment + ", " + myName + "!");
}
giveCompliment("Tarek");