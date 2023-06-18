let products = [
    {
      name: 'Продукт 1',
      description: 'Опис на продукт 1',
      image: '../ShopCard/herba Products Img/herba1.png'
    },
    {
      name: 'Продукт 2',
      description: 'Опис на продукт 2',
      image: '../ShopCard/herba Products Img/herba2.jpg'
    },
    {
      name: 'Продукт 3',
      description: 'Опис на продукт 3',
      image: '../ShopCard/herba Products Img/herba6.jpg'
    },
    {
      name: 'Продукт 4',
      description: 'Опис на продукт 4',
      image: '../ShopCard/herba Products Img/herba7.jpg'
    },
    {
      name: 'Продукт 5',
      description: 'Опис на продукт 5',
      image: '../ShopCard/herba Products Img/herba8.jpg'
    },
    {
      name: 'Продукт 5',
      description: 'Опис на продукт 5',
      image: '../ShopCard/herba Products Img/herba44.jpg'
    }
  ];


  const productCardsContainer = document.querySelector('.product-cards');

  products.forEach((product) => {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'product-card';
    cardDiv.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src="${product.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${product.name}e</h5>
      <p class="card-text">${product.description}.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
    `;
    productCardsContainer.appendChild(cardDiv);
  });