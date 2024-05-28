document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            name: 'Brake Pads',
            description: 'High-quality brake pads for safety.',
            image: 'brakepad.jpg',
            price: 1500
        },
        {
            name: 'Oil Filter',
            description: 'Premium oil filter for engine protection.',
            image: 'oilfilter.jpg',
            price: 500
        },
        {
            name: 'Air Filter',
            description: 'Durable air filter for clean air intake.',
            image: 'airfilter.jpg',
            price: 750
        },
        {
            name: 'Spark Plugs',
            description: 'Reliable spark plugs for efficient ignition.',
            image: 'sparkplugs.jpg',
            price: 1000
        }
    ];

    const productContainer = document.getElementById('product-list');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const checkoutButton = document.getElementById('checkout-button');
    let cart = [];

    function updateCart() {
        cartItemsContainer.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            total += item.price;
            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart-item');
            cartItemElement.innerHTML = `
                <span>${item.name}</span>
                <span>₱${item.price}</span>
            `;
            cartItemsContainer.appendChild(cartItemElement);
        });
        cartTotalElement.innerHTML = `<strong>Total:</strong> ₱${total}`;
    }

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>₱${product.price}</strong></p>
            <button class="add-to-cart">Add to Cart</button>
        `;

        productElement.querySelector('.add-to-cart').addEventListener('click', () => {
            cart.push(product);
            updateCart();
        });

        productContainer.appendChild(productElement);
    });

    checkoutButton.addEventListener('click', () => {
        localStorage.setItem('cart', JSON.stringify(cart));
        window.location.href = 'order-summary.html';
    });
});

