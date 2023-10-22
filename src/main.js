
let shop = document.getElementById('shop')



let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop =()=>{
 return (shop.innerHTML=shopItemsData
    .map((x)=>{
        let {id, name, price, desc, img}=x;
        let search = basket.find((x)=>x.id === id) || [];
   return `
 <div id=product-id-${id} class="item">
            <img width="220" height=210 src=/${img} alt="">
            <div class="details">
                <h3>${name}</h3>
                <p>${desc}</p>
                   <div class="price-quantity">
                       <h2>Ksh ${price}</h2>
                       <div class="buttons">
                          <i onclick="decrement(${id})" class="bi bi-dash"></i>
                            <div id=${id} class="quantity">
                            ${search.item === undefined? 0: search.item}
                            </div>
                          <i onclick = "increment(${id})" class="bi bi-plus"></i>
                        </div>
                  </div>
            </div>
        </div>
 `
 })
 .join(""))
}
generateShop()


let increment = (id)=>{
    let selectedItem =id
    let search =basket.find((x)=>x.id ===selectedItem);

    if(search === undefined){
        basket.push({
            id: selectedItem, 
            item:1
         });
    }
    else{
       search.item+=1
    }
   

//console.log( basket);
update(selectedItem);
localStorage.setItem("data", JSON.stringify(basket));
};

//decreamenting the numbers per item selected
let decrement = (id)=>{
    let selectedItem =id
    let search =basket.find((x)=>x.id ===selectedItem);


    if(search === undefined) return;
    if(search.item=== 0)return;
    
    else{
       search.item-=1
    }
    update(selectedItem)
    //filtering the basket from the local storage
    basket = basket.filter((x)=> x.item !== 0)
//console.log( basket);

localStorage.setItem("data", JSON.stringify(basket))
};

/**
 * !updating the cart number of items per item
 * */
let update = (id)=>{
    let search = basket.find((x)=>x.id ===id)
//console.log(search.item);
document.getElementById(id).innerHTML = search.item;
calculation()
//document.getElementById(id.price).innerHTML=search.item
};

let calculation = ()=>{
    let cartIcon = document.getElementById("cart-amount")
    cartIcon.innerHTML=basket.map((x)=>x.item).reduce((x,y)=> x+y, 0)


}

calculation();
