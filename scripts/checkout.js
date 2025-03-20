import '../data/cart-class.js';
//import '../data/cart-oop.js';
//import '../data/backend-practice.js';
import { loadCart } from '../data/cart.js';
import { loadProductsFetch } from '../data/products.js';
import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';

async function loadPage(){
  try{
  await loadProductsFetch();

  await new Promise((resolve,reject) => {
    loadCart(() => {
      //reject('error');
      resolve();
    });
  });
  }
  catch(error){
    console.log('error');
  }
  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();

/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  }),
]).then((values) => {
  renderOrderSummary();
  renderPaymentSummary();
});

/*

loadProducts(() => {
  loadCart(()=>{
    renderOrderSummary();
    renderPaymentSummary();
  });
});'
*/