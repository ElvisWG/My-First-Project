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
const init = () => {
  inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.querySelector('input#searchByName');
    console.log(input.value);

    fetch("http://localhost:3000/Groceries")
    .then(response => response.json())
    .then(data => {
     const price = document.querySelector('section#cryptoDetails h4');
     // const cryptovalue = document.querySelector('section#cryptoDetails p');
      console.log(data);
     // crypto.innerText = data.crypto;
     // cryptovalue.innerText = data.cryptovalue;
    });
    
      document.getElementById(searchAmount).onclick = displayPrice;
      function displayPrice(){
document.getElementById("cost").innerHTML = Prices();
      }
    });
  }

