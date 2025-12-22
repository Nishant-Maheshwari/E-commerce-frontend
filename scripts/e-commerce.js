import { products } from "../Data/products.js"; 
import { cart, addToCart } from "../Data/cart.js"; 

// Function to get all products 
let productsHTML = '';
products.forEach((product) => {
productsHTML += singleProductToHTML(product);
}) 

function singleProductToHTML(product) {
  return `
    <div class="product-card">
      <img src="${product.image}" class="product-image"/>
      <h3 class="product-name">${product.name}</h3>
         <div class="product-rating-container">
        <img class="product-rating-stars"
          src="../images/ratings/rating-${product.rating.stars * 10}.png">
        <div class="product-rating-count">
          ${product.rating.count}
          <button class="add-to-cart-button" data-product-id="${product.id}">Add to Cart</button>
        </div>
   <p class="product-price">Rs.${(product.price).toFixed(2)}</p>
      
    </div>
  `;
} 
document.querySelector('.products').innerHTML = productsHTML; 

////cart functionality/// 

document.querySelectorAll('.add-to-cart-button').forEach((button) => {
  button.addEventListener('click',()=>{
    const productId = button.getAttribute('data-product-id');
    addToCart(productId)
    updateCartCount()
    console.log(cart);
    
    } )
}) 


let cartCountSpan = document.querySelector('.cart-count');

function updateCartCount() {
  let totalItems = 0;
  cart.forEach((cartItem) => { 
    totalItems += cartItem.quantity
})
cartCountSpan.innerHTML = totalItems
}