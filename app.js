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

formInput.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(getInput());
});

const getInput = () => {
  let title = document.getElementById("form-book-title").value;
  let author = document.getElementById("form-book-author").value;
  let review = document.getElementById("form-book-review").value;
  let pageCount = document.getElementById("form-book-page-count").value;
  let isRead = document.getElementById("form-book-is-read").checked;

  return new Book(title, author, review, pageCount, isRead);
};
