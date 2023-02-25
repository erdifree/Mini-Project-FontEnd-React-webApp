import { useState } from 'react';
import AccordionItem from './AccordionItem';

const Accordion = ({ data }) => {
  const [expandedId, setExpandedId] = useState(-1);

  const changeExpandedId = (id) => {
    if (id === expandedId) setExpandedId(-1);
    else setExpandedId(id);
  };

  return (
    <ul className="list-group">
      {data.map((item) => {
        return (
          <li className="list-group-item" key={item.id}>
            <AccordionItem
              item={item}
              expanded={expandedId === item.id}
              handleClick={changeExpandedId}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Accordion;
