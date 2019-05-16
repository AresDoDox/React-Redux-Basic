import React from 'react';
import './App.css';

//import Container Component
import ProductContainer from '../containers/product-list';
import ProductDetailContainer from '../containers/product-detail';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome to React with Redux project</h2>
      </header>
      <div className="App-Container">
        <h2>List of products:</h2>
        <ProductContainer />
        <hr />
        <h2>Product details:</h2>
        <ProductDetailContainer />
      </div>  
    </div>
  );
}

export default App;
