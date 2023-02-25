import { useState, useEffect } from 'react';
import { getData } from './api';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
  const [data, setData] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  const itemIsPresent = (item) => {
    // verifica se in cart è presente un elemento con id === id di product
    return (
      cartProducts.findIndex((el) => {
        return el.id === item.id;
      }) > -1
    );
  };

  const addToCart = (product) => {
    if (!itemIsPresent(product)) {
      const newCart = [...cartProducts, { ...product }];
      setCartProducts(newCart);
    } else {
      window.alert('product already added to cart');
    }
  };

  const removeFromCart = (product) => {
    // creare un nuovo array con tutti i prodotti in carrello tranne product
    const newCart = cartProducts.filter((el) => {
      return el.id !== product.id;
    });
    // aggiornare lo stato del carrello
    setCartProducts(newCart);
  };

  useEffect(() => {
    const loadData = async () => {
      const result = await getData();
      setData(result);
    };
    loadData();
  }, []);

  return (
    <div className="container">
      <Cart cart={cartProducts} onRemove={removeFromCart} />
      <ProductList
        products={data}
        incrementCart={addToCart}
        itemIsPresent={itemIsPresent}
      />
    </div>
  );
};

export default App;
