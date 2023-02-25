import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import UserList from './pages/UserList';
import UserForm from './pages/UserForm';
import TaskPage from './pages/TaskPage';

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/new-user" element={<UserForm />} />
        <Route path="/edit-user/:userId" element={<UserForm edit />} />
        <Route path="/:userId/tasks" element={<TaskPage />} />
      </Routes>
    </Container>
  );
};

export default App;
