import { useState } from 'react';
const BookEdit = ({ book, onEdit }) => {
  const [title, setTitle] = useState(book.title);

  const handleSubmit = (event) => {
    event.preventDefault();
    onEdit(book.id, title);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="form-label">Title</label>
      <input
        className="form-control"
        type="text"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <button className="btn btn-success mt-2">Save</button>
    </form>
  );
};

export default BookEdit;
