function CreateItem(id, name, category, image, description, price, quantity) {
    this.id = id
    this.name = name
    this.category = category
    this.image = image
    this.description = description
    this.price = price
    this.quantity = quantity
}

let item1 = new CreateItem(1, 'Long Dress', 'Clothing', 'https://i.postimg.cc/KvjZRs04/dress.jpg', 'pink fit and flare dress', 200.00, 1)
let item2 = new CreateItem(2, 'Short Dress', 'Clothing', 'https://i.postimg.cc/Gtynx6Vj/dress2.jpg', 'pink off shoulder short dress', 250.00, 1)
let item3 = new CreateItem(3, 'Hair Clip', 'Accesories', 'https://i.postimg.cc/gcZ0D7v5/acc1.jpg', 'pink floral hair clip accesory', 60.00, 1)
let item4 = new CreateItem(4, 'Scrunchie', 'Accesories', 'https://i.postimg.cc/C1DVjWWs/acc2.jpg', 'pink scrunchie hair tie', 20.00, 1)
let item5 = new CreateItem(5, 'Perfume', 'Perfumes', 'https://i.postimg.cc/vBwKdDN5/perfume.jpg', 'Amazing Pink Perfume', 300.00, 1)

//display items
let items = [item1, item2, item3, item4, item5];

localStorage.setItem('items', JSON.stringify(items))

let purchasedItems = [];

let main = document.querySelector('main')

items.forEach(item => {
    main.innerHTML += `
                        <div>
                        <img src="${item.image}">
                        <p>R ${item.price}</p>
                        <button id="viewmore">View More</button>
                        <button class="purchase" value="${item.id}">Purchase</button>
                        </div>
                        `
})

let purchasedButtons = document.querySelectorAll('.purchase')

function addToCart(id){
    let item = items.filter(object=> object.id ==id) //items= the array above
    purchasedItems.push(item)
    localStorage.setItem('purchasedItems', JSON.stringify(purchasedItems))
}
purchasedButtons.forEach(button => {
    button.addEventListener('click',(event)=>{
        addToCart(event.target.value)
    })
})
// when i click on purchase, its going to add that specific item to an array called "purchace"
// how do you target what you want to add?--> you have to know how to run a function when a button is clicked
// if you are able to display amount of items purchased in the cart
