import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const TaskForm = ({ onCreate, onUpdate, toggleShow, task }) => {
  const [taskContent, setTaskContent] = useState(task ? task.taskContent : '');
  const [deadline, setDeadline] = useState(task ? task.deadline : '');

  const clear = () => {
    setTaskContent('');
    setDeadline('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // validate
    // preparo il body
    if (task) {
      // sono in edit
      const taskToEdit = {
        taskContent: taskContent,
        deadline: deadline,
        completed: task.completed,
      };
      onUpdate(taskToEdit, task.id);
    } else {
      const newTask = {
        taskContent: taskContent,
        completed: false,
        deadline: deadline,
      };
      // invoco l'api
      onCreate(newTask);
    }
    clear();
    toggleShow();
  };

  const handleCancel = () => {
    clear();
    toggleShow();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <div className="mb-3">
        <Form.Group controlId="taskContent">
          <Form.Label>Task content</Form.Label>
          <Form.Control
            type="text"
            value={taskContent}
            onChange={(e) => {
              setTaskContent(e.target.value);
            }}
          />
        </Form.Group>
      </div>
      <div className="mb-3">
        <Form.Group controlId="deadline">
          <Form.Label>Deadline</Form.Label>
          <Form.Control
            type="date"
            value={deadline}
            onChange={(e) => {
              setDeadline(e.target.value);
            }}
          />
        </Form.Group>
      </div>
      <div>
        <Button type="submit" variant="outline-dark" className="me-3">
          Save
        </Button>
        <Button onClick={handleCancel} variant="outline-dark">
          Cancel
        </Button>
      </div>
    </Form>
  );
};
export default TaskForm;
