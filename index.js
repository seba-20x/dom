const initialPrice = 400000;
const price = document.querySelector('.precio-inicial');
let initialQuantity = document.querySelector('.cantidad')
const buttonIncrement = document.querySelectorAll('button')[0]; 
const buttonDecrement = document.querySelectorAll('button')[1];
let totalPrice = document.querySelector('.valor-total');

price.innerHTML = initialPrice;


let currentValue = Number(initialQuantity.innerHTML);

buttonIncrement.addEventListener('click', ()=>{
    currentValue += 1;
    initialQuantity.innerHTML = currentValue;
    let total = currentValue * initialPrice;
    totalPrice.innerHTML = total;
});

buttonDecrement.addEventListener('click', ()=>{
    if (currentValue > 0) {
        currentValue -= 1;
        initialQuantity.innerHTML = currentValue;
        let total = currentValue * initialPrice;
        totalPrice.innerHTML = total;
    }
})

