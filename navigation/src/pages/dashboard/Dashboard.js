import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg" className="navbar-dark">
        <Container>
          <Link className="navbar-brand">Dashboard</Link>
          <Navbar.Toggle aria-controls="dashboard-navbar" />
          <Navbar.Collapse id="dashboard-navbar">
            <Nav>
              <NavLink className="nav-link" to="messages">
                Messages
              </NavLink>
              <NavLink className="nav-link" to="tasks">
                Tasks
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <h1>Dashboard</h1>
        <Outlet />
      </Container>
    </>
  );
};

export default Dashboard;
