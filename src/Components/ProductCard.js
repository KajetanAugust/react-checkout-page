import React, {Component} from 'react'

class ProductCard extends Component {

    render() {
        return (
            <div className='product-card'>
                <div className='product-card-header'>
                    <p>Product Name</p>
                    <p>Unit Price</p>
                    <p>Qty</p>
                </div>
                <div className='product-card-body'>
                    <img className='x-and-edit' src='images/x-img.png' alt='x button' />
                        <img className='product-image' src='images/headphones.png' alt='Photo of headphones' />
                            <div className='product-info'>
                                <p>Headphones</p>
                                <p>$11.90</p>
                                <div className='quantity-changer'>
                                    <button className='quantity-button'>-</button>
                                    <p className='quantity'>2</p>
                                    <button className='quantity-button'>+</button>
                                    <img src='images/edit-img.png' alt='edit button' />
                                </div>
                            </div>
                </div>
                <div className='product-card-footer'>
                    <button>Update Shopping Cart</button>
                </div>
            </div>
        )
    }
}

export default ProductCard;