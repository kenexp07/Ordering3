let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Pepperoni Pizza',
        image: '1.PNG',
        price: 349
    },
    {
        id: 2,
        name: 'Italian Pizza',
        image: '2.PNG',
        price: 399
    },
    {
        id: 3,
        name: 'Cheese Pizza',
        image: '3.PNG',
        price: 299
    },
    {
        id: 4,
        name: 'Bacon Burger',
        image: '4.PNG',
        price: 139
    },
    {
        id: 5,
        name: 'Chicken Burger',
        image: '5.PNG',
        price: 99
    },
    {
        id: 6,
        name: 'Double Patty Burger',
        image: '6.PNG',
        price: 149
    },

    {
        id: 7,
        name: 'Classic Spaghetti',
        image: '7.PNG',
        price: 199
    },
   
    {
        id: 8,
        name: 'MeatBalls Spaghetti',
        image: '8.PNG',
        price: 199
    },

    {
        id: 9,
        name: 'Italian Spaghetti',
        image: '9.PNG',
        price: 199
    },

    {
        id: 10,
        name: 'Whipped caramel frappe',
        image: '10.PNG',
        price: 119
    },
   
    {
        id: 11,
        name: 'Matcha frappe',
        image: '11.PNG',
        price: 119
    },

    {
        id: 12,
        name: 'triple chocolate frappe',
        image: '12.PNG',
        price: 119
    },
   
   
   
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="pizza/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="pizza/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}