"use strict";
const form = document.getElementById('book-form');
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputTitle = document.getElementById('title');
    const inputAuthor = document.getElementById('author');
    const inputIsbn = document.getElementById('isbn');
    // console.log(inputTitle.value, inputAuthor.value, inputIsbn.value);
    const values = [inputTitle.value, inputAuthor.value, inputIsbn.value];
    displayResults(values);
});
function displayResults(arg) {
    // console.log(arg);
    const outputField = document.getElementById('book-list');
    const trElement = document.createElement("tr");
    for (let x = 0; x < arg.length; x++) {
        const tdElement = document.createElement('td');
        tdElement.innerText = arg[x];
        trElement.appendChild(tdElement);
    }
    ;
    const tdElement = document.createElement('td');
    tdElement.innerHTML = `<a href="#" class="delete">X</a>`;
    trElement.appendChild(tdElement);
    // console.log(trElement);
    outputField.appendChild(trElement);
}
;
