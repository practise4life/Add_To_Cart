import React, { useReducer, useEffect } from 'react';
import { cartReducer } from './reducers/cartReducer';
import Products from './components/Products';
import Cart from './components/Cart';
import './style.css';

export default function App() {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });

  function fetchProducts() {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: 'ADD_PRODUCTS',
          payload: data.products,
        });
      });
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(state);

  return (
    <div style={{ display: 'flex' }}>
      <Products state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </div>
  );
}

// 1. Set up basic react app with products and cat
// 2. fetch the data and call the function using useEffect
// 3. Set up the useReducer, with reducer and initial state
// 4. Pass the state and dispatch function to both the components
// 5. Add the products to the state, using an action.
// 6. Once we have products as part of the state, work on the products component.
