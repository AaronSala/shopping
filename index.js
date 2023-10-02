const buttons = document.querySelectorAll('.addcart')

const price = document.querySelectorAll('.card')
const cart = document.getElementById('cart')

buttons.forEach(button =>{
    button.addEventListener('click',function(){
        const card = this.closest('.card'); 
        const price = card.querySelector('.price')
      
        console.log("clicked me")
        console.log(price.textContent)
    })

})
