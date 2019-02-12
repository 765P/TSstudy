interface IBook {
	bookName:string;
	bootAuthor:string;
}

function bookinfo(paramBook:IBook):void {
	console.log(paramBook.bookName);
}

let myBook:IBook = {
	bookName:"book name",
	bootAuthor:"Author"
};

bookinfo(myBook);

/*
interface2.js
function bookinfo(paramBook) {
    console.log(paramBook.bookName);
}
var myBook = {
    bookName: "book name",
    bootAuthor: "Author"
};
bookinfo(myBook);

*/