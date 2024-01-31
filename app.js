const myLibray = [];

class Book {
  constructor(
    title = "Untitled",
    author = "Unknown",
    review = "Empty",
    pageCount = 0,
    isRead = false
  ) {
    this.title = title;
    this.author = author;
    this.review = review;
    this.pageCount = pageCount;
    this.isRead = isRead;
  }
}

const formInput = document.getElementById("form-book-details");
const booksContainer = document.getElementById("books-container");

const dialog = document.querySelector("dialog");

// btnOpenDialog.addEventListener("click", (e) => {
//   dialog.showModal();
// });

dialog.addEventListener("click", (e) => {
  if (e.target.tagName === "DIALOG") dialog.close();
});

formInput.addEventListener("submit", (e) => {
  e.preventDefault();
  myLibray.push(getInput());
  refreshBooksContainer();
  populateBooksContainer();
  dialog.close();
  formInput.reset();
});

const getInput = () => {
  let title = document.getElementById("form-book-title").value;
  let author = document.getElementById("form-book-author").value;
  let review = document.getElementById("form-book-review").value;
  let pageCount = document.getElementById("form-book-page-count").value;
  let isRead = document.getElementById("form-book-is-read").checked;

  return new Book(title, author, review, pageCount, isRead);
};

const refreshBooksContainer = () => {
  booksContainer.innerHTML = ``;
  createNewBookCard();
};

const createNewBookCard = () => {
  let newBookCard = document.createElement("div");
  let newBookButton = document.createElement("button");

  newBookCard.classList.add("new-book-card");
  newBookButton.innerHTML = '<ion-icon name="add-circle"></ion-icon>';
  newBookButton.onclick = () => {
    dialog.showModal();
  };

  newBookCard.appendChild(newBookButton);
  booksContainer.appendChild(newBookCard);
};

if (booksContainer) {
  createNewBookCard();
}

const populateBooksContainer = () => {
  for (let book of myLibray) {
    createBookCard(book);
  }
};

const createBookCard = (book) => {
  let bookCard = document.createElement("div");
  let bookTitle = document.createElement("h2");
  let bookAuthor = document.createElement("small");
  let bookReview = document.createElement("p");
  let bookPageCount = document.createElement("small");

  bookCard.classList.add("book-card");
  bookTitle.classList.add("book-card-title");
  bookAuthor.classList.add("book-card-author");
  bookReview.classList.add("book-card-review");
  bookPageCount.classList.add("book-card-page-count");

  bookTitle.textContent = `${book.title}`;
  bookAuthor.textContent = `by ${book.author}`;
  bookReview.textContent = `${book.review}`;
  bookPageCount.textContent = `Page count: ${book.pageCount}`;

  bookCard.appendChild(bookTitle);
  bookCard.appendChild(bookAuthor);
  bookCard.appendChild(bookReview);
  bookCard.appendChild(bookPageCount);
  booksContainer.appendChild(bookCard);
};

myLibray.push(
  new Book(
    "Pride and Prejudice",
    "Jane Austen",
    "Some of my happiest, and most looked-forward-to days of the year are the ones that I reserve for the re-reading of Pride and Prejudice. To quote Austen herself from Sense and Sensibility: 'if a book is well written, I always find it too short,' explains perfectly how I feel about this book; no wonder she called this 'my own darling child,' for, for me, P&P is perfect in every conceivable way.",
    279,
    true
  )
);

myLibray.push(
  new Book(
    "Gulliver's Travels",
    "Jonathan Swift",
    "Everyone remembers poor Gulliver in breeches and three-cornered hat, pinned down with cords on a beach, by an army of minute soldiers. A young boy's nightmare, no doubt, but there is much more to this book than this rosy image, reproduced endlessly on the pediments of toy shops and theme parks. This is indeed an astonishing book.",
    306,
    true
  )
);

myLibray.push(
  new Book(
    "Journey to the End of the Night",
    "Louis-Ferdinand Céline",
    'Journey to the End of the Night "tells about the life of medical students". Ferdinand Bardamu, from the First World War on bush stories in the deepest Africa and a galley trip to America until the return to France as a poor doctor.',
    453,
    true
  )
);

refreshBooksContainer();
populateBooksContainer();
