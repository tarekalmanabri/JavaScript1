function checkType(one, two) {
    if (typeof one === typeof two) {
        console.log("SAME TYPE");
    } else {
        console.log("Not the same...");
    }
}
const string1 = "hello";
const string2 = "how are you?";
const myPet = {
    name: "Gouda",
    type: "cat",
    color: "gold",
};
const myStudy = {
    field: "programming",
    period: "7 month",
};

checkType(string1, string2);
checkType(string1, myPet);
checkType(string2, myPet);
checkType(string2, myStudy);
checkType(myStudy, myPet);
checkType(myStudy, string1);