const firebaseConfig = {
    apiKey: "AIzaSyBIVsl52lvKStSf7tVSNGoZm9K4eNC20nQ",
    authDomain: "sedc-project1.firebaseapp.com",
    databaseURL: "https://sedc-project1-default-rtdb.firebaseio.com",
    projectId: "sedc-project1",
    storageBucket: "sedc-project1.appspot.com",
    messagingSenderId: "863727888563",
    appId: "1:863727888563:web:c14927aa3d0f37e440e8c6",
    measurementId: "G-B5GP2BYMTZ"
  };

  firebase.initializeApp(firebaseConfig);

  var products = [
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
      name: 'Product 6',
      description: ' Lorem ipsum dolor, sit amet consectetur adipisicing',
      image: '../ShopCard/herba Products Img/herba44.jpg'
    },
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



  var database = firebase.database();

  database.ref('products').set(products)
    .then(function () {
      console.log('Products are  added to database');
    })
    .catch(function (error) {
      console.error('Error  with adding products to database: ', error);
    });