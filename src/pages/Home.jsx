function Home({ books }) {
  const issued = books.filter((book) => book.isIssued).length;
  const notAvailable = books.filter((book) => book.availableCopies === 0).length;

  return (
    <div>
      <h1>Welcome to Library Book Manager</h1>
      <p>Here you can see all books, issue a book and return it.</p>
      <h3>Total Books: {books.length}</h3>
      <h3>Issued Books: {issued}</h3>
      <h3>Not Available Books: {notAvailable}</h3>
    </div>
  );
}

export default Home;
