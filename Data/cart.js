export let cart = JSON.parse(localStorage.getItem('cart')) || [];


export function saveToStorage() {
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

 export function deleteCartItem(productId){
    const newCart = []
    cart.forEach((cartItem)=>{
  if(cartItem.productId !== productId){
    newCart.push(cartItem)
  }
    })
    cart = newCart 
    saveToStorage()
    
  }