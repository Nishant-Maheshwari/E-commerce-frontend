export let cart = JSON.parse(localStorage.getItem('cart')) || [];


function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId) {
  const existingItem = cart.find(item => item.productId === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ 
      productId: productId, 
      quantity: 1 });
  } 

  saveToStorage();
}