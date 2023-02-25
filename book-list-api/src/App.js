import { useState, useEffect } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import { getBooks, deleteBook, postBook, putBook } from './api';

const App = () => {
  const [books, setBooks] = useState([]);

  const createBook = async (title) => {
    // creo un nuovo oggetto book
    const newBook = await postBook({ title: title });
    console.log(newBook);
    setBooks(await getBooks()); // nuovo array con tutti gli elementi di books + newBook
  };

  const deleteBookById = async (id) => {
    const deleteResponse = await deleteBook(id);
    console.log(deleteResponse);
    const updatedBooks = await getBooks();

    setBooks(updatedBooks);
  };

  const updateBookById = async (id, newTitle) => {
    const result = await putBook(id, { id: id, title: newTitle });
    console.log(result);
    setBooks(await getBooks());
  };

  // uso useEffect per caricare i dati al primo render del componente
  useEffect(() => {
    const loadBooks = async () => {
      const data = await getBooks();
      setBooks(data);
    };
    loadBooks();
  }, []);

  return (
    <div className="container d-flex flex-column align-items-center">
      <h1>Book List</h1>
      <BookList
        bookList={books}
        onDelete={deleteBookById}
        onEdit={updateBookById}
      />
      <BookCreate onCreate={createBook} />
    </div>
  );
};

export default App;
