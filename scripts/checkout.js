import { cart } from "../Data/cart.js";  
import { products } from "../Data/products.js"; 

let checkoutHTML = '';
 let totalItem = 0
 let totalPrice = 0

cart.forEach((cartItem)=>{
  let matchedProduct;
  let productId = cartItem.productId;

  products.forEach((product)=>{
 if(product.id === productId){
  matchedProduct = product
 }
  })
checkoutHTML +=     `<div class="cart-item">
      <img src="${matchedProduct.image}" class="cart-image">

      <div class="cart-details">
        <p class="cart-name">${matchedProduct.name}</p>
        <p>Qty: ${cartItem.quantity}</p>
        <p>Rs. ${matchedProduct.price * cartItem.quantity}</p>
      </div>

      <button 
        class="delete-btn" 
        data-product-id="${matchedProduct.id}">
      </button>
    </div>`


    
     totalItem += cartItem.quantity
    totalPrice += matchedProduct.price
}); 

document.querySelector('.cart-items').innerHTML = checkoutHTML 
document.querySelector('.total-items').innerHTML = totalItem
document.querySelector('.total-price').innerHTML = `Rs. ${totalPrice.toFixed(2)}`



