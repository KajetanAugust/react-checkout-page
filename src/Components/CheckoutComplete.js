import React, {Component} from 'react'
import { FcApproval } from "react-icons/fc";

class CheckoutComplete extends Component {
    render() {
        return (
            <div className='checkout-complete'>
                <FcApproval className='approve-icon' />
                <h2>Your order has been submitted successfully</h2>
            </div>
        );
    }
}

export default CheckoutComplete;