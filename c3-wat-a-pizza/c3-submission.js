//Declaring variables 
var name="Gary";
var email="gary@123.com"
var phoneNo="14123123435"
var address="20, Marble Drive, Eville"
var noOfPizzasOrdered=10;
var pizzaPrice = 12.5;
var pizzaSize="M";
var noOfGarlicBreadOrdered=5;
var garlicBreadPrice=5.99;
var noOfBeveragesOrdered=10;
var beveragePrice=1.99;



// define function displayCustomerDetails() to display the details of customer passed as parameters.
 function displayCustomerDetails(name, email, phoneNo, address){
    console.log("Name of Customer :       " +name);
    console.log("Email of Customer:       "+email);
    console.log("Phone number of Customer:"+phoneNo);
    console.log("Address of Customer:     "+address);
 }

// define funciton displayMenu() to raise an alert that displays the menu with 
// category, item names and price
 function displayMenu(){
    console.log("Select the items to order");
    console.log( "-------------------------");
    console.log("1) Pizza");
    console.log("Price of one regular pizza: $9.99");
    console.log( "Price of one medium pizza: $11.99"); 
    console.log("Price of one large pizza: $9.99");
    console.log("2) Garlic Bread");
    console.log("Price of one Garlic Bread: $5.99");
    console.log("3) Beverages");
    console.log("Price of one Beverage: $1.99");
 }

// define function getPriceOfPizzaBasedOnSize() to return price of pizza for the 
// size passed as parameter.
function getPriceOfPizzaBasedOnSize(){
   pizzaPrice=0;​
switch(size){​
    case S: ​
    pizzaPrice = 9.99;​
        break;​
    case M:​
    pizzaPrice = 11.99;​
        break;​
    case L: ​
    pizzaPrice = 13.99;​
        break;​
    default:    ​
        alert('Invalid size, Enter S,M or L');​
        pizzaPrice = 0;​
        break;​
   }
   return pizzaPrice;
}




// define function getPriceOfGarlicBread() to return price of garlic bread as 5.99.
function getPriceOfGarlicBread(){
   return 5.99;
}

// define function getPriceOfBeverage() to return price of beverage as 1.99.
function getPriceOfBeverage(){
   return 1.99;
}

// define function calculatePrice() to return cost of items ordered for the 
// no of items and price passed as parameters.
function calculatePrice(noOfItems,price){
   return noOfItems*price;
}

// define function calculateTotalBill() to return total bill amount from the 
// total price of pizza, garlic bread and beverages ordered 
function calculateTotalBill(pizzaPrice,garlicBreadPrice,beveragePrice){
   return pizzaPrice*noOfPizzasOrdered+garlicBreadPrice*noOfGarlicBreadOrdered+beveragePrice*noOfBeveragesOrdered;
}

// define function calculateDiscountAndReturnBillAmount() to return discounted amount 
// which will be calculated only if total bill is more than 50  
function calculateDiscountAndReturnBillAmount(calculateTotalBill){
   if(calculateTotalBill>=50){
   return calculateTotalBill*0.9;
   }else{
      return calculateTotalBill;
   }
}
// define function displayOrderDetails() to print the order details
function displayOrderDetails(){
console.log("Order Details")
console.log("-----------------")
console.log("The number of pizzas ordered       :"+noOfPizzasOrdered)
console.log("The number of garlic bread ordered : "+noOfGarlicBreadOrdered)
console.log("The number of beverages ordered    : "+noOfBeveragesOrdered)
console.log("--------------------------------")
}
//Main Program

// call the functions to compute order amount and display order details
console.log(displayCustomerDetails(name, email, phoneNo, address))
console.log(displayOrderDetails())
console.log("The total bill amount is      :$"+calculateTotalBill(pizzaPrice,garlicBreadPrice,beveragePrice))
console.log("The discounted bill amount is : $"+calculateDiscountAndReturnBillAmount(calculateTotalBill(pizzaPrice,garlicBreadPrice,beveragePrice)))