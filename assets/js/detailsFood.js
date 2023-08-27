
// <!-- Quantity Increment and Decrement in Details Food-->
document.addEventListener("DOMContentLoaded", () => {
   const quantityInput = document.getElementById("quantity");
   const increaseButton = document.getElementById("increase");
   const decreaseButton = document.getElementById("decrease");
   increaseButton.addEventListener("click", (event) => {
     event.preventDefault();
     const newValue =  parseInt(quantityInput.value) + 1 ;
     quantityInput.value = newValue;
     quantityInput.setAttribute("value", newValue);
   });
 
   decreaseButton.addEventListener("click", (event) => {
     event.preventDefault();
     const currentValue = parseInt(quantityInput.value);
     if (currentValue > 0) {
       const newValue =   parseInt(quantityInput.value) - 1 ;
       quantityInput.value = newValue;
       quantityInput.setAttribute("value", newValue);
     }
   });
 });
 