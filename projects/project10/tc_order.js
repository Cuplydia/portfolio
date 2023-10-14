"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Case Problem 1
  
   Author: Anita Perkis
   Date:  03/17/2021 
     
   Filename: tc_order.js  

   The item array contains the ID numbers of the items ordered by the customer
   The itemDescription array contains the description of each item
   The itemPrice array contains the price of each item
   The itemQty array contains the quantity ordered of each item
   
*/

var item = [10582, 23015, 41807, 10041];


var itemDescription = ["1975 Green Bay Packers Football (signed), Item 10582" , "Tom Landry 1955 Football Card (unsigned), Item 23015" , "1916 Army-Navy Game, Framed Photo (signed), Item 41807" , "Protective Card Sheets, Item 10041"];

var itemPrice = [149.93, 89.98, 334.93,22.67];

var itemQty = [1, 1, 1,4];

var orderTotal = 0; // var with 0 value

var itemCost= 0; //item cost

var cartHTML ="<table border='1'> <tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>"; // puts header line to table

for(var i = 0; i < 4; i++){ //looping through loop for 0 till length

var itemCost = itemPrice[i] * itemQty[i]; //item cost for each item

orderTotal += itemCost;//add to total order

cartHTML += "<tr><td><img src='tc_" + item[i] + ".png' alt='item'/></td>" + "<td>" + itemDescription[i] + "</td>" +"<td>" + "$" + itemPrice[i] + "</td>" + "<td>" + itemQty[i] + "</td>" + "<td>" + "$" + itemCost + "</td></tr>";
 
}//getting value from each party

cartHTML += "<tr><td colspan = '4' > Subtotal</td><td>" + "$" + orderTotal + "</td></tr></table>";  //the order total

var elem = document.getElementById("cart");

elem.innerHTML = cartHTML; //assign value