
// Your Code Here
async function getBooks() {
    //created fetch function to get books
    let response = await fetch('http://localhost:3001/listBooks')
    let books = await response.json();
    books.forEach(renderBook);
    }

function renderBook(book) {
    let root = document.querySelector("#root");

    //created a list to get book titles
    let newList = document.createElement('li');
    newList.textContent = book.title
    root.appendChild(newList);

    //created a input field to update the book quantity
    let input = document.createElement('input');
    input.type = 'text';
    input.value = book.quantity;
    root.appendChild(input);

    


}








