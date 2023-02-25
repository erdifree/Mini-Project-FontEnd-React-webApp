import PriceCard from './PriceCard';
// importiamo le immagini
import BikeImage from '../images/bike.jpg';
import CarImage from '../images/car.jpg';
import PlaneImage from '../images/plane.jpg';

const App = () => {
  return (
    <div className="container">
      <h1 className="my-5">Our Plans</h1>
      <div className="row">
        <div className="col">
          <PriceCard
            price={0.0}
            name="Free"
            href="http://localhost:8080/3000"
            imgSrc={BikeImage}
            features={['lorem ipsum', 'dolor sit ameat', 'support h24']}
          />
        </div>
        <div className="col">
          <PriceCard
            price={99.99}
            name="Premium"
            href="http://localhost:8080/3000"
            imgSrc={CarImage}
            features={['lorem ipsum', 'dolor sit ameat', 'support h24']}
          />
        </div>
        <div className="col">
          <PriceCard
            price={299.99}
            name="Business"
            href="http://localhost:8080/3000"
            imgSrc={PlaneImage}
            features={['lorem ipsum', 'dolor sit ameat', 'support h24']}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
