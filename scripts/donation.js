(function() {
 var stripe = Stripe('pk_live_jpuOs5XhYCq9ua2F8MbIa1so');

 var checkoutButton = document.getElementById('checkout-button-price_1H4IgfHkRWTAGSa4sNLa0S2v');
 checkoutButton.addEventListener('click', function () {
   // When the customer clicks on the button, redirect
   // them to Checkout.
   stripe.redirectToCheckout({
     lineItems: [{price: 'price_1H4IgfHkRWTAGSa4sNLa0S2v', quantity: 1}],
     mode: 'payment',
     // Do not rely on the redirect to the successUrl for fulfilling
     // purchases, customers may not always reach the success_url after
     // a successful payment.
     // Instead use one of the strategies described in
     // https://stripe.com/docs/payments/checkout/fulfillment
     successUrl: 'https://panhiathao.com/pages/thankyou.html',
     cancelUrl: 'https://panhiathao.com/pages/cancel.html,
   })
   .then(function (result) {
     if (result.error) {
       // If `redirectToCheckout` fails due to a browser or network
       // error, display the localized error message to your customer.
       var displayError = document.getElementById('error-message');
       displayError.textContent = result.error.message;
     }
   });
 });
})();