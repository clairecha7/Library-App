const form = document.getElementById('book-form') as HTMLFormElement;

form.addEventListener("submit", (e: Event)=>{
    e.preventDefault();

const inputTitle = document.getElementById('title') as HTMLInputElement;
const inputAuthor = document.getElementById('author') as HTMLInputElement;
const inputIsbn = document.getElementById('isbn') as HTMLInputElement;


// console.log(inputTitle.value, inputAuthor.value, inputIsbn.value);

const values: string[] =[inputTitle.value, inputAuthor.value, inputIsbn.value];

displayResults(values);

});

function displayResults(arg: string[]) {
// console.log(arg);
const outputField = document.getElementById('book-list') as HTMLElement;
const trElement = document.createElement("tr") as HTMLElement;
for(let x = 0; x < arg.length; x++) {
    const tdElement = document.createElement('td') as HTMLElement;
    tdElement.innerText = arg[x];
    trElement.appendChild(tdElement);
};
const tdElement = document.createElement('td') as HTMLElement;
tdElement.innerHTML = `<a href="#" class="delete">X</a>`;

trElement.appendChild(tdElement);
// console.log(trElement);

outputField.appendChild(trElement); 
 
};

