import React, {Component} from 'react'

class ShippingAndTotal extends Component {

    render() {
        return (
            <div className="shipping-and-total">
                <div className="shipping-div">
                    <p>SHIPPING</p>
                    <p>$23.80</p>
                </div>
                <div className="total-wrap">
                    <p>CART TOTALS</p>
                    <div className="subtotal">
                        <p>Subtotal</p>
                        <p>$23.80</p>
                    </div>
                    <div className="grand-total">
                        <p>Grand Total</p>
                        <p>$23.80</p>
                    </div>
                    <button>Proceed to checkout</button>
                </div>
            </div>
        );
    }
}

export default ShippingAndTotal;