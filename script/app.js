console.log('script is connected')

function itemPrice(item, isIncrease, price){
    const itemQuantity = document.getElementById(item +'-value');
    let itemQuantityText = itemQuantity.value;
    if(isIncrease == true){
        itemQuantityText = parseInt(itemQuantityText) + 1;
    }else if(itemQuantityText > 0){
        itemQuantityText = parseInt(itemQuantityText) - 1;
    }
    itemQuantity.value = itemQuantityText;
    const itemPrice = document.getElementById(item +'-price');
    let currentItemPrice = itemQuantityText * price;
    itemPrice.innerText = currentItemPrice;

    // calculateTotal 
    calculateTotal()
}
// item input value
function getItemInput(item){
    const itemQuantity = document.getElementById(item +'-value');
    let itemQuantityValue = parseInt(itemQuantity.value);
    return itemQuantityValue;
}

// calculate subtotal, tax and totalPrice 
 function calculateTotal(){
     let casePrice = getItemInput('case') * 59;
     let phonePrice = getItemInput('phone') * 1219;
     let subTotal = casePrice + phonePrice;
     let tax = subTotal * 2/100;
     let totalPrice = subTotal + parseInt(tax);
     document.getElementById('sub-total').innerText = subTotal;
     document.getElementById('tax').innerText = parseInt(tax);
     document.getElementById('total-price').innerText = totalPrice;
     
 }

// button event 
document.getElementById('phone-increase').addEventListener('click', ()=>{
    itemPrice('phone', true, 1219);
})
document.getElementById('phone-decrease').addEventListener('click', ()=>{
    itemPrice('phone', false, 1219)
})
document.getElementById('case-increase').addEventListener('click', ()=>{
    itemPrice('case', true, 59);
})
document.getElementById('case-decrease').addEventListener('click', ()=>{
    itemPrice('case', false, 59);
})
