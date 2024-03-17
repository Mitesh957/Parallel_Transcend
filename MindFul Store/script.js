
const products = [
    {
        name: 'Ambrosial Agro Mycorrhiza Bio Fertilizer',
        description: 'Ambrosial Agro Mycorrhiza Bio Fertilizer',
        price: 199.00,
        image: 'store1.jpg'
    },
    {
        name: 'Gardening Water Pump Sprayer',
        description: 'Kraft Seeds by 10CLUB Pressure Spray Pump (2L)',
        price: 349.00,
        image: 'store2.jpg'
    },
    {
        name: 'Ugaoo Organic Vermicompost Fertilizer ',
        description: 'Ugaoo Organic Vermicompost Fertilizer Manure For Plants - 5 Kg',
        price: 999.00,
        image: 'store3.jpg'
    },
    {
        name: 'Ugaoo Cocopeat Block for Garden Plants',
        description: 'Ugaoo Cocopeat Block for Garden Plants 1 kg',
        price: 399.00,
        image: 'store4.jpg'
    },
    {
        name: 'Garden Farming Gloves',
        description: 'FreshDcart Heavy Duty Garden Farming Gloves Washable with Right Hand Fingertips ABS Claws for Digging and Gardening ',
        price: 349.00,
        image: 'store5.jpg'
    },
    {
        name: 'Klassic Watering Can',
        description: 'Plastic Green Water Can With Sprayer for Plants/Garden',
        price: 149.00,
        image: 'store6.jpg'
    }
    
];



function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.classList.add('col-md-4', 'mb-4');

    productCard.innerHTML = `
        <div class="card">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.description}</p>
                <p class="card-text">₹${product.price.toFixed(2)}</p>
                <button class="btn btn-success btn-block" onclick="buyNow('${product.name}', ${product.price})">Buy Now</button>
            </div>
        </div>
    `;

    return productCard;
}


function initializeProducts() {
    const productContainer = document.getElementById('product-container');

    products.forEach(product => {
        const productCard = createProductCard(product);
        productContainer.appendChild(productCard);
    });
}


function buyNow(productName, amount) {
  
    window.location.href = `payment.html?product=${productName}&amount=${amount}`;

}



initializeProducts();
