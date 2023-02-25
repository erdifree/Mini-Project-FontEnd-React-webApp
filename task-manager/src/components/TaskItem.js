import { useState } from 'react';
import './TaskItem.css';
import { Button, Card } from 'react-bootstrap';
import {
  BsFillTrashFill,
  BsPencilFill,
  BsClipboardCheck,
  BsClipboardX,
} from 'react-icons/bs';
import TaskForm from './TaskForm';
import TagList from './TagList';

const TaskItem = ({ task, onUpdateTask, onDeleteTask }) => {
  const [showEdit, setShowEdit] = useState(false);

  const toggleShowEdit = () => {
    setShowEdit(!showEdit);
  };

  const toggleCompleted = () => {
    // invertire l'attributo completed
    const updatedTask = { ...task, completed: !task.completed };
    console.log(updatedTask);
    // passare il task con l'attributo modificato alla put
    onUpdateTask(updatedTask, task.id);
  };

  const handleDeleteClick = () => {
    // chiedo conferma
    const confirm = window.confirm('Are you sure?');
    // eseguo la delete
    if (confirm) {
      onDeleteTask(task.id);
    }
  };

  return (
    <Card className="c_task">
      {!showEdit && (
        <>
          <Card.Body>
            <div>{task.taskContent}</div>
            <div>{task.deadline}</div>
            <div>
              <TagList tags={task.tags} taskId={task.id} />
            </div>
            <Button
              variant="light"
              className="c_task-toggle"
              onClick={toggleCompleted}
            >
              {task.completed ? <BsClipboardX /> : <BsClipboardCheck />}
            </Button>
          </Card.Body>
          <Card.Footer>
            <Button variant="light" onClick={handleDeleteClick}>
              <BsFillTrashFill />
            </Button>
            <Button variant="light" onClick={toggleShowEdit}>
              <BsPencilFill />
            </Button>
          </Card.Footer>
        </>
      )}
      {showEdit && (
        <Card.Body>
          <TaskForm
            toggleShow={toggleShowEdit}
            task={task}
            onUpdate={onUpdateTask}
          />
        </Card.Body>
      )}
    </Card>
  );
};
export default TaskItem;
