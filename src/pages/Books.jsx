import { useState } from "react";
import BookCard from "../components/BookCard.jsx";

function Books({ books, issueBook, returnBook }) {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");
  const filteredBooks = books.filter((book) => {
    return (
      (genre === "All" || book.genre === genre) &&
      book.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div>
      <h1>All Books</h1>
      <input
        type="text"
        placeholder="Search book"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select value={genre} onChange={(e) => setGenre(e.target.value)}>
        {["All", "Biography", "Fiction", "Technology", "Self-Help"].map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      <div className="list">
        {filteredBooks.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            issueBook={issueBook}
            returnBook={returnBook}
          />
        ))}
      </div>

      {filteredBooks.length === 0 ? <p>No books found</p> : null}
    </div>
  );
}
export default Books;
