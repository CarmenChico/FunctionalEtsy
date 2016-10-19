
//Question 1: Show me how to calculate the average price of all items.


//write a functin to access the price data via higherorder function (map)
//we name the items arr so that we can differenciate between the array it will give us and the items files that is attached
function getPrices (itemsArr) {
  return itemsArr.map (function (item) {
    return Number (item.price);
  });
};

//test out the results
// console.log(getPrices(items));

//To get the average of the array :
var total = 0;
for (var i= 0; i< items.length; i++) {
    total += items[i].price;
}
var avg = total/items.length;

//the avg yields too many decimals, so we must us math.round to get a coined amount
//we var answer1 becuase this is the id tag to answer 1
var answer1 =Math.round(avg*100)/100

//test out the answer.
//console.log(answer1);

var answer1box = document.getElementById("answer1");
answer1box.innerHTML = "The average price of the items listed  $" + answer1;
//  Answer1: The average is $23.63





//Question 2 : Show me how to get an array of items that cost between $14.00 and $18.00 USD


 var findBetweenPrices = items.filter(function(sPrice) {
   return (sPrice.price > 14.00 && sPrice.price <18.00)
  });

  var betweenPriceList = findBetweenPrices.map(function(bList) {
    return bList.title;
  })

// //test out the results
//console.log(betweenPriceList);



var answer2box = document.getElementById("answer2");
answer2box.innerHTML += "<div>" +"Items that cost between $14.00 and $18.00 USD : "+ "</div>" + "<p>" + betweenPriceList[0] +"</p>" + "<p>" + betweenPriceList[1] +"</p>" + "<p>" + betweenPriceList[2] +"</p>";
//answer2 :  1970s Coors Banquet Glass Beer Pitcher
//        :  The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade
//        :  Hand Painted Colorful Feather Glass



//Question 3: Which item has a"GBP" currency code? Display it's name and price.
var gbpCurrency = items.filter(function(gbpCode) {
  // console.log(gbpCode)
  return gbpCode.currency_code.includes("GBP")
  console.log(gbpCurrency)
});

var gbpTitle = gbpCurrency.map(function(y) {
  // console.log (gbpTitle)
    return y.title;
});
var gbpPrice = gbpCurrency.map(function(x)  {
  return x.price;
});



var answer3box = document.getElementById("answer3");
answer3box.innerHTML = "The items that has a GBP Currency is "+ gbpTitle + "and costs $" + gbpPrice + " GBP";

//Answer3
//        :  1970s-coors-banquet-glass-beer-pitcher cost E18


//Question 4: Display a list of all items who are made of wood


 var madeOfWood = items.filter(function(wood) {
   return wood.materials.includes("wood")
  });
// //must add the .includes "whatever specific word we want, not just the function that we named for the sake of its name.. the "" itentify the specific item.
  var listOfWood = madeOfWood.map(function(wList) {
    // console.log(wList);
    return wList.title;
  });

// //test out the results
// console.log(listOfWood);

var answer4box = document.getElementById("answer4");
answer4box.innerHTML = "These items have wood included in thier materials" + listOfWood;

//answer4
//      :  SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3 is made of wood.
//      :  Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift is made of wood.
//      :  Medium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted Wood Sign-Custom Colors is made of wood.
//      :  Magnetic Wall Mount Bottle Opener Barware Set - Stainless Steel or Black - Personalized if you like! is made of wood.
//      :  Engraved Pocket Knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift, 4 Knives is made of wood. -->




//Question 5: Which items are made of eight or more materials? Display the name, number of tiems and the items it is made of.

var eightPlusMaterials = items.filter(function(plusMaterials) {
  return (plusMaterials.materials.length >=8);

 });
 // console.log(eightPlusMaterials)

 var plusListName = eightPlusMaterials.map(function(pList) {
  //  console.log(pList);

   return pList.title

 });
 console.log(plusListName)

 var plusListItem = eightPlusMaterials.map(function(pList) {

   return pList.materials

 });

// //test out the results
console.log(plusListItem)


var answer5box = document.getElementById("answer5");
answer5box.innerHTML += "The following items are made of 8 or more materials: " + "<p>" + plusListName[0] + "</p>" + plusListItem[0] + "(material used)" + "<p>" + plusListName[1] + "</p>" + plusListItem[1] + "(material used)"


//answer5
//      :   Qty of 2 Groomsmen Gift - Stainless Steel Personalized Bottle Opener - NO Capcatcher has 9 materials:
//        wall mount bottle opener, wedding, man cave, christmas gift,  guy gift, fathers day, home bar, beer, bar
//      :   The Three Broomsticks Customizable Beer Stein Mug, Harry Potter  Inspired, hogsmeade village, harry potter gift, three broomsticks mug  has 13 materials:
//          glass, sandblast cabinet, vinyl, beer glass, pint glass, etched pint glass,  etched glass, etched beer glass, 16 oz pint, beer gift, etched harry potter glass, the three broomsticks glass, personalized harry potter glass




//Question 6: How many items were made by thier sellers?


var sellerMade = items.filter(function(sMade) {
  return sMade.who_made.includes ("i_did")


 });

 //
 // console.log(sellerMade.length)


 // var sMadeList = items.map(function(sList) {
 //  //  console.log(pList);
 //
 //   return sList.length
 //
 // });
 // console.log(sMadeList)

var answer6box = document.getElementById("answer6");
answer6box.innerHTML =  sellerMade.length + " items were made by the seller."



//answer6
//      :   18 were made by their sellers
