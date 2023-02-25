import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

const App = () => {
  const [books, setBooks] = useState([]);

  const createNewId = () => {
    if (books.length === 0) {
      return 1;
    }
    let idArray = books.map((el) => el.id); //[{id:1, title: "dsfs"}, {id:2, title: "sdfs"}] => [1, 2]
    return Math.max(...idArray) + 1; // Math.max(1,23,45,1,3) => 45
  };

  const createBook = (title) => {
    // creo un nuovo oggetto book
    const newBook = { id: createNewId(), title: title };
    // aggiungo il nuovo book alla lista dei books
    //books.push(newBook); // SBAGLIATO! non funziona
    setBooks([...books, newBook]); // nuovo array con tutti gli elementi di books + newBook
  };

  const deleteBookById = (id) => {
    console.log('In App elimino il libro ' + id);
    // voglio tenere solo gli elementi di books il cui id non è quello passato
    const updatedBooks = books.filter((el) => {
      return el.id !== id;
    });

    setBooks(updatedBooks);
  };

  const updateBookById = (id, newTitle) => {
    console.log('Update book with id ' + id + ': ' + newTitle);
    const updatedBooks = books.map((el) => {
      if (el.id === id) {
        // se l'elemento ha l'id del libro che devo modificare, sostituisco l'oggetto book
        return { ...el, title: newTitle };
      } else {
        // altrimenti restituisco direttamente el
        return el;
      }
    });
    setBooks(updatedBooks);
  };

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
