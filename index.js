import { menuArray } from "./data.js";

const footerCont = document.getElementById('footer-cont')
const btnOne = document.getElementById('btn-0')
const btnTwo = document.getElementById('btn-1')
const btnThree = document.getElementById('btn-2')
const compBtn = document.getElementById('comp-btn')
const formCont = document.getElementById('form-cont')
const payBtn = document.getElementById('pay-btn')
const footer = document.querySelector('footer')
const formEl = document.getElementById('form-el')
const footSub  = document.getElementById('foot-sub')

btnOne.addEventListener('click',function(e){
        render(0)
       
    
})
btnTwo.addEventListener('click',function(){
    render(1)
    
})
btnThree.addEventListener('click',function(){
    render(2)
})
let innerHTml=``
let totalValue=0

compBtn.addEventListener('click',function(){
    formCont.style.display = 'block'
})

formEl.addEventListener('submit', function(e) {
    e.preventDefault();
  });
  
  formEl.addEventListener('input', function() {
    if (isFormFilled()) {
      payBtn.disabled = false;
    } else {
      payBtn.disabled = true;
    }
  });

payBtn.addEventListener('click',function(){
    footer.style.display ='none'
    let formData = new FormData(formEl)
    let nameOfCustome = formData.get('name')
    footSub.innerHTML = `Thanks, ${nameOfCustome}! Your order is on its way!`
    footSub.style.display = 'flex'

    formCont.style.display = 'none'
    
})

function render(num){
    if(totalValue<=40){
        let array = menuArray.filter(function(item){
            return item.id === num
        })
        totalValue+=array[0].price
        innerHTml += `<div class="item"><h2>${array[0].name}</h2><h2>$${array[0].price}</h2></div>`
        footerCont.innerHTML = innerHTml + `<div class="total"><h1>Total Price</h1><h2>$${totalValue}</h2></div>`
        
        document.querySelector('footer').style.display ='flex'
    }
}


function isFormFilled() {
    const formInputs = formEl.querySelectorAll('input');
    for (let i = 0; i < formInputs.length; i++) {
      if (!formInputs[i].value) {
        return false;
      }
    }
    return true;
  }