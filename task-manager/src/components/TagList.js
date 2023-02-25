import { useState } from 'react';
import Tag from './Tag';
import { deleteTagFromTask } from '../api';

const TagList = ({ taskId, tags = [] }) => {
  const [tagList, setTagList] = useState(tags);

  const handleDeleteTag = async (tagId) => {
    const result = await deleteTagFromTask(taskId, tagId);
    if (result.ok) {
      // aggiorno la lista di tag
      setTagList(result.data);
    } else {
      // gestisco l'errore
      console.log(result.data);
    }
  };

  return (
    <ul className="list-inline">
      {tagList.map((t) => {
        return (
          <li className="list-inline-item" key={t.id}>
            <Tag tag={t} onDelete={handleDeleteTag} />
          </li>
        );
      })}
    </ul>
  );
};
export default TagList;
