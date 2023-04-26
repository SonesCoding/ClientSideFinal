/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Lillian Sones
      Date:   04/24/2023   

      Filename: project02-04.js
 */
 




let CHICKEN_PRICE = 10.95;
let HALIBUT_PRICE = 13.95;
let BURGER_PRICE = 9.95;
let SALMON_PRICE = 18.95;
let SALAD_PRICE = 7.95;
let SALES_TAX = 0.07;

document.getElementById("chicken").addEventListener("click", calcTotal);
document.getElementById("halibut").addEventListener("click", calcTotal);
document.getElementById("burger").addEventListener("click", calcTotal);
document.getElementById("salmon").addEventListener("click", calcTotal);
document.getElementById("salad").addEventListener("click", calcTotal);

function calcTotal(){
   let cost = 0;
   let buyChicken = document.getElementById("chicken").checked;
   let buyHalibut = document.getElementById("halibut").checked;
   let buyBurger = document.getElementById("burger").checked;
   let buySalmon = document.getElementById("salmon").checked;
   let buySalad = document.getElementById("salad").checked;

   if(buyChicken){
      cost += CHICKEN_PRICE;
   }
   if(buyHalibut){
      cost += HALIBUT_PRICE;
   }
   if(buyBurger){
      cost += BURGER_PRICE;
   }
   if(buySalmon){
      cost += SALMON_PRICE;
   }
   if(buySalad){
      cost += SALAD_PRICE;
   }
   document.getElementById("foodTotal").innerHTML = formatCurrency(cost);
   let tax = cost * SALES_TAX;
   document.getElementById("foodTax").innerHTML = formatCurrency(tax);
   let totalCost = cost+tax;
   document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
}

// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
