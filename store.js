// Array to keep track of items in the cart
const cart = [];

// Function to update the cart count in the header
function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length;
}

// Function to add product to the cart
function addToCart(productId, productName, productPrice) {
    cart.push({ id: productId, name: productName, price: parseFloat(productPrice) });
    updateCartCount();
    updateCartUI();
}

// Function to display items in the cart section
function updateCartUI() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(listItem);
        total += item.price;
    });

    cartTotal.textContent = total.toFixed(2);
}

// Add event listeners to 'Add to Cart' buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const productElement = e.target.closest('.product');
        const productId = productElement.getAttribute('data-id');
        const productName = productElement.getAttribute('data-name');
        const productPrice = productElement.getAttribute('data-price');
        addToCart(productId, productName, productPrice);
    });
});

// Checkout functionality (simple example)
document.getElementById('checkout').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert('Proceeding to checkout!');
    }
});
