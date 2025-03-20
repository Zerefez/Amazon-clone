
export let cart;

loadFromStorage();

export function loadFromStorage(){
  cart = JSON.parse(localStorage.getItem('cart'));
  if(!cart){
    cart = [{
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 2,
      deliveryOptionsId:'1',
    },{
      productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity: 1,
      deliveryOptionsId:'2',
    }];
  };
}

function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
};

export function addToCart( productId ){
  let matchingProduct;
  cart.forEach((product) => {
    if(product.productId === productId){
      matchingProduct = product;
    }
  });
  if(matchingProduct){
    matchingProduct.quantity++;
  }
  else{
    cart.push({productId: productId, quantity: 1, deliveryOptionsId:'1',});
  }
  saveToStorage();
};

export function removeProductFromCart(productId) {
  const newCart = [];
  cart.forEach((product) => {
    if (product.productId !== productId) {
      newCart.push(product);
    }
  });
  cart = newCart;
  saveToStorage();
}


export function updateDeliveryOption(productId, deliveryOptionId){
  let matchingProduct;
  cart.forEach((product) => {
    if(product.productId === productId){
      matchingProduct = product;
    }
  });
  matchingProduct.deliveryOptionsId = deliveryOptionId;
  saveToStorage();
}


export function loadCart(func){
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', ()=>{
    console.log(xhr.response);
    func();
  });
  xhr.open('GET', 'https://supersimplebackend.dev/cart');
  xhr.send();
};