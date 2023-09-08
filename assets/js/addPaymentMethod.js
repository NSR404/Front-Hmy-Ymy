  // Start Code  multi form for choice (Visa , Paypal , Apple Pay , Direct ) in page Add Payment Method
  function showFormPayment(choice) {
   var visaCardPay = document.getElementById("visaCardPay");
   var paypalPay = document.getElementById("paypalPay");
   var applePay = document.getElementById("applePay");
   var directPay = document.getElementById("directPay");
   
   if (choice === 'visaCardPayment') {
       visaCardPay.style.setProperty("display" , "block" ,"important");
       paypalPay.style.display = "none";
       applePay.style.display = "none";
       directPay.style.display = "none";
   } else if (choice === 'paypalPayment') {
       visaCardPay.style.display = "none";
       paypalPay.style.setProperty("display" , "flex" ,"important");
       applePay.style.display = "none";
       directPay.style.display = "none";
   } else if (choice === 'applePayment') {
       visaCardPay.style.display = "none";
       paypalPay.style.display = "none";
       applePay.style.setProperty("display" , "block" ,"important");
       directPay.style.display = "none";
   }
   else if (choice === 'directPayment') {
       visaCardPay.style.display = "none";
       paypalPay.style.display = "none";
       applePay.style.display = "none";
       directPay.style.setProperty("display" , "block" ,"important");
   }
 }
 // End Code  multi form for choice (Visa , Paypal , Apple Pay , Direct ) in page Add Payment Method
