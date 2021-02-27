 products = [
 {
    id: 1,
    title: "Parfume",
    price: 30.99,
    img: "images/parfem2.jpg",
  
  },
  {
    id: 2,
    title: "Parfume",
    price: 34.99,
    img: "images/parfem1.jpg",
     
  },

  {
    id: 3,
    title: "Under-eye concealers",
    price: 20.99,
    img: "images/slika5.jpg",
  },
    {
    id: 4,
    title: "High glosses",
    price: 20.99,
    img: "images/slika3.jpg",
  },
  {
    id: 5,
    title: "Set kylie skin",
    price: 35.99,
    img: "images/set.jpg",
  },
  {
    id: 6,
    title: "Lipglam",
    price: 18.99,
    img: "images/lipglam.jpg",
  },
  //   {
  //   id: 7,
  //   title: "Item beauty lipstick",
  //   price: 12.99,
  //   img: "images/item.jpg",
  // },
]

// ************************************************ deklariranje ***************************************
const cartBtn = document.querySelector('.cart-btn')
const closeCartBtn = document.querySelector('.close-cart')
const clearCartBtn = document.querySelector('.clear-cart')
const cartDOM = document.querySelector('.cart')
const cartOverlay = document.querySelector('.cart-overlay')
const cartItems = document.querySelector('.cart-items')
const cartTotal = document.querySelector(".cart-total") 
const cartContent = document.querySelector('.cart-content')
let buttonsDOM = [];
let cart = [] 

// ************************************************ da se pokazat na ekrano cartite  **************************************
const containerFluid = document.querySelector(".row")

window.addEventListener('DOMContentLoaded',()=>{
  displayProductsItems(products)
  getBagButtons() 
  Storage.saveProducts(products);
})

function displayProductsItems (productsItems) {
   let displayProducts = productsItems.map(function (item) {
     return `  
        <div class="col-sm-4">
          <div class="card text-center" style="border:2px solid #f8a5c2">
                        <img src=${item.img} alt="high glosses" class="card-img">
                        <div class="card-body">
                            <h4 class="card-title">${item.title}</h4>
                            <p class="price">$${item.price}</p>
                        </div> 
                           <div class="bag-btn" data-id=${item.id}><i class="fas fa-shopping-cart"></i> ADD TO CART </div>
                             </div>
            </div> `
   })
   displayProducts = displayProducts.join(' ')
   containerFluid.innerHTML = displayProducts
  }
 
  cartBtn.addEventListener('click', ()=>{
         cartOverlay.classList.add('transparentBcg')
           cartDOM.classList.add('showCart')
  })
  closeCartBtn.addEventListener('click',()=>{
      cartOverlay.classList.remove('transparentBcg')
           cartDOM.classList.remove('showCart')
  })


  // ***************************************************************************************
  function getBagButtons () {
  const buttons = [...document.querySelectorAll('.bag-btn')];
     buttonsDOM = buttons;
     buttons.forEach(button =>{
          
          let inCart = cart.find(item => item.id === id)
         if (inCart) {
             button.innerText = 'In Cart';
             button.classList.contains('disapled')
               button.target.disabled = true;
            } 
             button.addEventListener('click', (event)=> {
               let idd= event.target.dataset.id;
               console.log(idd)
              event.target.innerHTML = "In Cart"
                 event.target.classList.add('disapled')
                 event.target.disabled = true;
                 // get products from products 
                 let cartItem = Storage.getProduct(idd)
                 console.log(cartItem)
                
                })
     })

 }
 // **************************************************************************************************************
 class Storage  {
    static saveProducts (products) {
        localStorage.setItem('products',JSON.stringify(products))
      }
    static getProduct(something) {
       let products = JSON.parse(localStorage.getItem('products'))
       return products.find(item => item.id === something)
       
      }
 }
    