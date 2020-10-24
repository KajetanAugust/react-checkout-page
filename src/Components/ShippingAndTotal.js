import React, {Component} from 'react'
import {Link} from "react-router-dom";

class ShippingAndTotal extends Component {

    noQuantityAlert = () => {
        alert('Your cart is empty or products quantity is equal zero')
    }

    render() {
        const { shipping, quantity, unitPrice } = this.props
        const subtotal = quantity * unitPrice;
        return (
            <div className="shipping-and-total">
                <div className="shipping-div">
                    <p>SHIPPING</p>
                    <p>${subtotal > 100 ? 0 :(subtotal > 100 ? 0 : shipping).toFixed(2)}</p>
                </div>
                <div className="total-wrap">
                    <p>CART TOTALS</p>
                    <div className="subtotal">
                        <p>Subtotal</p>
                        <p>${subtotal === 0 ? 0 : subtotal.toFixed(2)}</p>
                    </div>
                    <div className="grand-total">
                        <p>Grand Total</p>
                        <p>${subtotal === 0 ? 0 :(subtotal + (subtotal > 100 ? 0 : shipping)).toFixed(2)}</p>
                    </div>
                    {
                        quantity !== 0
                        ?
                            <Link to='/checkout-complete'><button>Proceed to checkout</button></Link>
                        :
                            <button
                                onClick={this.noQuantityAlert}
                                style={{backgroundColor:'lightgray', border:'none', color:'white'}}
                            >Proceed to checkout</button>
                    }
                </div>
            </div>
        );
    }
}

export default ShippingAndTotal;