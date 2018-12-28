import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// import store from './reduxTree/store.js';
// import { addToCart }  from './reduxTree/actions/cart-actions';

// console.log("initial state: ", store.getState());
// console.log(store);
// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// );

// store.dispatch(addToCart('Coffee 500gm', 1, 250));
// store.dispatch(addToCart('Flour 1kg', 2, 110));
// store.dispatch(addToCart('Juice 2L', 1, 250));

// unsubscribe();