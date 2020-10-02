const book1 = {
    title: "Origin",
    author: "Dan Brown",
    alreadyRead: false,
};

const book2 = {
    title: "Inferno",
    author: "Dan Brown",
    alreadyRead: true,
};

const book3 = {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    alreadyRead: true,
};
const books = [book1, book2, book3];

books.forEach((book) => {
    console.log(book.title + " by " + book.author);
    if (book.alreadyRead) {
        console.log('You already read "' + book.title + '"');
    } else {
        console.log("You still need to read " + book.title);
    }
});