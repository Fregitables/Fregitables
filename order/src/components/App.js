import React, { useState } from 'react';
import priceData from '../price-data';

const currencyFormat = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
});

const App = () => {
  const [myCart, setMyCart] = useState([]);
  const addToCart = item => setMyCart([...myCart, item]);
  const removeFromCartByIndex = index => setMyCart(myCart.filter((_, i) => index !== i));
  const totalPrice = myCart.reduce((acc, item) => acc + item.price, 0);
  const submit = () => alert(`submit clicked\n\nitem count: ${myCart.length}\nprice total: ${currencyFormat.format(totalPrice)}`);

  return (
    <>
      {/* shows the products to select from */}
      <h1>Fregitables - Order</h1>
      <table>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
        {priceData.map((item) => {
          const { label, price } = item;
          return (
            <tr>
              <td>{label}</td>
              <td>{currencyFormat.format(price)}</td>
              <td><button onClick={() => addToCart(item)}>Add to Cart</button></td>
            </tr>
          );
        })}
      </table>

      {/* users shopping cart / checkout */}
      <h1>Checkout</h1>
      <table>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
        {myCart.map((item, index) => {
          const { label, price } = item;
          return (
            <tr>
              <td>{label}</td>
              <td>{currencyFormat.format(price)}</td>
              <td><button onClick={() => removeFromCartByIndex(index)}>Remove from Cart</button></td>
            </tr>
          );
        })}
        <tr>
          <td>TOTAL</td>
          <td>{currencyFormat.format(totalPrice)}</td>
          <td></td>
        </tr>
      </table>
      <button id="submit-order" onClick={submit}>Submit Order</button>
    </>
  );
};

export default App;
