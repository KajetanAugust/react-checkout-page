import React, {Component, Fragment} from 'react'
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

    handleCheckout = () => {
        this.setState({
            isCheckout: true
        })
    }

  render() {

    return (
        <div className="App">

            {
                this.state.isCheckout === false
                    ?
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
                    :
                    <CheckoutComplete />
            }



        </div>
    );
  }
}

export default App;
