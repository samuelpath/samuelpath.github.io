(function() {
  var stripe = Stripe('pk_live_51HN0vNC1ptgXJmK86W73269kqE5Hx6h7GnvnW0dLSk54gkwpL0JpEKQwo6TsQoUQxwvE7kfT5OaHrY7ZdtmHtt5y00SrEy8Ks8');
  stripe.redirectToCheckout({
    lineItems: [{price: 'price_1HfVVVC1ptgXJmK8olOMoWYZ', quantity: 1}],
    mode: 'payment',
    // Do not rely on the redirect to the successUrl for fulfilling
    // purchases, customers may not always reach the success_url after
    // a successful payment.
    // Instead use one of the strategies described in
    // https://stripe.com/docs/payments/checkout/fulfill-orders
    successUrl: 'https://www.doctolib.fr/cabinet-medical/lyon/cabinet-medical-de-l-opera',
    cancelUrl: 'https://www.doctolib.fr/cabinet-medical/lyon/cabinet-medical-de-l-opera',
    locale: 'fr'
  })
  .then(function (result) {
    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer.
      var displayError = document.getElementById('error-message');
      displayError.textContent = result.error.message;
    }
  });
})();