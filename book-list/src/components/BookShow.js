import { useState } from 'react';
import BookEdit from './BookEdit';

const BookShow = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    // chiedo conferma se vuoi eliminare
    const answer = window.confirm('Confirm delete?');
    if (answer) onDelete(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleBookEditSubmit = (id, title) => {
    onEdit(id, title);
    setShowEdit(false);
  };

  let content = (
    <div className="d-flex justify-content-between">
      <h4>{book.title}</h4>
      <div>
        <button className="btn btn-sm btn-danger" onClick={handleDeleteClick}>
          <i className="fa fa-trash"></i>
        </button>
        <button
          className="btn btn-sm btn-primary ms-1"
          onClick={handleEditClick}
        >
          <i className="fa fa-pencil"></i>
        </button>
      </div>
    </div>
  );
  if (showEdit) {
    content = <BookEdit book={book} onEdit={handleBookEditSubmit} />;
  }

  return <>{content}</>;
};

export default BookShow;
