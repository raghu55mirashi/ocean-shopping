import React from 'react'

import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51H0L1mDqs6xxNSbgbj0BvaopCan2kczXvUCTbOGjz7QjXu2EU8rJbqD80X1KuvvoSmSASKFltp2yT2S6ZxTYWj2a00ZJqDaZ9H'
    const onToken = token => {
        alert('Payment Successful')
    }
    return (
        <StripeCheckout
            label="Pay Now"
            name="Ocean Clothing Ltd."
            billingAddress
            shippingAddress
            // image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )

}

export default StripeCheckoutButton