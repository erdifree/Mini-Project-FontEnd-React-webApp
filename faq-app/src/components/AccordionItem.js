import { BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs';

const AccordionItem = ({ item, expanded, handleClick }) => {
  return (
    <>
      <div
        style={{ cursor: 'pointer' }}
        className="d-flex justify-content-between"
        onClick={() => {
          handleClick(item.id);
        }}
      >
        <h6>{item.title}</h6>
        {expanded ? <BsFillCaretUpFill /> : <BsFillCaretDownFill />}
      </div>
      {expanded && <div>{item.content}</div>}
    </>
  );
};
export default AccordionItem;
