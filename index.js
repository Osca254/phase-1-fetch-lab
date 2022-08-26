function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
   let results= fetch('https://anapioficeandfire.com/api/books')
  .then((res)=>res.json())
  .then((data)=>renderBooks())
  .catch ((error) => `ERROR=>${console.log(error.message)}`);
  return results;
}


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
