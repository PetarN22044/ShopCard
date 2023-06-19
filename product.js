let products = [
    {
      name: 'Product 1',
      description: '    Lorem ipsum dolor, sit amet consectetur adipisicing',
      image: '../ShopCard/herba Products Img/herba1.png'
    },
    {
      name: 'Product 2',
      description: '    Lorem ipsum dolor, sit amet consectetur adipisicing.',
      image: '../ShopCard/herba Products Img/herba2.jpg'
    },
    {
      name: 'Product 3',
      description: ' Lorem ipsum dolor, sit amet consectetur adipisicing',
      image: '../ShopCard/herba Products Img/herba6.jpg'
    },
    {
      name: 'Product 4',
      description: ' Lorem ipsum dolor, sit amet consectetur adipisicing',
      image: '../ShopCard/herba Products Img/herba7.jpg'
    },
    {
      name: 'Product 5',
      description: ' Lorem ipsum dolor, sit amet consectetur adipisicing',
      image: '../ShopCard/herba Products Img/herba8.jpg'
    },
    {
      name: 'Product 5',
      description: ' Lorem ipsum dolor, sit amet consectetur adipisicing',
      image: '../ShopCard/herba Products Img/herba44.jpg'
    }
  ];


let productCardsContainer = document.querySelector('.product-cards');

  products.forEach((product) => {
    let cardDiv = document.createElement('div');
    cardDiv.className = 'product-card';
    cardDiv.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src="${product.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${product.name}e</h5>
      <p class="card-text">${product.description}.</p>
      <a href="#" class="btn btn-primary">Add to Card</a>
    </div>
  </div>
    `;
    productCardsContainer.appendChild(cardDiv);
  });