
let addButton = document.getElementById("add_Button");
let fruitInput = document.getElementById("add_fruit");
let fruitList = document.getElementById("fruit_List");

addButton.addEventListener("click", fruitAddFunction);

function fruitAddFunction() {
  let fruitValue = fruitInput.value;
  let newFruit = document.createElement("li");
  let newFruitText = document.createTextNode(fruitValue);
  newFruit.appendChild(newFruitText);
  fruitList.appendChild(newFruit);
  fruitInput.value = "";
}



fruitList = document.getElementById("fruit_List");
let addCountButton = document.getElementById("return_count");
addCountButton.addEventListener("click", countOfFruits);


function countOfFruits(){
  let fruitCount = fruitList.getElementsByTagName("li").length;
  let fruitCountItems = document.getElementById("fruit_count");
  fruitCountItems.textContent = `Siyahida ${fruitCount} meyve var`;
}





let element = document.getElementById("fruit_List");
let addButtonForShowOrHide = document.getElementById("hide_Or_Show");
addButtonForShowOrHide.addEventListener("click", listShowOrHide);



function listShowOrHide(){
  if (element.classList.contains("show")) {
        element.classList.remove("show");
        element.classList.add("hidden");
  } else {    
        element.classList.remove("hidden");
        element.classList.add("show");
  }
  
}
let countElement = document.getElementById("fruit_count");
let addButtonForShowOrHideCount = document.getElementById("hide_Or_Show");
addButtonForShowOrHide.addEventListener("click", CountShowOrHide);

function CountShowOrHide(){
  if (countElement.classList.contains("show")) {
    countElement.classList.remove("show");
    countElement.classList.add("hidden");
  } else {    
    countElement.classList.remove("hidden");
    countElement.classList.add("show");
  }
  
}