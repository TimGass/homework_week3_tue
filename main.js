//question 1
var itemsprice = items.map(function(items){
  return items.price;
});
var total = itemsprice.reduce(function(total, current){return total + current;})
var numitems = itemsprice.length;
var avg = (Math.round((total / numitems) * 100))/(100);

console.log("The avg price of an item is $" + avg);

//question 2
var itemsrange = items.filter(function(items){
    return ((items.price > 14.00 && items.price < 18.00) && (items.currency_code === "USD"));
});

console.log("Items that cost between $14.00 and $18.00 USD:");

itemsrange.forEach(function(item){
  console.log(item);
});

//question 3
var gbp = items.filter(function(items){
    return items.currency_code === "GBP";
});

gbp.forEach(function(answer){
  console.log(answer.title + " costs £" + answer.price);
});

//question4
var wood = items.filter(function(item){
  return item.materials.indexOf('wood') != -1;
});

wood.forEach(function(wood){
  console.log(wood.title + " is made of wood.");
});

//quesion5
var materials = items.filter(function(item){
  return (item.materials.length >= 8);
});

materials.forEach(function(material){
  console.log(material);
});

//quesion6
var madeby = items.filter(function(made){
  return made.who_made === "i_did";
})

console.log(madeby.length + " were made by their sellers")
