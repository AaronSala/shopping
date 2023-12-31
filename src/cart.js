let label=document.getElementById('label');
let shoppingCart = document.getElementById('shopping-cart')

let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = ()=>{
    let cartIcon = document.getElementById("cart-amount")
    cartIcon.innerHTML=basket.map((x)=>x.item).reduce((x,y)=> x+y, 0)


}

calculation();
let generateCartItems =()=>{
    if(basket.length !== 0) {
      return (shoppingCart.innerHTML=basket.map((x)=>{

        let {id, item}=x;
        let search = shopItemsData.find((y)=>y.id === id) || [];
        let {name, price,img} = search
        return `
          <div class="cart-item"> 
          <img  width="100"  src=/${img}  />
          <div class="details">
            <div class="title-price-x">
               <h4 class="title-price">
               <p>${name}</p>
               <p class="cart-item-price">ksh ${price}</p>
               </h4>
               <i onclick = "removeItem(${id})"  class="bi bi-x"></i>
            </div>

                 <div class="buttons">
                    <i onclick="decrement(${id})" class="bi bi-dash"></i>
                    <div id=${id} class="quantity"> ${item}
                   
                    </div>
                    <i onclick = "increment(${id})" class="bi bi-plus"></i>
                </div>

            <h3>ksh ${item*search.price}</h3>
          </div>
          </div>
        `;
      }).join(""));
    }
    else{
       shoppingCart.innerHTML =``
       label.innerHTML=`
       <h2>Cart is Empty</h2>
       <a href="index.html">
       <button class="HomeBtn">Back home</button>
       </a>
       `
    }
};
generateCartItems()


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
   

    generateCartItems()
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
    generateCartItems()

localStorage.setItem("data", JSON.stringify(basket))
};
let update = (id)=>{
    let search = basket.find((x)=>x.id ===id)
//console.log(search.item);
document.getElementById(id).innerHTML = search.item;
calculation()
TotalAmount()
//document.getElementById(id.price).innerHTML=search.item
};

let removeItem = (id)=>{
    let selectedItem = id
    console.log(selectedItem);
    basket = basket.filter((x)=>x.id !== selectedItem);
    generateCartItems()
    TotalAmount()
    calculation()
    localStorage.setItem("data", JSON.stringify(basket))
}

let clearCart = ()=>{
    basket=[]
    generateCartItems()
    calculation()
    localStorage.setItem("data", JSON.stringify(basket));
}

let TotalAmount = ()=> {
   if(basket.length !==0){
      let amount = basket.map((x)=>{
        let {item, id}=x;
        let search = shopItemsData.find((y)=>y.id === id) || [];
        return item*search.price;
      }).reduce((x,y)=>x+y, 0)
      label.innerHTML=`
      <h2>Total Bill: Ksh ${amount}</h2>
      <button class="checkout">Check out</button>
      <button onclick = "clearCart()" class="removeall">Clear Cart</button>
      `
   }
   else{

   }
}
TotalAmount()