import { useState } from 'react';
import { Button } from 'react-bootstrap';

const Shoppingcart = () => {  
  
  const availableItems = [
  { product: 'Jacket', inStock: 2 },
  { product: 'Pants', inStock: 3 },
  { product: 'Scarf', inStock: 0 },
  { product: 'Pajamas', inStock: 3 },
  { product: 'Shirt', inStock: 1 },
];

   // creating state for stock and cart
  
  const [stock, setStock] = useState(availableItems);
  const [cart, setCart] = useState([]);

  const moveToCart = (event) => {
    // create product and numInStock variables
    let [product, numInStock] = event.target.innerHTML.split(':');
    // Determine if numInStock is greater than 0. If not, find the product that was clicked and update its numInStock
    if (numInStock <= 0) return; // zero items in stock
    let item = stock.filter((item) => item.product === product);
    let newStock = stock.map((item) => {
      if (item.product === product) {
        item.inStock--;
      }
      return item;
    });

    // Update the stock state to include the new stock
    setStock([...newStock]);
    // Update the cart state to include the updated item
    setCart([...cart, ...item]); // for now don't worry about repeat items in Cart
    console.log(`Cart: ${JSON.stringify(cart)}`);
    console.log(`item: ${JSON.stringify(item)}`);
    console.log(`item: ${JSON.stringify(newStock)}`);
  };

  
  const availableItemsButtons = availableItems.map((item, index) => {
    return (
      <Button id={item.product} key={index} onClick={moveToCart}>
        {item.product}:{item.inStock}
      </Button>
    );
  });


const Cart = ({ cartitems }) => {
  
  console.log('rendering Cart');
  const availableItemsButtons = cartitems.map((item, index) => {
    return (
      <Button id={item.product} key={index}>
        {item.product}
      </Button>
    );
  });
  return (
    <ul id="cart-items" style={{ listStyleType: 'none' }} key="cart">
      {availableItemsButtons}
    </ul>
  );
}

// Note: React requires a single Parent element, that's why we use <>
  return (
    <>
      <ul key="stock" style={{ listStyleType: 'none' }}>
        {availableItemsButtons}
      </ul>
      <h1>Shopping Cart</h1>
      <Cart cartitems={cart}> Cart Items</Cart>
    </>
  );
}

export default Shoppingcart;