# 📚 Library Book Manager

A simple library management web app built with **React + Vite** and **React Router**. Users can browse books, search and filter them by genre, issue and return books, and see all issued books in one place.

---

## 👤 Student Details

| Field | Details |
|-------|---------|
| **Student Name** | Ayush Jaiswal |
| **Problem Statement** | P0 — Library Book Manager |
| **Live Link** | https://librarybookmanager.vercel.app/ |
| **GitHub Repo** | https://github.com/AYUshJaiswal454/Library-Book-Manager |

---

## ✨ Features

- **Home page** shows total books, issued books and not-available books
- **Books page** lists all books with:
  - Search by title
  - Genre filter: All, Biography, Fiction, Technology, Self-Help
- **Book card** shows title, author, genre and available copies
- **Badge** shows *Available* if copies > 0, otherwise *Not Available*
- **Issue button** sets the book as issued and reduces available copies by 1
- **Return button** sets the book as not issued and increases available copies by 1
- Shows **"Not Available"** text instead of a button when a book is not issued and has 0 copies
- **Book details page** also shows year, pages and total copies
- **Issued page** shows only issued books, or *"No books issued yet"*
- **Navbar** shows the live count of issued books
- State stays the same when moving between pages

---

## 🛣️ Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Title, introduction and summary counts |
| `/books` | Books | Searchable and filterable book list |
| `/books/:id` | BookDetails | Full details of one book |
| `/issued` | Issued | Only the issued books |

---

## ⚛️ React Concepts Used

- Functional components and JSX
- Props and variables
- `useState` and controlled inputs (search box and dropdown)
- `map()`, `filter()` and `find()`
- Conditional rendering
- React Router: `BrowserRouter`, `Routes`, `Route`, `Link`
- Dynamic route `/books/:id` with `useParams()`
- `key` prop when rendering lists

---

## 📁 Folder Structure

```
src/
├── data/
│   └── books.js
├── components/
│   ├── Navbar.jsx
│   └── BookCard.jsx
├── pages/
│   ├── Home.jsx
│   ├── Books.jsx
│   ├── BookDetails.jsx
│   └── Issued.jsx
├── App.jsx
└── main.jsx
```

---

## 🛠️ Tech Stack

- React
- Vite
- React Router
- CSS

---

## 🚀 How to Run Locally

1. Clone the repository
   ```bash
   git clone <your-repo-link>
   ```
2. Go to the project folder
   ```bash
   cd <project-folder>
   ```
3. Install dependencies
   ```bash
   npm install
   ```
4. Start the development server
   ```bash
   npm run dev
   ```
5. Open the link shown in the terminal (usually `http://localhost:5173`)

---

## 🌐 Deployment

The project is deployed on **Vercel**. A `vercel.json` file is included so that refreshing pages like `/books/3` does not give a 404 error:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```
