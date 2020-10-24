import React, {Component, Fragment} from 'react'
import { Route } from 'react-router-dom'
import '../App.css';

import Header from "./Header";
import ProductCard from "./ProductCard";
import ShippingAndTotal from "./ShippingAndTotal";
import CheckoutComplete from "./CheckoutComplete";

class App extends Component {
    state= {
        quantity: 2,
        unitPrice: 11.90,
        shipping: 23.80,
    }

    handleQuantChange = (quantityToSet) => {
        this.setState({
            quantity: quantityToSet
        })
    }

  render() {

    return (
        <div className="App">

            <Route exact path='/' render={() => (
                    <Fragment>
                        <Header
                            handleCheckout={this.handleCheckout}
                        />
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
                                handleCheckout={this.handleCheckout}
                            />
                        </main>
                    </Fragment>
                )}
            />
            <Route path='/checkout-complete' component={CheckoutComplete} />

        </div>
    );
  }
}

export default App;
