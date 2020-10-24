import React, {Component} from 'react'
import { Link } from "react-router-dom";

class Header extends Component {

    noQuantityAlert = () => {
        alert('The cart is empty or products quantity is equal zero.')
    }

    render() {
        const { quantity } = this.props
        return (
            <header>
                <h1>Shopping Cart</h1>
                {
                    quantity !== 0
                        ?
                        <Link to='/checkout-complete'><button>Proceed to checkout</button></Link>
                        :
                        <button
                            style={{backgroundColor:'lightgray', border:'none', color:'white'}}
                            onClick={this.noQuantityAlert}
                        >Proceed to checkout</button>
                }
            </header>
        );
    }
}

export default Header;