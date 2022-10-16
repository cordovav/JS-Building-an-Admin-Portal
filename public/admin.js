
// Your Code Here
async function main() {
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

    //created a input field to update the book quantity
    let bookInput = document.createElement('input');
    //input.type = 'text';
    bookInput.value = book.quantity;

    //create a button to save and add the new inputs
    let button = document.createElement('button');
    button.textContent = 'Save';

    //Create a fetch request to change the book quantity
    button.addEventListener('click', function () {
        fetch('http://localhost:3001/updateBook', {
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
        },
        body: JSON.stringify({
            id: book.id,
            quantity: bookInput.value,
        })
    })
});

    newList.append(bookInput, button);
    root.append(newList)
}

main()




