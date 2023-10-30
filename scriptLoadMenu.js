function loadMenu(){
    loadBurger();
}


function loadBurger(){
    document.getElementById('menuBurger').innerHTML = '';
    for(let i = 0; i < burgers.length; i++){
    const burger = burgers[i];
    document.getElementById('menuBurger').innerHTML += `
    <div class="menu">
        <div class="menuTopSection">
            <div class="menuTopSectionHeadline">
            <span id="foodName${i}"><b>${burger["foodName"]}</b></span>
            </div>
            <div class="menuTopSectionPlusButton">
            <button id="plusButtonMenu" onclick="addBasket(${i})" class="plus-button plus-button--small"></button>
            </div>
        </div>
        <div class="menuMiddleSection">
           <div> 
           <span >${burger["foodDescription"]}</span>
           </div>
           <div>
           <img class="foodImg" src="${burger["image"]}">
           </div>
        </div>
        <div class="priceSection">
        <span id="foodPrice${i}"><b>${burger["foodPrice"]}€</b></span>
        </div>
    </div>
    `;
    }
  }


function loadPizza(){
    document.getElementById('menuPizza').innerHTML = '';
    for(let i = 0; i < pizzas.length; i++){
    const pizza = pizzas[i];
    document.getElementById('menuPizza').innerHTML += `
    <div class="menu">
        <div class="menuTopSection">
            <div class="menuTopSectionHeadline">
            <span id="foodName${i}"><b>${pizza["foodName"]}</b></span>
            </div>
            <div class="menuTopSectionPlusButton">
            <button onclick="addBasket(${i})" class="plus-button plus-button--small"></button>
            </div>
        </div>
        <div class="menuMiddleSection">
           <div> 
           <span >${pizza["foodDescription"]}</span>
           </div>
           <div>
           <img class="foodImg" src="${pizza["image"]}">
           </div>
        </div>
        <div class="priceSection">
        <span id="foodPrice${i}"><b>${pizza["foodPrice"]}€</b></span>
        </div>
    </div>
    `;
    }
}