
let shop = document.getElementById('shop')

let shopItemsData = [
    {
    id:120,
    name:"Classic Burger",
    price:450,
    desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    img: "images/item-1.jpeg"
},
{
    id:121,
    name:"Milk Shake",
    price:350,
    desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    img: "images/item-2.jpeg"
},
{
    id:122,
    name:"Classic Pancakes",
    price:730,
    desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    img: "images/item-3.jpeg"
},
{
    id:123,
    name:"Complete Lunch",
    price:550,
    desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    img: "images/item-4.jpeg"
}
];

let generateShop =()=>{
 return (shop.innerHTML=shopItemsData
    .map((x)=>{
        let {id, name, price, desc, img}=x;
   return `
 <div id=product-id-${id} class="item">
            <img width="220" height=210 src=${img} alt="">
            <div class="details">
                <h3>${name}</h3>
                <p>${desc}</p>
                   <div class="price-quantity">
                       <h2>Ksh ${price}</h2>
                       <div class="buttons">
                          <i onclick="decrement()" class="bi bi-dash"></i>
                            <div id=${id} class="quantity">0</div>
                          <i onclick = "increment()" class="bi bi-plus"></i>
                        </div>
                  </div>
            </div>
        </div>
 `
 })
 .join(""))
}
generateShop()


let increment = ()=>{
    console.log('increment');
};

let decrement = ()=>{
    console.log('decrement');
};
let update = ()=>{};


