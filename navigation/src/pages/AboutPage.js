import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const AboutPage = () => {
  useEffect(() => {
    document.title = 'About';
  }, []);
  return (
    <>
      <h1>AboutPage</h1>
      <Link to="/">Back to Home</Link>
    </>
  );
};

export default AboutPage;
