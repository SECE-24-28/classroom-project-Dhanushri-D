const books = [
  {
    bookName: "JavaScript Guide",
    author: "John Doe",
    pages: 350,
    price: 499,
    rating: 4.3,
    category: "Programming",
    publishedYear: 2019,
  },
  {
    bookName: "React Mastery",
    author: "Siddharth Sharma",
    pages: 280,
    price: 599,
    rating: 4.8,
    category: "Programming",
    publishedYear: 2023,
  },
  {
    bookName: "History of India",
    author: "R. Sharma",
    pages: 420,
    price: 399,
    rating: 4.1,
    category: "History",
    publishedYear: 2015,
  },
  {
    bookName: "CSS Basics",
    author: "Meena Gupta",
    pages: 180,
    price: 199,
    rating: 3.9,
    category: "Design",
    publishedYear: 2020,
  },
  {
    bookName: "Node.js Deep Dive",
    author: "Alex Ron",
    pages: 510,
    price: 699,
    rating: 4.7,
    category: "Programming",
    publishedYear: 2021,
  },
];

// 1. Get all books name with rating greater than 4.5
// 2. Get the names of all books published after 2020
// 3. Calculate the total price of all Programming books
// 4. Find the average number of pages of all books in the Design category
// 5. Get a list of authors who have written books with a rating less than 4.0
// 6. Find the most expensive book in the collection
// 7. Get all books that have more than 300 pages and are priced below 500
// 8. Create a new array with book names and their respective authors
let res1=books.filter((book)=>{
  return book.rating>4.5;
});
console.log(res1);

let arr=books.filter((book)=>{
  return book.publishedYear>2020;
}).map((n)=>{
  return n.bookName;
});
console.log(arr);

let res3=books.reduce((acc,book,ind)=>{
  return acc+book.price;
},0);
console.log(res3);

let design=books.filter((book)=>{
  return book.category=="Design";
});
let res4=design.reduce((acc,book,ind)=>{
  return acc+book.pages/design.length;
},0);
console.log(res4);

let res5=books.filter((book)=>{
  return book.rating<4.0;
}).map((b)=>{
  return b.author;
});
console.log(res5);

let res6=books.reduce((acc,book)=>{
  return book.price>acc.price?book:acc;
});
console.log(res6);


let res7=books.filter((book)=>{
  return book.pages>300 && book.price<500;
});
console.log(res7);

let res8=books.map((book)=>({
  name:book.bookName,
  Author:book.author
}));
console.log(res8);
