import React, {Component} from 'react'

class Header extends Component {


    render() {
        return (
            <header>
                <h1>Shopping Cart</h1>
                <button
                    onClick={this.props.handleCheckout}
                >Proceed to checkout</button>
            </header>
        );
    }
}

export default Header;