
//Question 1: Show me how to calculate the average price of all items.


//write a functin to access the price data via higherorder function (map)
//we name the items arr so that we can differenciate between the array it will give us and the items files that is attached
function getPrices (itemsArr) {
  return itemsArr.map (function (item) {
    return Number (item.price);
  });
};

//test out the results
console.log(getPrices(items));

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
answer2box.innerHTML = "Items that cost between $14.00 and $18.00 USD : " + betweenPriceList;
//answer2 :  1970s Coors Banquet Glass Beer Pitcher
//        :  The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade
//        :  Hand Painted Colorful Feather Glass



//Question 3: Which item has a"GBP" currency code? Display it's name and price.
var gbpCurrency = items.filter (function (gbpCode) {
  return (gbpCode.currency_code === "GBP")
});
var gbpName = gbpCurrency.map(function(y) {
    return y.name;
});
var gbpPrice = gbpCurrency.map(function(x)  {
  return x.price;
});

console.log (gbpName)

var answer3box = document.getElementById("answer3");
answer3box.innerHTML = "The items that has a GBP Currency is _name_ "+ gbpName + "and costs $" + gbpPrice + " GBP";

//Answer3
//        :  1970s-coors-banquet-glass-beer-pitcher cost E18


//Question 4: Display a list of all items who are made of wood




//var answer4box = document.getElementById("answer4");
//answer4box.innerHTML = "The following items are made of wood " + answer4;

//answer4
//      :  SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3 is made of wood.
//      :  Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift is made of wood.
//      :  Medium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted Wood Sign-Custom Colors is made of wood.
//      :  Magnetic Wall Mount Bottle Opener Barware Set - Stainless Steel or Black - Personalized if you like! is made of wood.
//      :  Engraved Pocket Knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift, 4 Knives is made of wood. -->


//Question 5: Which items are made of eight or more materials? Display the name, number of tiems and the items it is made of.




//var answer5box = document.getElementById("answer5");
//answer5box.innerHTML = "The following items are made of 8 or more materials: " + answer5;

//answer5
//      :   Qty of 2 Groomsmen Gift - Stainless Steel Personalized Bottle Opener - NO Capcatcher has 9 materials:
//        wall mount bottle opener, wedding, man cave, christmas gift,  guy gift, fathers day, home bar, beer, bar
//      :   The Three Broomsticks Customizable Beer Stein Mug, Harry Potter  Inspired, hogsmeade village, harry potter gift, three broomsticks mug  has 13 materials:
//          glass, sandblast cabinet, vinyl, beer glass, pint glass, etched pint glass,  etched glass, etched beer glass, 16 oz pint, beer gift, etched harry potter glass, the three broomsticks glass, personalized harry potter glass




//Question 6: How many items were made by thier sellers?



//var answer6box = document.getElementById("answer6");
//answer6box.innerHTML = "The following items were made by the seller: " + answer6;

//answer6
//      :   18 were made by their sellers
