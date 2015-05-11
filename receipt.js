// Pang pantay
function addSpaces(amount) {
  for(var i = 0; i < amount; i++)
    document.write("&nbsp;");
}

/** Gets the values from the search bar (Dont mind this)*/
function getValue(instance) {
  var passedInformation = location.search.toString();
  var value = passedInformation.indexOf(instance);

  if(value == -1)
    return null;

  value = passedInformation.substring(value);
  value = value.substring(value.indexOf("=") + 1);

  if(value.indexOf("&") != -1)
    value = value.substring(0,value.indexOf("&"));

  value = setAppropriateSpaces(value);

  return value.split("%2C");
}

/** The search bar cannot make spaces, therefore it is transformed into '+'. This function brings back the spaces. (Don't Mind This) */
function setAppropriateSpaces(value) {
  var newValue = "";
  for(var i = 0; i < value.length; i++) {
    if(value.charAt(i) == "+")
      newValue += " ";
    else
      newValue += value.charAt(i);
  }
  return newValue;
}

/** Just for putting dynamic spaces to align the prices (IGNORE THIS) pang pantay lang din*/
function addDynamicSpacing(value, ones, tens, hundreds) {
  if(value < 10)
    addSpaces(ones);
  else if(value < 100)
    addSpaces(tens);
  else
    addSpaces(hundreds);
}

//flavor,flavorSpace1,flavorSpace2 are reserved for addOns only
function addToReceiptCheck(product,quantity,price,quantitySpace1,quantitySpace2,priceSpace1,priceSpace2,flavor,flavorSpace1,flavorSpace2) {
  //If product checkbox is not checked AND quantity is equal to zero, the product will not be added to the receipt.
  if(product != null && quantity != 0) {
    var price = price * quantity;
    totalPrice += price;
    document.write("<br>");
    (quantity < 10)? addSpaces(28): addSpaces(27);
    document.write(quantity);
    (quantity < 10)? addSpaces(quantitySpace1): addSpaces(quantitySpace2);
    document.write(product);
    (price < 100)? addSpaces(priceSpace1): addSpaces(priceSpace2);
    document.write("PhP " + price.toFixed(2));

    // The following will only run for addOns
    if(flavor == "Cheese" || flavor == "Choco") {
      document.write("<br>");
      addSpaces(flavorSpace1);
    } else if(flavor == "Barbecue" || flavor == "Vanilla") {
      document.write("<br>");
      addSpaces(flavorSpace2);
    }

    if(flavor != null)
      document.write("(" + flavor + ")");
  }
}
