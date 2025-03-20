
function Cart(localStorageKey){
  const cart = {
    cartItems: undefined,
  
    loadFromStorage(){
      this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));
      if(!this.cartItems){
        this.cartItems = [{
          productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
          quantity: 2,
          deliveryOptionsId:'1',
        },{
          productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
          quantity: 1,
          deliveryOptionsId:'2',
        }];
      };
    },
  
    saveToStorage(){
      localStorage.setItem('localStorageKey', JSON.stringify(this.cartItems));
    },
  
    addToCart( productId ){
      let matchingProduct;
      this.cartItems.forEach((product) => {
        if(product.productId === productId){
          matchingProduct = product;
        }
      });
      if(matchingProduct){
        matchingProduct.quantity++;
      }
      else{
        this.cartItems.push({productId: productId, quantity: 1, deliveryOptionsId:'1',});
      }
      this.saveToStorage();
    },
  
    removeProductFromCart(productId) {
      const newCart = [];
      this.cartItems.forEach((product) => {
        if (product.productId !== productId) {
          newCart.push(product);
        }
      });
      this.cartItems = newCart;
      this.saveToStorage();
    },
  
    updateDeliveryOption(productId, deliveryOptionId){
      let matchingProduct;
      this.cartItems.forEach((product) => {
        if(product.productId === productId){
          matchingProduct = product;
        }
      });
      matchingProduct.deliveryOptionsId = deliveryOptionId;
      this.saveToStorage();
    }
  };
  return cart;
};

const cart = Cart('cart-oop');
const businessCart = Cart('cart-business');

cart.loadFromStorage();

businessCart.loadFromStorage();

console.log(cart);
console.log(businessCart);