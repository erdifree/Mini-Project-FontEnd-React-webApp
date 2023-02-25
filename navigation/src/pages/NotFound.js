import { Alert, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center vh-100">
      <Alert variant="warning" className="p-5">
        <h1>Ooops page not found</h1>
        <Link to="/">Back to home page</Link>
      </Alert>
    </Container>
  );
};

export default NotFound;
