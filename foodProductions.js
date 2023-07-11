let products = [
  {
    name: 'Herbal Tea',
    description: 'Delicious herbal tea blend made from all-natural ingredients.',
    image: './FoodProducts/pexels-vie-studio-7421446.jpg'
  },
  {
    name: 'Organic Quinoa',
    description: 'High-quality organic quinoa grains, rich in protein and nutrients.',
    image: './FoodProducts/pexels-lil-artsy-1793035.jpg'
  },
  {
    name: 'Superfood Smoothie Mix',
    description: 'A mix of nutrient-dense superfoods for a healthy and energizing smoothie.',
    image: './FoodProducts/Superfood Smoothie Mix.jpg'
  },
  {
    name: 'Herbal Energy Bar',
    description: 'An all-natural energy bar infused with herbal extracts for a boost of vitality.',
    image: './FoodProducts/Herbal Energy Bar.jpg'
  },
  {
    name: 'Organic Chia Seeds',
    description: 'Tiny but mighty, these organic chia seeds are packed with omega-3 fatty acids and fiber.',
    image: './FoodProducts/Organic Chia Seeds.jpg'
  },
  {
    name: 'Detox Herbal Tea',
    description: 'A cleansing blend of herbs and botanicals to support the body\'s natural detoxification process.',
    image: './FoodProducts/Detox Herbal Tea.jpg'
  },
  {
    name: 'Healthy Snack Bars',
    description: 'Nutritious and tasty snack bars made with wholesome ingredients.',
    image: './FoodProducts/Healthy Snack Bars.jpg'
  },
  {
    name: 'Organic Coconut Oil',
    description: 'Versatile and nourishing organic coconut oil for cooking, skincare, and more.',
    image: './FoodProducts/Organic Coconut Oil.jpg'
  },
  {
    name: 'Herbal Immunity Booster',
    description: 'Boost your immune system with this powerful blend of herbs and antioxidants.',
    image: './FoodProducts/Herbal Immunity Booster.jpg'
  },
  {
    name: 'Organic Green Superfood Powder',
    description: 'A concentrated blend of organic greens for a quick and easy nutrient boost.',
    image: './FoodProducts/Superfood Smoothie Mix.jpg'
  }
];


let productCardsContainer = document.querySelector('.product-cards-container2');
let cart = getCartFromLocalStorage();

products.forEach((product, index) => {
  let cardDiv = document.createElement('div');
  cardDiv.className = 'product-card';

  cardDiv.innerHTML = `
    <div class="card" style="width: 18rem;">
      <img src="${product.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">${product.description}.</p>
        <a onclick="addToCart(${index})" class="btn btn-primary">Add to Cart</a>
      </div>
    </div>
  `;

  productCardsContainer.appendChild(cardDiv);
});

function isUserLoggedIn() {
  var loggedInUser = localStorage.getItem('loggedInUser');
  return loggedInUser !== null;
}

function addToCart(productId) {
  if (isUserLoggedIn()) {
    addProductToCart(productId);
    incrementCartCounter();
  } else {
    alert('You have to be logged in.');
  }
}

function incrementCartCounter() {
  var totalQuantity = calculateTotalQuantity();
  cartCounter.textContent = totalQuantity;
}

function calculateTotalQuantity() {
  var totalQuantity = 0;
  for (var productId in cart) {
    totalQuantity += cart[productId].quantity;
  }
  return totalQuantity;
}

function getCartFromLocalStorage() {
  var cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : {};
}

function saveCartToLocalStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function addProductToCart(productId) {
  var product = products[productId];
  if (product) {
    if (cart[productId]) {
      cart[productId].quantity++;
    } else {
      cart[productId] = {
        product: product,
        quantity: 1
      };
    }
    saveCartToLocalStorage(cart);
  }
}

// Resetiranje na kosnickata koga korisnikot e odjaven
resetCart();

function resetCart() {
  if (!isUserLoggedIn()) {
    cart = {};
    saveCartToLocalStorage(cart);
    incrementCartCounter();
  }
}

incrementCartCounter();






document.getElementById('collectFromCartButton').addEventListener('click', collectFromCart);

function payment() {
  window.open("https://www.stb.com.mk/", "_blank");
  document.activeElement.blur();
}

function collectFromCart() {
  let cart = getCartFromLocalStorage();
  let productCardsContainer = document.querySelector('.product-cards-container2');

  if (Object.keys(cart).length === 0) {
    displayEmptyCartMessage();
  } else {
    displayCartProducts();
  }

  function displayEmptyCartMessage() {
    let alertDiv = document.createElement('div');
    alertDiv.className = 'custom-alert';

    alertDiv.innerHTML = `
      <h2>Your cart is empty</h2>
      <p>Please login to continue.</p>
      <button onclick="closeAlert()">Close</button>
    `;

    document.body.appendChild(alertDiv);
  }

  window.closeAlert = function() {
    let alertDiv = document.querySelector('.custom-alert');
    alertDiv.parentNode.removeChild(alertDiv);
  }
}

  
  
  function displayCartProducts() {
    productCardsContainer.innerHTML = ''; 

    for (let productId in cart) {
      let product = cart[productId].product;
      let cardDiv = document.createElement('div');
      cardDiv.className = 'product-card2';
      cardDiv.innerHTML = `
        <img class="product2-image2" src="${product.image}" alt="${product.name}">
        <div class="product2-details2">
          <h2 class="product2-name2">${product.name}</h2>
          <p class="product2-description2">${product.description}</p>
          <button class="payment-button" onclick="payment()">Payment</button>
        </div>
      `;
      productCardsContainer.appendChild(cardDiv);
    }
  }

  function getCartFromLocalStorage() {
    var cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : {};
  }

