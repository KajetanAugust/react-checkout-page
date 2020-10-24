import React, {Component} from 'react'
import {Link, Router} from 'react-router-dom'

class Header extends Component {

    render() {
        return (
            <header>
                <h1>Shopping Cart</h1>
                <Link to='/checkout-complete'><button>Proceed to checkout</button></Link>
            </header>
        );
    }
}

export default Header;