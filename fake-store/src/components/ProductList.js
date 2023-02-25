import Product from './Product';

const ProductList = ({ products, incrementCart, itemIsPresent }) => {
  //console.log(products, incrementCart);
  const content = products.map((el) => {
    //console.log(el.id, itemIsPresent(el));
    return (
      <div key={el.id} className="col-12 col-sm-6 col-lg-4">
        <Product
          product={el}
          incrementCart={incrementCart}
          isAdded={itemIsPresent(el)}
        />
      </div>
    );
  });

  return <div className="row gy-3">{content}</div>;
};

export default ProductList;
