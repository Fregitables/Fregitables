import React from 'react';
import priceData from '../price-data';

const currencyFormat = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
});

const App = () => {
  return (
    <>
      <h1>App</h1>

      {/* shows the products to select from */}
      <table>
        {priceData.map(({ label, price }) => (
          <tr>
            <td>{label}</td>
            <td>{currencyFormat.format(price)}</td>
            <td>
              <button
                onClick={() => alert(`add to cart: ${label}`)}
              >
                Add to Cart
              </button>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default App;
