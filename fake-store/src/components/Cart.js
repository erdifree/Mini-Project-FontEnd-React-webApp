import { useState } from 'react';
import { BsFillCartFill, BsFillTrashFill } from 'react-icons/bs';
import { Button, Offcanvas, Alert } from 'react-bootstrap';
const Cart = ({ cart, onRemove }) => {
  const [showList, setShowList] = useState(false);

  const toggleShowList = () => {
    setShowList(!showList);
  };

  const removeFromCart = (product) => {
    onRemove(product);
  };

  let content = (
    <ul className="list-group">
      {cart.map((el) => {
        return (
          <li
            key={el.id}
            className="d-flex align-items-center justify-content-between list-group-item"
          >
            <span>
              {el.title} {el.price} &euro;
            </span>
            <button
              className="btn btn-info btn-sm"
              onClick={() => {
                removeFromCart(el);
              }}
            >
              <BsFillTrashFill />
            </button>
          </li>
        );
      })}
    </ul>
  );
  if (cart.length === 0) {
    content = <Alert variant="info">Your cart is empty</Alert>;
  }

  return (
    <div className="alert alert-info">
      <Button variant="info" size="lg" onClick={toggleShowList}>
        <BsFillCartFill />
        <span className="badge bg-secondary">{cart.length}</span>
      </Button>
      <Offcanvas show={showList} onHide={toggleShowList} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{content}</Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Cart;
