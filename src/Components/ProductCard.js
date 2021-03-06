import React, {Component} from 'react'

class ProductCard extends Component {

    state = {
        newQuant: 0,
        isDeleted: false,
    }

    componentDidMount() {
        this.setState({
            newQuant: this.props.quantity
        })
    }

    handleQuantIncrease = () => {
        const quantToSet = this.state.newQuant + 1;
        this.setState({
            newQuant: quantToSet
        })
    }

    handleQuantDecrease = () => {
        if(this.state.newQuant > 0) {
            const quantToSet = this.state.newQuant - 1;
            this.setState({
                newQuant: quantToSet
            })
        }
    }

    handleQuantitySetting = () => {
        this.props.handleQuantChange(this.state.newQuant)
    }

    handleProductDelete = () => {
        this.setState({
            isDeleted: true,
            newQuant: 0
        })
        this.props.handleQuantChange(0)
    }

    render() {
        return (
            <div className='product-card'>
                <div className='product-card-header'>
                    <p>Product Name</p>
                    <p>Unit Price</p>
                    <p>Qty</p>
                </div>
                {
                    this.state.isDeleted === false
                    ?
                        <div className='product-card-body'>
                            <img
                                className='x-and-edit'
                                src='images/x-img.png'
                                alt='x button'
                                onClick={this.handleProductDelete}
                            />
                            <img className='product-image' src='images/headphones.png' alt='Headphones' />
                            <div className='product-info'>
                                <p>Headphones</p>
                                <p>${this.props.unitPrice.toFixed(2)}</p>
                                <div className='quantity-changer'>
                                    <button
                                        className='quantity-button'
                                        onClick={this.handleQuantDecrease}
                                    >-</button>
                                    <p className='quantity'>{this.state.newQuant}</p>
                                    <button
                                        className='quantity-button'
                                        onClick={this.handleQuantIncrease}
                                    >+</button>
                                    <img
                                        className='x-and-edit'
                                        src='images/edit-img.png'
                                        alt='edit button'
                                        onClick={this.handleQuantitySetting}
                                    />
                                </div>
                            </div>
                        </div>
                        :
                        <div className='product-card-body'>
                            <p>The cart is empty</p>
                        </div>
                }

                <div className='product-card-footer'>
                    <button
                        onClick={this.handleQuantitySetting}
                    >Update Shopping Cart</button>
                </div>
            </div>
        )
    }
}

export default ProductCard;