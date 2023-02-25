import './PriceCard.css';

const PriceCard = ({ price, name, href, imgSrc, features }) => {
  //   const result = [];
  //   features.forEach((element) => {
  //     result.push(<li>{element}</li>);
  //   }); // [<li>lorem</li>,<li>dolo</li>,<li>support<li>]
  //   console.log(result);

  const renderedFeatures = features.map((el, index) => {
    return <li key={index}>{el}</li>; // ogni elemento della lista deve avere attributo key
  });

  return (
    <div className="card shadow text-center text-muted p-3">
      <div className="card-logo">
        <img src={imgSrc} alt="logo" />
      </div>
      <p>
        <span className="h1">{price}</span>&euro;/month
      </p>
      <h3>{name}</h3>
      <ul className="list-unstyled">{renderedFeatures}</ul>

      <a className="btn btn-outline-secondary" href={href}>
        Buy now
      </a>
    </div>
  );
};

export default PriceCard;
