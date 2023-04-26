"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-04

      Project to turn a selection list into a selection of hypertext links
      Author: Lillian Sones
      Date:   04/24/2023 

      Filename: project06-04.js
*/

// Selection lists in the web form
let year = document.getElementById("year");
let make = document.getElementById("make");
let model = document.getElementById("model");
let trim = document.getElementById("trim");

// Option elements within the selection lists
let yearOptions = document.querySelectorAll("select#year option");
let makeOptions = document.querySelectorAll("select#make option");
let modelOptions = document.querySelectorAll("select#model option");
let trimOptions = document.querySelectorAll("select#trim option");

// The number of options within each selection list
let years = yearOptions.length;
let makes = makeOptions.length;
let models = modelOptions.length;
let trims = trimOptions.length;

// Form button to generate the complete text of the selected vehicle
let selectVehicle = document.getElementById("selectVehicle");

// Paragraph containing the text of the selected vehicle
let vehicle = document.getElementById("vehicle");


// Event handler to modify the content of the Model selection list
// when the Make selection list changes

year.onchange = function() {
   let yearIndex = year.selectedIndex;
   let yearCategory = year.options[makeIndex].text;
   
   if (yearIndex === 0) {
      showAll(model);
   } else {
      filterSelect(model, yearCategory);
   }  
}

make.onchange = function() {
   let makeIndex = make.selectedIndex;
   let makeCategory = make.options[makeIndex].text;
   
   if (makeIndex === 0) {
      showAll(model);
   } else {
      filterSelect(model, makeCategory);
   }  
}

// Event handler to modify the content of the Trim selection list
// when the Model selection list changes

model.onchange = function() {
   let modelIndex = model.selectedIndex;
   let modelCategory = model.options[modelIndex].text;
   
   if (modelIndex === 0) {
      showAll(trim);
   } else {
      filterSelect(trim, modelCategory);
   }     
}

selectVehicle.onclick = function() {
   vehicle.innerHTML = year[year.selectedIndex].text+" "+make[make.selectedIndex].text+" "+model[model.selectedIndex].text+" "+trim[trim.selectedIndex].text;
}

function showAll(selectList){
   let options = selectList.children;
   let optionLength = options.length;
   for(let x=0; x<optionLength; x++){
      options[x].style.display = "block";
   }
}

function filterSelect(selectList, category){
   let options = selectList.children;
   let optionLength = options.length;
   for(let x=0; x<optionLength; x++){
      if (options[x].className == category) {
         options[x].style.display = "block";
      } else {
         options[x].style.display = "none";
      }
   }
}