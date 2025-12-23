import {cart,deleteCartItem} from "../Data/cart.js";  
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
checkoutHTML +=     `<div class="cart-item js-cart-item-${matchedProduct.id}">
      <img src="${matchedProduct.image}" class="cart-image">

      <div class="cart-details">
        <p class="cart-name">${matchedProduct.name}</p>
        <p>Qty: ${cartItem.quantity}</p>
        <p>Rs. ${matchedProduct.price * cartItem.quantity}</p>
      </div>

      <button 
        class="delete-btn" 
        data-product-id="${matchedProduct.id}">
        Delete
      </button>
    </div>`


    
     totalItem += cartItem.quantity
    totalPrice += matchedProduct.price * cartItem.quantity
}); 

document.querySelector('.cart-items').innerHTML = checkoutHTML 
document.querySelector('.total-items').innerHTML = totalItem
document.querySelector('.total-price').innerHTML = `Rs. ${totalPrice.toFixed(2)}` 


///delete functionality///
document.querySelectorAll('.delete-btn').forEach((button)=>{
  button.addEventListener('click',()=>{
    const productId = button.dataset.productId;
    deleteCartItem(productId);
    document.querySelector(`.js-cart-item-${productId}`).remove();
  }) 
  
  }) 

 




//// this method is unstable for delete functionality because it doesn't properly update the cart array and UI after deletion.
///(have to make a render function to re render the cart items after deletion)///

///delete functionality///
// document.querySelectorAll('.delete-btn').forEach((button)=>{
//   button.addEventListener('click',()=>{
//     const productId = button.dataset.productId;
//     const cartItemIndex = cart.findIndex((item) => item.productId === productId);
//      cart.splice(cartItemIndex, 1);
//       document.querySelector(`.js-cart-item-${productId}`).remove();
//       // Optionally, update total items and total price here

      
//   })
// })
