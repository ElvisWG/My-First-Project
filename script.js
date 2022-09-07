let totalAmount = document.getElementById("total-amount");
let shoppingAmount = document.getElementById("shopping-amount");
const searchAmount = document.getElementById("search-amount");
const totalAmountButton = document.getElementById("total-amount-button");
const searchAmountButton = document.getElementById("search-amount-button");
const productTitle = document.getElementById("product-title");
const errorMessage = document.getElementById("budget-error");
const productTitleError = document.getElementById("product-title-error");
const productCostError = document.getElementById("product-cost-error");
const amount = document.getElementById("amount");
const expenditureValue = document.getElementById("expenditure-value");
const balanceValue = document.getElementById("balance-amount");
const list = document.getElementById("list");
let myAmount = 0;


//Set Budget Part
totalAmountButton.addEventListener("click", () => {
  myAmount = totalAmount.value;
  //empty or negative input
  if (myAmount === "" || myAmount < 0) {
    errorMessage.classList.remove("hide");
  } else {
    errorMessage.classList.add("hide");
    //Set User Budget
    amount.textContent = myAmount;
    //Derive User Balance
    balanceValue.innerText = myAmount - expenditureValue.innerText;
    // Input Box
    totalAmount.value = "";
  }
});

//Function To Disable Edit and Delete Button
const disableButtons = (boolean) => {
  let editButton = document.getElementsByClassName("edit");
  Array.from(editButton).forEach((element) => {
    element.disabled = boolean;
  });
};

//Function To Create List
const grocerylist = (itemName, itemValue) => {
  let grocerylistContent = document.createElement("div");
    list.appendChild(grocerylistContent);
  grocerylistContent.innerText = `<p class="product">${itemName}</p><p class="amount">${itemValue}</p>`;
  let editButton = document.createElement("button");
    editButton.addEventListener("click", () => {
    modifyElement(editButton, true);
  });
  let deleteButton = document.createElement("button");
    deleteButton.addEventListener("click", () => {
    modifyElement(deleteButton);
  });
  grocerylistContent.appendChild(editButton);
 grocerylistContent.appendChild(deleteButton);
  document.getElementById("list").appendChild(grocerylistContent);
};
{
$(document).ready(function(){
  $.ajax({
    url: 'https://www.fruityvice.com/api/fruit/all',
    type:"GET",
    success:function(result){
      console.log(result)
    },
    error:function(err){
      console.log(err);
    }
  })
})
}

getGroceries().then(response=>{
  console.log(response);
})
let userData = {
  "id" : 'user1234',
  "name" : 'John',
  "email" : 'user1234@gmail.com'
}
searchAmountButton.addEventListener("click", myFunction);
function myFunction(){
  alert("i was clicked!")
}
 // index.js
user.profile = () => {
  const data = { users: [] }
  // Create 1000 users
  for (let i = 0; i < 1000; i++) {
    data.users.push({ id: i, name: `user${i}` })
  }
  return data
}
