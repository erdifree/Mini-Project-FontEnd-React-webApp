const Rectangle = ({ width = '100px', height = '100px', bgColor = 'pink' }) => {
  //   console.log(props);
  //   const width = props.width;
  //   const height = props.height;
  //   const bgColor = props.bgColor;
  return (
    <div
      style={{
        width: width,
        height: height,
        backgroundColor: bgColor,
        marginBottom: '5px',
      }}
    ></div>
  );
};

export default Rectangle;
