import { useState, useEffect } from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { postUser, getUserById, putUser } from '../api';

const UserForm = ({ edit }) => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const [inputState, setInputState] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
  });

  const handleInputChange = (input, value) => {
    setInputState({ ...inputState, [input]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // TO DO validazione javascript
    console.log(inputState);
    let result = { ok: false, data: [] };
    if (edit) {
      // faccio la PUT
      result = await putUser(inputState, userId);
    } else {
      // faccio la POST
      result = await postUser(inputState);
    }
    if (result.ok) {
      // faccio la redirect
      navigate('/');
    } else {
      // TO DO gestione errori
      console.log(result.data);
    }
  };

  useEffect(() => {
    if (edit) {
      const loadData = async () => {
        const result = await getUserById(userId);
        if (result.ok) {
          // precarico gli input con i valori dell'utente
          setInputState({
            username: result.data.username,
            password: result.data.password,
            firstName: result.data.firstName,
            lastName: result.data.lastName,
            dateOfBirth: result.data.dateOfBirth,
          });
        } else {
          console.log(result.data);
        }
      };
      loadData();
    }
  }, [edit, userId]);

  return (
    <div>
      <h1>{edit ? 'Edit User' : 'Create User'}</h1>
      <Row>
        <Form className="col-12 col-sm-6 col-lg-4" onSubmit={handleFormSubmit}>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              value={inputState.username}
              onChange={(e) => {
                handleInputChange(e.target.id, e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={inputState.password}
              onChange={(e) => {
                handleInputChange(e.target.id, e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="firstName">
            <Form.Label>First name</Form.Label>
            <Form.Control
              type="text"
              value={inputState.firstName}
              onChange={(e) => {
                handleInputChange(e.target.id, e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="lastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="text"
              value={inputState.lastName}
              onChange={(e) => {
                handleInputChange(e.target.id, e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="dateOfBirth">
            <Form.Label>Date of birth</Form.Label>
            <Form.Control
              type="date"
              value={inputState.dateOfBirth}
              onChange={(e) => {
                handleInputChange(e.target.id, e.target.value);
              }}
            />
          </Form.Group>
          <div className="mt-3">
            <Button type="submit">Save</Button>
            <Link to="/" className="btn btn-primary ms-2">
              Cancel
            </Link>
          </div>
        </Form>
      </Row>
    </div>
  );
};

export default UserForm;
