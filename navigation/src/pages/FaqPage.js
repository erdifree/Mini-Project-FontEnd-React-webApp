import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const FaqPage = () => {
  useEffect(() => {
    document.title = 'Faq';
  }, []);
  return (
    <>
      <h1>FaqPage</h1>
      <Link to="/">Back to Home</Link>
    </>
  );
};

export default FaqPage;
