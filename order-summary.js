document.addEventListener('DOMContentLoaded', () => {
    const orderItemsContainer = document.getElementById('order-items');
    const orderTotalElement = document.getElementById('order-total');
    const confirmOrderButton = document.getElementById('confirm-order-button');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    function updateOrderSummary() {
        orderItemsContainer.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            total += item.price;
            const orderItemElement = document.createElement('div');
            orderItemElement.classList.add('order-item');
            orderItemElement.innerHTML = `
                <span>${item.name}</span>
                <span>₱${item.price}</span>
            `;
            orderItemsContainer.appendChild(orderItemElement);
        });
        orderTotalElement.innerHTML = `<strong>Total:</strong> ₱${total}`;
    }

    updateOrderSummary();

    confirmOrderButton.addEventListener('click', () => {
        alert('Order confirmed! Thank you for your purchase.');
        localStorage.removeItem('cart');
        window.location.href = 'index.html';
    });
});
