import React, {Component} from 'react'
import '../App.css';

import Header from "./Header";
import ProductCard from "./ProductCard";
import ShippingAndTotal from "./ShippingAndTotal";
import CheckoutComplete from "./CheckoutComplete";

class App extends Component {

  render() {
    return (
        <div className="App">
          <Header />
          <main className='main-wrapper'>
              <ProductCard />
              <ShippingAndTotal />
          </main>

        </div>
    );
  }
}

export default App;
