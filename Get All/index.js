let cart = [];
let total = 0;

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    const checkoutButton = document.getElementById('checkout-button');

    cartItems.innerHTML = '';
    total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    totalElement.textContent = total.toFixed(2);

    checkoutButton.disabled = cart.length === 0;
}

document.getElementById('checkout-button').addEventListener('click', () => {
    alert('Proceeding to checkout');
    // Add checkout functionality here
});
