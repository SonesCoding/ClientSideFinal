/*    JavaScript 7th Edition
      Chapter 3
      Project 03-04

      Application to write a list of customer reviews
 Author: Lillian Sones
      Date:   04/24/2023 

      Filename: project03-04.js
*/

let reviewers = ["WillHa85", "howdy.its.evvy", "Tompkins8", "GoldFry26", "Mittens41", ];
let reviewType = ["P", "P", "N",  "", "",]
let stars = [5, 5, 4, 2, 1];
let reviewDates = ["11/18/2024", "11/20/2024", "11/10/2024", "11/17/2024", "11/15/2024", "11/10/2024"];
let reviews = [
   "I've owned all of the Dance Off games from the beginning. I have lost 6 pounds since I started playing.",
   "This game has brought tears to my eyes. My favorite song to dance to is Barbie Girl.",
   "The latest version of Dance Off improves upon the 8th Edition only slightly; still is one of the best dance-style games on the market.",
   "A so-so release of this well-established game. Where this release fails is in the choreography. Many of the moves follow predictable patterns. I hope the next release improves the choreography .",
   "The installation was buggy and kept crashing my gaming console. I spent several hours on tech support with no solution to my problem. I finally returned it and got my money back. I wish I could give it a zero star rating.",
   
];
let reviewTitles = ["My Favorite Workout Game", "Emotionally Touching", "Nice Improvement","Poor Choreography", "Buggy with Poor Tech Support", ];

for(let i=0; i<reviewers.length; i++){
      let reviewCode = "";
      if(reviewType[i]=="P"){
            reviewCode += "<table class = 'prime'>";
      }
      else if(reviewType[i]=="N"){
            reviewCode += "<table class = 'new'>";
      }
      else{
            reviewCode += "<table>";
      }
      reviewCode += "<caption>"+reviewTitles[i]+"</caption><tr><th>By</th><td>"+reviewers[i]+"</td></tr><tr><th>Review Date</th><td>"+reviewDates[i]+"</td></tr><tr><th>Rating</th><td>"+starImages(stars[i])+"</td></tr><tr><td colspan='2'>"+reviews[i]+"</td></tr></table>";
      let art = document.getElementsByTagName("article");
      art[0].insertAdjacentHTML("beforeend", reviewCode);
}

function starImages(rating){
      let imageText = "";
      for(let x=1; x<=rating; x++){
            imageText += "<img src = 'star.png' alt = ''>";
      }
      return imageText;
}