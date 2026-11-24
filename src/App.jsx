import { useState } from "react";
import { Routes, Route } from "react-router";
import booksData from "./data/books.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Books from "./pages/Books.jsx";
import BookDetails from "./pages/BookDetails.jsx";
import Issued from "./pages/Issued.jsx";
import "./App.css";

function App() {
  const [books, setBooks] = useState(booksData);

  function updateBook(id, isIssued) {
    setBooks(
      books.map((book) =>
        book.id === id
          ? {
              ...book,isIssued,
              availableCopies: book.availableCopies + (isIssued ? -1 : 1),
            }
          : book
      )
    );
  }

  const issueBook = (id) => updateBook(id, true);
  const returnBook = (id) => updateBook(id, false);

  const issuedCount = books.filter((book) => book.isIssued).length;

  return (
    <>
      <Navbar issuedCount={issuedCount} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home books={books} />} />
          <Route
            path="/books"
            element={<Books books={books} issueBook={issueBook} returnBook={returnBook} />}
          />
          <Route
            path="/books/:id"
            element={<BookDetails books={books} issueBook={issueBook} returnBook={returnBook} />}
          />
          <Route
            path="/issued"
            element={<Issued books={books} issueBook={issueBook} returnBook={returnBook} />}
          />
        </Routes>
      </div>
    </>
  );
}
export default App;
