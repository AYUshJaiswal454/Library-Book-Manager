import BookCard from "../components/BookCard.jsx";

function Issued({ books, issueBook, returnBook }) {
  const issuedBooks = books.filter((book) => book.isIssued);

  return (
    <div>
      <h1>Issued Books</h1>

      {issuedBooks.length === 0 ? (
        <p>No books issued yet</p>
      ) : (
        <div className="list">
          {issuedBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              issueBook={issueBook}
              returnBook={returnBook}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Issued;
