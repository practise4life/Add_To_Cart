import React from 'react';

const Products = ({ state, dispatch }) => {
  const { products, cart } = state;
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        width: '80%',
      }}
    >
      {products.map((prod) => {
        return (
          <div
            key={prod.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: 10,
              border: '1px solid grey',
              width: '30%',
              marginTop: 10,
              gap: 10,
            }}
          >
            {/* Rendering the image, title and price, a button to add to cart if it is not present */}
            <img
              src={prod.thumbnail}
              alt={prod.title}
              style={{ height: 200, objectFit: 'cover' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>{prod.title}</span>
              <b>$ {prod.price}</b>
            </div>
            {cart.some((p) => p.id === prod.id) ? (
              <button
                style={{
                  padding: 5,
                  border: 0,
                  borderRadius: 5,
                  backgroundColor: 'red',
                  color: 'white',
                }}
                onClick={() => {
                  dispatch({
                    type: 'REMOVE_FROM_CART',
                    payload: prod,
                  });
                }}
              >
                Remove from Cart
              </button>
            ) : (
              <button
                style={{
                  padding: 5,
                  border: 0,
                  borderRadius: 5,
                  backgroundColor: 'green',
                  color: 'white',
                }}
                onClick={() => {
                  dispatch({
                    type: 'ADD_TO_CART',
                    payload: {
                      id: prod.id,
                      title: prod.title,
                      thumbnail: prod.thumbnail,
                      qty: 1,
                      price: prod.price,
                    },
                  });
                }}
              >
                Add to Cart
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Products;

// 1. Make the parent container a display flex, with flex direction to column
// 2. Render an image with objectFit
// 3. Render another container with product title and product price as display flex.
// 4. Add a "Add to cart button"
// 5. If the product is inside the cart then it should display the button remove from cart else add to cart.
// 6. Add the logic for add to cart both in onClick in the button and the reducer.
// 7. Remove from cart logic in onClick button and the reducer.
