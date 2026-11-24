import { Link } from "react-router";

function BookCard({ book, issueBook, returnBook }) {
  return (
    <div className="card">
      <h3>{book.title}</h3>

      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Available Copies: {book.availableCopies}</p>

      {book.availableCopies > 0 ? (
        <p className="green">Available</p>
      ) : (
        <p className="red">Not Available</p>
      )}

      {book.isIssued ? (
        <button onClick={() => returnBook(book.id)}>Return</button>
      ) : book.availableCopies === 0 ? (
        <p className="red">Not Available</p>
      ) : (
        <button onClick={() => issueBook(book.id)}>Issue</button>
      )}

      <br />
      <Link to={"/books/" + book.id}>View Details</Link>
    </div>
  );
}

export default BookCard;
