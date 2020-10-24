import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import '../App.css';

import Header from "./Header";
import ProductCard from "./ProductCard";
import ShippingAndTotal from "./ShippingAndTotal";
import CheckoutComplete from "./CheckoutComplete";

class App extends Component {
    state= {
        quantity: 3,
        unitPrice: 11.90,
        shipping: 23.80,
        isCheckout: false,
    }

    handleQuantChange = (quantityToSet) => {
        this.setState({
            quantity: quantityToSet
        })
    }

  render() {

    return (
        <div className="App">
                    <Header/>
                    <main className='main-wrapper'>
                        <ProductCard
                            quantity={this.state.quantity}
                            unitPrice={this.state.unitPrice}
                            handleQuantChange={this.handleQuantChange}
                        />
                        <ShippingAndTotal
                            quantity={this.state.quantity}
                            unitPrice={this.state.unitPrice}
                            shipping={this.state.shipping}
                        />
                    </main>

                <CheckoutComplete />

        </div>
    );
  }
}

export default App;
