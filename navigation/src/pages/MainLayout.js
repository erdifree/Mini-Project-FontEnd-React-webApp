import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, NavLink, Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <Navbar bg="light" expand="sm">
        <Container>
          <Link className="navbar-brand" to="/">
            Navigation App
          </Link>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="me-auto">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
              <NavLink className="nav-link" to="/faq">
                Faq
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Outlet />
      </Container>

      <Container
        as="footer"
        fluid
        className="bg-secondary text-light p-3 text-center mt-5"
      >
        I'm the footer
      </Container>
    </>
  );
};

export default MainLayout;
