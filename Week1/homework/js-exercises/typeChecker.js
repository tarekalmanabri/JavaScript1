function checkType(one, two) {
    if (typeof one === typeof two) {
        console.log('SAME TYPE')
    } else {
        console.log('Not the same...')
    }
}
var string1 = 'hello';
var string2 = 'how are you?';
var myPet = {
    name: "Gouda",
    type: "cat",
    color: "gold"
}
var myStudy = {
    field: "programming",
    period: "7 month"
}

checkType(string1, string2);
checkType(string1, myPet);
checkType(string2, myPet);
checkType(string2, myStudy);
checkType(myStudy, myPet);
checkType(myStudy, string1);