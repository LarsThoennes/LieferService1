
function render(){
  includeHTML();
  loadMenu();
  deliver();
  loadEmptybasket();
  basket850px();
}
 

function addbasket850px(foodIndex) {
   let index = basket.indexOf(burgers[foodIndex].foodName);
   if (index == -1) {
     basket.push(burgers[foodIndex]["foodName"]);
     prices.push(burgers[foodIndex]["foodPrice"]);
     amounts.push(1);
     document.getElementById("basket850pxButton").classList.remove("d-none");
   } else {
     amounts[index]++;
   }
   renderBasket850px();
   renderBasket();
}
 

function renderBasket850px(){
   let sum = 0;
   document.getElementById('basket850pixel').innerHTML = '';
   for(let i = 0; i < basket.length; i++){
      const food = basket[i];
      const price = prices[i];
      const amount = amounts[i];
      sum = 0;
      sum += amount * price;

      document.getElementById('basket850pixel').innerHTML += `
         <div class="basket850pxHeadSection">
            <div>
               <span><b>${amount}</b></span>
            </div>
            <div>
               <span class="addFoodSpan"><b>${food}</b></span>
            </div>
            <div >
               <span>${sum} €</span>
            </div>
         </div>
         <div class="addFoodButtonContainer850px">
            <button onclick="minusButton(${i})" class="addFoodButton">-</button>
            <span >${amount}</span>
            <button onclick="plusButton(${i})" class="addFoodButton">+</button>
         </div>
         <div class="basketDistance850px"></div>
         `;
   }
   loadPriceSection850px();
   loadRightLanguage();
}


function loadPriceSection850px(){
   const idDeliver = document.getElementById('deliverButton');
   if(idDeliver.textContent = idDeliver.classList.contains("clickedDeliverButton")){
      for(let i = 0; i < amounts.length; i++){
         let subTotal = calculateSubTotal();
         let total = calculateTotal();
            document.getElementById('priceSection850px').innerHTML = `
               <div class="addFoodSectionPriceSubTotal850px">
                  <span><b>Zwischensumme</b></span>     
                  <span>${subTotal} €</span>
               </div>
               <div>
                  <div id="deliverCostSection" class="addFoodSectionPriceTotal850px">
                     <div id="deliverCost850px">Lieferkosten</div>
                     <div><span>1,99 €</span></div>
                  </div>
               </div>
               <div>
                  <div class="addFoodSectionPriceTotal850px">
                     <span>Gesamtsumme</span>
                     <span>${total} €</span>
                  </div>
               </div>
               <div class="orderButtonSection850px">
                  <div>
                     <button  onclick="order()" class="addFoodSectionButton"><b>Bezahlen ${total} €</b></button> 
                  </div> 
               </div>
               `;
      }
   }
   else{
      for(let i = 0; i < amounts.length; i++){
         let subTotal = calculateSubTotal();
            document.getElementById('priceSection850px').innerHTML = `
               <div class="addFoodSectionPriceSubTotal850px">
                  <span ><b>Zwischensumme</b></span>     
                  <span>${subTotal} €</span>
               </div>
               <div>
                  <div class="addFoodSectionPriceTotal850px">
                     <span >Gesamtsumme</span>
                     <span>${subTotal} €</span>
                  </div>
               </div>
               <div class="orderButtonSection850px">
               <div>
                  <button id="orderButton" onclick="order(${i})" class="addFoodSectionButton"><b>Bezahlen ${subTotal} €</b></button> 
               </div> 
               </div>
               `;
      }
   }  
   loadRightLanguage();
}


function addBasket(foodIndex){
   let index = basket.indexOf(burgers[foodIndex].foodName);
   if(index == -1){
      basket.push(burgers[foodIndex]['foodName']);
      prices.push(burgers[foodIndex]['foodPrice']);
      amounts.push(1);
      document.getElementById('basket850pxButton').classList.remove('d-none');
   } 
   else{
      amounts[index]++;
   }
      document.getElementById('rightContainerImgSection').classList.remove("rightContainerImgSection");
      renderBasket();
      renderBasket850px();    
}



function renderBasket(){
   let sum = 0;
   document.getElementById('rightContainerImgSection').innerHTML = '';
   for(let i = 0; i < basket.length; i++){
      const food = basket[i];
      const price = prices[i];
      const amount = amounts[i];
      sum = 0;
      sum += amount * price;

      document.getElementById('rightContainerImgSection').innerHTML += `
         <div class="addFoodHeadSection">
            <div>
               <span id="orderAmount"><b>${amount}</b></span>
            </div>
            <div>
               <span id="orderFood" class="addFoodSpan"><b>${food}</b></span>
            </div>
            <div id="orderPrice">
               <span>${sum} €</span>
            </div>
         </div>
         <div class="addFoodButtonContainer">
            <button onclick="minusButton(${i})" class="addFoodButton">-</button>
            <span id="orderSizeCount">${amount}</span>
            <button onclick="plusButton(${i})" class="addFoodButton">+</button>
         </div>
         <div class="basketDistance"></div>
         `;
   }
   loadPriceSection();
   loadRightLanguage();
}


function calculateSubTotal() {
   let subTotal = 0;
   
   for (let i = 0; i < amounts.length; i++) {
     const amount = amounts[i];
     const price = prices[i];
 
     subTotal += amount * price;
     
   }
   return subTotal;
}

function calculateTotal(){
   let total = 0;
   for (let i = 0; i < amounts.length; i++) {
      const amount = amounts[i];
      const price = prices[i];

      total += amount * price;
   }
   if(amounts.length >= 0 ){
      total += 1.99;
   }
   return total;
}




function loadPriceSection(){
   const idDeliver = document.getElementById('deliverButton');
   if(idDeliver.textContent = idDeliver.classList.contains("clickedDeliverButton")){
      for(let i = 0; i < amounts.length; i++){
         let subTotal = calculateSubTotal();
         let total = calculateTotal();
            document.getElementById('priceSection').innerHTML = `
               <div class="addFoodSectionPriceSubTotal">
                  <span id="subtotal"><b></b></span>     
                  <span>${subTotal} €</span>
               </div>
               <div>
                  <div id="deliverCostSection" class="addFoodSectionPriceTotal">
                     <div id="deliverCost"></div>
                     <div><span>1,99 €</span></div>
                  </div>
               </div>
               <div>
                  <div class="addFoodSectionPriceTotal">
                     <span id="total"></span>
                     <span>${total} €</span>
                  </div>
               </div>
               <div>
                  <button id="orderButton" onclick="order()" class="addFoodSectionButton"><b>Bezahlen ${total} €</b></button> 
               </div> 
               `;
      }
   }
   else{
      for(let i = 0; i < amounts.length; i++){
         let subTotal = calculateSubTotal();
            document.getElementById('priceSection').innerHTML = `
               <div class="addFoodSectionPriceSubTotal">
                  <span id="subtotal"><b></b></span>     
                  <span>${subTotal} €</span>
               </div>
               <div>
                  <div class="addFoodSectionPriceTotal">
                     <span id="total"></span>
                     <span>${subTotal} €</span>
                  </div>
               </div>
               <div>
                  <button id="orderButton" onclick="order(${i})" class="addFoodSectionButton"><b>Bezahlen ${subTotal} €</b></button> 
               </div> 
               `;
      }
   }  
   loadRightLanguage();
}


function order(total){
  if(total <= 20){
   document.getElementById('orderButton').classList.add('d-none');
  }
}


function basket850px(){ 
   document.getElementById('basket850pxButton').classList.add('d-none'); 
}
