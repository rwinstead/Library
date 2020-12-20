function Book(title, author, pageLength, read) {
	this.title = title;
	this.author = author;
	this.pageLength = pageLength;
	this.read = read;

}

let MobyDick = new Book("Moby Dick", "Herman Melville", "752", false);
let CrimePunishment = new Book("Crime and Punishment", "Fyodor Dostoyevsky", "576", true);

let myLibrary = [MobyDick, CrimePunishment];

function openForm() {
	document.getElementById("form-popup").style.display = "block";
}

function submitForm() {
	document.getElementById("form-popup").style.display = "none";
	let newTitle = document.getElementById("newTitle").value;
	let newAuthor = document.getElementById("newAuthor").value;
	let newPages = document.getElementById("newPages").value;
	let newBook = new Book(newTitle, newAuthor, newPages, true);
	addBook(newBook);
	document.getElementById("form-container").reset();

}

function closeForm() {
	document.getElementById("form-popup").style.display = "none";
}


let closeSpan = document.getElementsByClassName("close")[0];

closeSpan.onclick = function() {
	document.getElementById("form-popup").style.display = "none";
}


function addBook(addedBook) {
	let shelf = document.getElementById("book-shelf");
	let colorId = decideColor();

	let div = document.createElement('div');
	let book = document.createElement('p');
	book.setAttribute("id", colorId);

	let removeBook = document.createElement('span');
	removeBook.setAttribute('class', 'removeBook');

	removeBook.textContent="×";
	removeBook.onclick = function(){
		div.remove();
	}

	let sliderLabel = document.createElement("label");
	sliderLabel.setAttribute("class", "switch");

	let sliderInput = document.createElement("input");
	sliderInput.setAttribute("type", "checkbox");

	let slider = document.createElement("span");
	slider.setAttribute("class", "slider round");

	let readText = document.createElement("span");
	readText.setAttribute("class", 'readText');
	readText.textContent = "Read";

	sliderLabel.appendChild(sliderInput);
	sliderLabel.appendChild(slider);

	let bookTitle = document.createElement('p');
	bookTitle.setAttribute('id', 'book-title');
	bookTitle.textContent = addedBook.title;

	let bookAuthor = document.createElement('p');
	bookAuthor.setAttribute('id', 'book-author');
	bookAuthor.textContent = "Author: " + addedBook.author;

	let bookLength = document.createElement('p');
	bookLength.setAttribute('id', 'book-length');
	bookLength.textContent = "Pages: " + addedBook.pageLength;

	book.appendChild(bookTitle);
	book.appendChild(bookAuthor);
	book.appendChild(bookLength);
	book.appendChild(sliderLabel);
	book.appendChild(readText);
	div.appendChild(removeBook);
	div.appendChild(book);
	shelf.appendChild(div);
}

function main() {

	console.log(myLibrary);

	let shelf = document.getElementById("book-shelf");

	for (let i in myLibrary) {

		let colorId = decideColor();

		let div = document.createElement('div');
		let book = document.createElement('p');
		book.setAttribute("id", colorId);

		let removeBook = document.createElement('span');
		removeBook.setAttribute('class', 'removeBook');
		removeBook.setAttribute('id', i)
		removeBook.textContent="×";
		removeBook.onclick = function(){
			div.remove();
		}
		
		let sliderLabel = document.createElement("label");
		sliderLabel.setAttribute("class", "switch");

		let sliderInput = document.createElement("input");
		sliderInput.setAttribute("type", "checkbox");

		let slider = document.createElement("span");
		slider.setAttribute("class", "slider round");

		let readText = document.createElement("span");
		readText.setAttribute("class", 'readText');
		readText.textContent = "Read";

		sliderLabel.appendChild(sliderInput);
		sliderLabel.appendChild(slider);

		let bookTitle = document.createElement('p');
		bookTitle.setAttribute('id', 'book-title');
		bookTitle.textContent = myLibrary[i].title;

		let bookAuthor = document.createElement('p');
		bookAuthor.setAttribute('id', 'book-author');
		bookAuthor.textContent = "Author: " + myLibrary[i].author;

		let bookLength = document.createElement('p');
		bookLength.setAttribute('id', 'book-length');
		bookLength.textContent = "Pages: " + myLibrary[i].pageLength;

		book.appendChild(bookTitle);
		book.appendChild(bookAuthor);
		book.appendChild(bookLength);
		book.appendChild(sliderLabel);
		book.appendChild(readText);
		div.appendChild(removeBook);
		div.appendChild(book);
		shelf.appendChild(div);
	}
}

function decideColor(){
	let rand = Math.floor(Math.random() * 9);

	if(rand >= 0 && rand < 3)
	{
		return 'book-card1';
	}

	if(rand >= 3 && rand < 6)
	{
		return 'book-card2';
	}

	if(rand >= 6 && rand < 10)
	{
		return 'book-card3';
	}

}

function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}


if (storageAvailable('localStorage')) {
  	
	console.log('storage available');

}
else {
	console.log('no local storage');
}








main();