import React from 'react';
import './App.css';
import ProductContainer from '../containers/product-list'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome to React with Redux project</h2>
      </header>
      <h2>List of products:</h2>
      <ProductContainer />
      <hr />
      <h2>Product details:</h2>
    </div>
  );
}

export default App;
