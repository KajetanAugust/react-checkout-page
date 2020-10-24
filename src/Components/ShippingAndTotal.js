import React, {Component} from 'react'

class ShippingAndTotal extends Component {

    render() {
        const { shipping, quantity, unitPrice } = this.props
        const subtotal = quantity * unitPrice;
        return (
            <div className="shipping-and-total">
                <div className="shipping-div">
                    <p>SHIPPING</p>
                    <p>${(subtotal > 100 ? 0 : shipping).toFixed(2)}</p>
                </div>
                <div className="total-wrap">
                    <p>CART TOTALS</p>
                    <div className="subtotal">
                        <p>Subtotal</p>
                        <p>${subtotal.toFixed(2)}</p>
                    </div>
                    <div className="grand-total">
                        <p>Grand Total</p>
                        <p>${(subtotal + (subtotal > 100 ? 0 : shipping)).toFixed(2)}</p>
                    </div>
                    <button>Proceed to checkout</button>
                </div>
            </div>
        );
    }
}

export default ShippingAndTotal;