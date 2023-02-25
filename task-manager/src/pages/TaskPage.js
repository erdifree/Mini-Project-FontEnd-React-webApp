import { useState, useEffect, useCallback } from 'react';
import { Col, Container, Row, Modal, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getUserById, putTask, deleteTaskById, postUserTask } from '../api';
import LoggedUser from '../components/LoggedUser';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const TaskPage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const loadUser = useCallback(async () => {
    const result = await getUserById(userId);
    if (result.ok) {
      console.log(result.data);
      setUser(result.data);
      setTasks(result.data.tasks);
    } else {
      console.log(result.data);
    }
  }, [userId]);

  const updateTask = async (task, taskId) => {
    const result = await putTask(task, taskId, userId);
    if (result.ok) {
      loadUser();
    } else {
      console.log(result.data);
    }
  };

  const deleteTask = async (taskId) => {
    const result = await deleteTaskById(userId, taskId);
    if (result.ok) {
      loadUser();
    } else {
      console.log(result);
    }
  };

  const createTask = async (task) => {
    const result = await postUserTask(userId, task);
    if (result.ok) {
      loadUser();
    } else {
      console.log(result);
    }
  };

  const toggleShowModal = () => {
    setShowModal(!showModal);
  };
  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <>
      <Container>
        <header>
          <div className="d-flex justify-content-end">
            <LoggedUser firstName={user.firstName} lastName={user.lastName} />
          </div>
          <div className="d-flex align-items-center">
            <h1>Tasks</h1>
            <Button
              variant="info"
              className="rounded-circle btn-lg ms-3"
              onClick={toggleShowModal}
            >
              +
            </Button>
          </div>
          <hr />

          <Row>
            <Col xs={12} sm={6}>
              <h2>To do</h2>
              <TaskList
                tasks={tasks.filter((t) => !t.completed)}
                onUpdateTask={updateTask}
                onDeleteTask={deleteTask}
              />
            </Col>
            <Col xs={12} sm={6}>
              <h2>Completed</h2>
              <TaskList
                tasks={tasks.filter((t) => t.completed)}
                onUpdateTask={updateTask}
                onDeleteTask={deleteTask}
              />
            </Col>
          </Row>
        </header>
      </Container>

      <Modal show={showModal} onHide={toggleShowModal}>
        <Modal.Header closeButton>
          <Modal.Title>Create task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TaskForm onCreate={createTask} toggleShow={toggleShowModal} />
        </Modal.Body>
      </Modal>
    </>
  );
};
export default TaskPage;
