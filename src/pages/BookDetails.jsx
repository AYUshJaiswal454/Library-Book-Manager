import { useParams, Link } from "react-router";

function BookDetails({ books, issueBook, returnBook }) {
  const { id } = useParams();
  const book = books.find((b) => b.id === Number(id));

  if (!book) {
    return <h2>Book not found</h2>;
  }

  return (
    <div className="card">
      <h1>{book.title}</h1>

      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Year: {book.year}</p>
      <p>Pages: {book.pages}</p>
      <p>Total Copies: {book.totalCopies}</p>
      <p>Available Copies: {book.availableCopies}</p>

      {book.availableCopies > 0 ? (
        <p className="green">Available</p>
      ) : (
        <p className="red">Not Available</p>
      )}

      {book.isIssued ? (
        <button onClick={() => returnBook(book.id)}>Return</button>
      ) : book.availableCopies > 0 ? (
        <button onClick={() => issueBook(book.id)}>Issue</button>
      ) : (
        <p className="red">Not Available</p>
      )}

      <br />
      <Link to="/books">Back</Link>
    </div>
  );
}

export default BookDetails;

