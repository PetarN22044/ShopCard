let products = [
    {
      name: 'Продукт 1',
      description: 'Опис на продукт 1',
      image: 'патека_до_слика1.jpg'
    },
    {
      name: 'Продукт 2',
      description: 'Опис на продукт 2',
      image: 'патека_до_слика2.jpg'
    },
    {
      name: 'Продукт 3',
      description: 'Опис на продукт 3',
      image: 'патека_до_слика3.jpg'
    },
    {
      name: 'Продукт 4',
      description: 'Опис на продукт 4',
      image: 'патека_до_слика4.jpg'
    },
    {
      name: 'Продукт 5',
      description: 'Опис на продукт 5',
      image: 'патека_до_слика5.jpg'
    }
  ];

 let productCardsContainer = document.getElementById('product-cards');

  products.forEach((product) => {
    const card = document.createElement('div');
    card.className = 'col-lg-4 col-md-6 mb-4';
    card.innerHTML = `
      <img src="${product.image}" class="card-img-top" alt="${product.name}">
      <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">${product.description}</p>
      </div>
    `;
    productCardsContainer.appendChild(card);
  });
