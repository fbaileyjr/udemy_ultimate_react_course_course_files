const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring
const book = getBook(3);

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

// to declare an array destructure
const [primaryGenre, secondaryGenre, ...OtherGenre] = genres;

console.log(primaryGenre, secondaryGenre, OtherGenre);

const newGenres = [...genres, "epic fantasy"];

newGenres;

// using spread to add all of the contents of book and the new entry
// the order DOES matter, put new objects after the spread object
const updatedBook = {
  ...book,

  // adding a new property
  moviePublicationDate: "2001-12-19",

  // updating an existing property
  pages: 1210,
};
updatedBook;

const getYear = (str) => {
  return str.split("-")[0];
};
console.log(getYear(publicationDate));

// function getYear(str) {
//  return str.split("-")[0];
// }

// contains a summary of the current book object
const summary = `${title}, a {pages}-page long book, was written by ${author} and publised in ${getYear(
  publicationDate
)}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;
summary;

const pagesRange = pages > 1000 ? "over a thouasand" : "less than 1000";

pagesRange;
console.log(`The book has ${pagesRange}`);

console.log(true && "Some string");
console.log(false && "Some string");

// falsy; 0, '', null, undefined
console.log("jonas" && "Some string");

console.log(true || "Some String");
console.log(false || "Some String");

const spanishTranslation = book.translations.spanish || "Not Translated";
spanishTranslation;

// console.log(book.reviews.librarything.reviewsCount);

// since the count is 0, instead of reporting 0, End operator returns "no data"
// const countWrong = book.reviews.librarything.reviewsCount || "no data";
// countWrong;

// knowledge coalescing operator
// const count = book.reviews.librarything.reviewsCount ?? "no data";
//count;

/*(function getTotalReviecount(book) {
  const goodreads = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

console.log(getTotalReviecount(book));

getTotalReviecount(book);
*/

/*
function getTotalReviecount(book) {
  const goodreads = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

const books = getBooks();
books;

const x = [1, 2, 3, 4, 5].map((el) => el * 2);
x;

const titles = books.map((book) => book.title);
titles;

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviecount(book),
}));

essentialData;

// filter array method
const longBooksWithMovie = books
  .filter((books) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooksWithMovie;

const adventureBooks = books
  .filter((books) => books.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

// the reduce moethod
const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);

pagesAllBooks;

// the sort array
const arr = [3, 7, 1, 9, 6];
const sorted = arr.slice().sort((a, b) => a - b);
sorted;

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPages;

// working with immutable arrays
// 1) add a book object to array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};

const booksAfterAdd = [...books, newBook];

booksAfterAdd;

// 2) Delete book object from array
const bookAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
bookAfterDelete;

// 3) Update book object in the array
const booksAfterUpdate = bookAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1 } : book
);
booksAfterUpdate;

*/

// fetch, awaits for promise, use then for next action after response
// fetch("https://jsonplaceholder.typicode.com/todos")
//  .then((res) => res.json())
//  .then((data) => console.log(data));

// async/await method
async function getTodos() {
  const rest = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await rest.json();
  console.log(data);
}

getTodos();
