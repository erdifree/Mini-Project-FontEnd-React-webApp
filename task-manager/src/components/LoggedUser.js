import { Alert } from 'react-bootstrap';
import { BsBoxArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const LoggedUser = ({ firstName = 'Unknown', lastName = 'Unknown' }) => {
  return (
    <Alert variant="info">
      <span className="me-2">
        Hi {firstName} {lastName}!
      </span>
      <Link to="/" className="btn btn-info">
        <BsBoxArrowRight />
      </Link>
    </Alert>
  );
};
export default LoggedUser;
