/** Adds Blank Spaces (We need this since we cannot add more than blank spaces in JavaScript) */
function addSpaces(amount) {
  for(var i = 0; i < amount; i++)
    document.write("&nbsp;");
}

/** Adds the desired range of values inside our drop-down lists. (<select></select>) */
function option(amount) {
  for(var i = 0; i <= amount; i++)
    document.write("<option>" + i + "</option>");
}
/** Determines whether a checkbox is checked, thus enabling their drop-down list.*/
function productClickedCheck(product_ckbx, quantity_slct) {
  quantity_slct = document.getElementById(quantity_slct);

  quantity_slct.disabled = (product_ckbx.checked == true)? false: true;

  anyOrderClickedCheck();
}

/** Determines whether a checkbox is checked, thus enabling the addOns checkboxes and Submit button*/
function anyOrderClickedCheck() {
  var hamburger_ckbx = document.getElementById("hamburger_ckbx");
  var cheeseburger_ckbx = document.getElementById("cheeseburger_ckbx");
  var spaghetti_ckbx = document.getElementById("spaghetti_ckbx");
  var chicken_ckbx = document.getElementById("chicken_ckbx");

  if(hamburger_ckbx.checked || cheeseburger_ckbx.checked || spaghetti_ckbx.checked || chicken_ckbx.checked) {
    addOnsAndSubmitDisabled(false);
  } else {
    addOnsAndSubmitDisabled(true);
  }
}

/** Disables or enables the addOns checkbox and submit button, thus Determining the availability of the radio buttons and drop-down list of the addOns */
function addOnsAndSubmitDisabled(bool) {
  var fries_ckbx = document.getElementById("fries_ckbx");
  var sundae_ckbx = document.getElementById("sundae_ckbx");
  var submit_sbtn = document.getElementById("submit_sbtn");
  fries_ckbx.disabled = bool;
  sundae_ckbx.disabled = bool;
  submit_sbtn.disabled = bool;

  addOnsFlavorAndQuantityDisabledCheck(fries_ckbx,"cheeseFlavor_rbtn","barbecueFlavor_rbtn","friesQuantity_slct");
  addOnsFlavorAndQuantityDisabledCheck(sundae_ckbx,"chocoFlavor_rbtn","vanillaFlavor_rbtn","sundaeQuantity_slct");
}

/** Disables or enables the addOns' radio buttons and drop-down list if the corresponding addOns checkbox is checked */
function addOnsFlavorAndQuantityDisabledCheck(addOns_ckbx, flavor1_rbtn, flavor2_rbtn, quantity_slct) {
  flavor1_rbtn = document.getElementById(flavor1_rbtn);
  flavor2_rbtn = document.getElementById(flavor2_rbtn);
  quantity_slct = document.getElementById(quantity_slct);

  if(addOns_ckbx.checked == true && addOns_ckbx.disabled == false) {
    flavor1_rbtn.disabled = false;
    flavor2_rbtn.disabled = false;
    quantity_slct.disabled = false;
  } else {
    flavor1_rbtn.disabled = true;
    flavor2_rbtn.disabled = true;
    quantity_slct.disabled = true;
  }
}
