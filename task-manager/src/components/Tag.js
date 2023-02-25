import './Tag.css';
const Tag = ({ tag, onDelete }) => {
  return (
    <div className="c_tag" style={{ backgroundColor: `#${tag.color}` }}>
      <span>{tag.name}</span>
      <span
        className="c_tag-delete"
        onClick={() => {
          onDelete(tag.id);
        }}
      >
        x
      </span>
    </div>
  );
};
export default Tag;
