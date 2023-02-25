import { useState } from 'react';

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState('');

  const handleInputChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(title);
    onCreate(title);
    setTitle('');
  };

  return (
    <form
      className="bg-primary text-light w-50 p-5 border"
      onSubmit={handleSubmit}
    >
      <label className="form-label" htmlFor="title">
        Title
      </label>
      <input
        type="text"
        id="title"
        className="form-control"
        value={title}
        onChange={handleInputChange}
      ></input>
      <button className="btn btn-light mt-3" type="submit">
        Create Book
      </button>
    </form>
  );
};

export default BookCreate;
