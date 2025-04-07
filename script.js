function addToCart() {
  const quantity = document.getElementById("quantity").value;
  const message = `✅ ${quantity} item(s) added to your cart!`;
  document.getElementById("cart-message").textContent = message;
}
