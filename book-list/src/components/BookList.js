import BookShow from './BookShow';

const BookList = ({ bookList = [], onDelete, onEdit }) => {
  //[ {id:1, title: "dune"}, {}]
  //   console.log(props);
  //   console.log(props.bookList);
  //console.log(bookList);
  if (bookList.length === 0)
    return <div className="alert alert-info">The book list is empty</div>;
  return (
    <ul className="list-group w-50">
      {bookList.map((el) => {
        //console.log(el);
        return (
          <li key={el.id} className="list-group-item">
            <BookShow book={el} onDelete={onDelete} onEdit={onEdit} />
          </li>
        );
      })}
    </ul>
  );
};

export default BookList;
