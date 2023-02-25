import { useState, useEffect } from 'react';
import { Alert, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  BsFillTrashFill,
  BsPencilFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';
import { getUsers, deleteUserById } from '../api';

const UserList = () => {
  const [users, setUsers] = useState([]);

  const handleDeleteClick = async (user) => {
    const result = await deleteUserById(user.id);
    if (result.ok) {
      const updatedUsers = users.filter((el) => {
        return el.id !== user.id;
      });
      setUsers(updatedUsers);
    } else {
      console.log(result);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      const result = await getUsers();
      if (result.ok) {
        setUsers(result.data);
      } else {
        console.log(result.data);
      }
    };
    loadData();
  }, []);

  return (
    <div className="mt-5">
      <h1>Users</h1>
      {users.length === 0 && (
        <Alert variant="info">There are no users yet</Alert>
      )}
      <ul className="list-group">
        {users.map((user) => {
          return (
            <li
              key={user.id}
              className="list-group-item d-flex justify-content-between"
            >
              <div>
                <span>
                  {user.firstName} {user.lastName}
                </span>
                <Badge bg="secondary">{user.tasks.length}</Badge>
              </div>
              <div>
                <Link
                  to={`/edit-user/${user.id}`}
                  className="btn btn-sm btn-primary me-1"
                >
                  <BsPencilFill />
                </Link>
                <button
                  className="btn btn-sm btn-primary me-1"
                  onClick={(event) => {
                    handleDeleteClick(user);
                  }}
                >
                  <BsFillTrashFill />
                </button>
                <Link
                  to={`/${user.id}/tasks`}
                  className="btn btn-sm btn-primary"
                >
                  <BsFillArrowRightCircleFill />
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
      <Link to="/new-user" className="btn btn-primary mt-3">
        Add User
      </Link>
    </div>
  );
};

export default UserList;
