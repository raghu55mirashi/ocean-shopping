import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart-selectors'
import { CheckoutPageContainer, CheckoutHeader, CheckoutHeaderBlock, CheckoutTotal } from './checkout.styles'
import CheckoutItem from '../../components/checkout-item/checkout-item'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button'

const CheckoutPage = ({ cartItems, cartTotal }) => (
    <CheckoutPageContainer>
        <CheckoutHeader>
            <CheckoutHeaderBlock>
                <span>Product</span>
            </CheckoutHeaderBlock>
            <CheckoutHeaderBlock>
                <span>Description</span>
            </CheckoutHeaderBlock>
            <CheckoutHeaderBlock>
                <span>Quantity</span>
            </CheckoutHeaderBlock>
            <CheckoutHeaderBlock>
                <span>Price</span>
            </CheckoutHeaderBlock>
            <CheckoutHeaderBlock>
                <span>Remove</span>
            </CheckoutHeaderBlock>
        </CheckoutHeader>
        {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))
        }
        <CheckoutTotal>
            <span>TOTOL: ${cartTotal}</span>
            <StripeCheckoutButton price={cartTotal} />
        </CheckoutTotal>
    </CheckoutPageContainer>
)
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)