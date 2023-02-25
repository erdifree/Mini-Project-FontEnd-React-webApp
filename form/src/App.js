import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import postBreed from './api';
import { URL_PATTERN } from './utilities';
/**
 * {
        
        "name": "Beagle Hound",
        "description": "The Bagle Hound is a newer crossbreed composed from two older and long-beloved breeds, originating for dog parents who need a relaxed canine companion. ",
        "imageUrl": "https://images.dog.ceo/breeds/beagle/n02088364_8443.jpg",
        "trainability": 3,
        "minLifeSpan": 10,
        "maxLifeSpan": 12,
        "size": "SMALL" (XS, SMALL, MEDIUM, LARGE, XL)
    }
 */
const App = () => {
  const defaultInputState = {
    name: '',
    description: '',
    imageUrl: '',
    trainability: 1,
    minLifeSpan: 1,
    maxLifeSpan: 1,
    size: '',
  };
  const [inputState, setInputState] = useState(defaultInputState);
  const [inputErrors, setInputErrors] = useState({});

  const handleInputChange = (input, value) => {
    const newInputState = { ...inputState, [input]: value };
    setInputState(newInputState);
  };

  const validate = (inputObject) => {
    const errorObj = {};
    // valido name
    if (inputObject.name === '') {
      errorObj.name = 'Breed name is mandatory';
    }
    // valido imageUrl
    if (inputObject.imageUrl === '') {
      errorObj.imageUrl = 'Image url is mandatory';
    }
    if (
      inputObject.imageUrl !== '' &&
      !inputObject.imageUrl.match(URL_PATTERN)
    ) {
      errorObj.imageUrl = 'Image url must be a valid http url';
    }
    if (inputObject.size === '') {
      errorObj.size = 'Size is mandatory';
    }
    if (inputObject.minLifeSpan > inputObject.maxLifeSpan) {
      errorObj.minLifeSpan =
        'Min life span must be less or equal than Max life span';
      errorObj.maxLifeSpan =
        'Min life span must be less or equal than Max life span';
    }
    if (inputObject.trainability < 1 || inputObject.trainability > 5) {
      errorObj.trainability = 'Trainability must be between 1 and 5';
    }

    return errorObj;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errorObject = validate(inputState);
    if (Object.keys(errorObject).length === 0) {
      // eseguo la POST
      const response = await postBreed(inputState);
      if (response.ok) {
        // mostro messaggio di successo
        setInputErrors({});
        setInputState(defaultInputState);
      } else {
        // mostro messaggio di errore
      }
    } else {
      setInputErrors(errorObject);
    }
  };

  return (
    <Container>
      <h1>Create a Breed</h1>
      <Row>
        <Col md={6} lg={4}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Breed name</Form.Label>
              <Form.Control
                type="text"
                value={inputState.name}
                onChange={(e) => {
                  // setName(e.target.value);
                  handleInputChange(e.target.id, e.target.value);
                }}
                isInvalid={inputErrors.name ? true : false}
              />
              <Form.Control.Feedback type="invalid">
                {inputErrors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                value={inputState.description}
                onChange={(e) => {
                  //setDescription(e.target.value);
                  handleInputChange(e.target.id, e.target.value);
                }}
                isInvalid={inputErrors.description ? true : false}
              />
              <Form.Control.Feedback type="invalid">
                {inputErrors.description}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="imageUrl">
              <Form.Label>Image url</Form.Label>
              <Form.Control
                type="text"
                placeholder="http://...."
                value={inputState.imageUrl}
                onChange={(e) => {
                  // setImageUrl(e.target.value);
                  handleInputChange(e.target.id, e.target.value);
                }}
                isInvalid={inputErrors.imageUrl ? true : false}
              />
              <Form.Text>Insert a valid http url</Form.Text>
              <Form.Control.Feedback type="invalid">
                {inputErrors.imageUrl}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="trainability">
              <Form.Label>Trainability</Form.Label>
              <Form.Range
                min={1}
                max={5}
                value={inputState.trainability}
                onChange={(e) => {
                  // setTrainability(e.target.value);
                  handleInputChange(e.target.id, e.target.value);
                }}
              />
              <Form.Text className="text-danger">
                {inputErrors.trainability}
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="minLifeSpan">
              <Form.Label>Min life span</Form.Label>
              <Form.Control
                type="number"
                min={1}
                max={30}
                value={inputState.minLifeSpan}
                onChange={(e) => {
                  // setMinLifeSpan(e.target.value);
                  handleInputChange(e.target.id, e.target.value);
                }}
                isInvalid={inputErrors.minLifeSpan ? true : false}
              />
              <Form.Control.Feedback type="invalid">
                {inputErrors.minLifeSpan}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="maxLifeSpan">
              <Form.Label>Max life span</Form.Label>
              <Form.Control
                type="number"
                min={1}
                max={30}
                value={inputState.maxLifeSpan}
                onChange={(e) => {
                  // setMaxLifeSpan(e.target.value);
                  handleInputChange(e.target.id, e.target.value);
                }}
                isInvalid={inputErrors.maxLifeSpan ? true : false}
              />
              <Form.Control.Feedback type="invalid">
                {inputErrors.maxLifeSpan}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="size">
              <Form.Label>Size</Form.Label>
              <Form.Select
                value={inputState.size}
                onChange={(e) => {
                  // setSize(e.target.value);
                  handleInputChange(e.target.id, e.target.value);
                }}
                isInvalid={inputErrors.size ? true : false}
              >
                <option value="">Choose a size</option>
                <option value="XS">Extra Small</option>
                <option value="SMALL">Small</option>
                <option value="MEDIUM">Medium</option>
                <option value="LARGE">Large</option>
                <option value="XL">Extra Large</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {inputErrors.size}
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
