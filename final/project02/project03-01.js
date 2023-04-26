/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Lillian Sones
      Date:   04/24/2023 

      Filename: project03-01.js
*/




let menuItems = document.getElementsByClassName("menuItem");
for(let x=0; x<menuItems.length; x++){
      menuItems[x].addEventListener("click", calcTotal);
}

function calcTotal(){
      let orderTotal = 0;
      for(let x=0; x<menuItems.length; x++){
            if(menuItems[x].checked){
                  orderTotal += Number(menuItems[x].value);
            }
      }
      document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}

 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }