import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <>
      <h1>HomePage</h1>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/faq">Faq</Link>
        </li>
        <li>
          <Link to="/dashboard">Go to Dashboard</Link>
        </li>
      </ul>
    </>
  );
};

export default HomePage;
