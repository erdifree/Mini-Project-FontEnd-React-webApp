import Rectangle from './Rectangle';
// Rectangle vuole queste props:{ width, height, bgColor }
const App = () => {
  return (
    <div>
      <h1>Rettangoli</h1>
      <Rectangle />
      <Rectangle bgColor="pink" width="200px" height="100px" />
      <Rectangle bgColor="green" width="150px" height="80px" />
    </div>
  ); // questo è JSX
};

export default App; // default export

const message = 'Ciao';
const name = 'Io';
export { message, name }; //named export
