import { cart } from "../../data/cart.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";
import { addOrder } from "../../data/orders.js";
import { getProduct } from "../../data/products.js";
import money from "../utils/money.js";

export function renderPaymentSummary() {
  let total = 0;
  let shippingPrice = 0;
  cart.forEach((product) => {
    const cartProduct = getProduct(product.productId);
    total += cartProduct.price * product.quantity;
    shippingPrice += getDeliveryOption(product.deliveryOptionsId).price;
  });
  const totalBeforeTax = total + shippingPrice;
  const totalTax = totalBeforeTax * 0.1;
  const grandTotal = totalBeforeTax + totalTax;

  const paymentSummaryHTML = `
    <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (3):</div>
            <div class="payment-summary-money">$${money(total)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${money(shippingPrice)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${money(totalBeforeTax)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${money(totalTax)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${money(grandTotal)}</div>
          </div>

          <button class="place-order-button button-primary js-place-order">
            Place your order
          </button>
  `;
  document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;

  document.querySelector('.js-place-order').addEventListener("click", async() => {
    try{
    const response = await fetch('https://supersimplebackend.dev/orders',{
      metode: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cart: cart,
      })
    });
    const order = await response.json();
    addOrder(order);
  }
  catch(error){
    console.log('Error',error);
  }
 //window.location.href = 'order.html';
  });
}
