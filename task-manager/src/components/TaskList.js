import { Row, Col } from 'react-bootstrap';
import TaskItem from './TaskItem';
const TaskList = ({ tasks = [], onUpdateTask, onDeleteTask }) => {
  //console.log(tasks);
  return (
    <Row className="gy-3">
      {tasks.map((task) => {
        return (
          <Col xs={12} key={task.id}>
            <TaskItem
              task={task}
              onUpdateTask={onUpdateTask}
              onDeleteTask={onDeleteTask}
            />
          </Col>
        );
      })}
    </Row>
  );
};
export default TaskList;
