function loadEmptybasket(){
   document.getElementById('priceSection').innerHTML = '';
   document.getElementById('rightContainerImgSection').classList.add("rightContainerImgSection");
   document.getElementById('rightContainerImgSection').innerHTML += `
      <div id="rightContainerImgDiv" class="rightContainerImgDiv">
         <img class="rightContainerImg" src="img/Logos/shoppingBag.png">
      </div>
      <div id="basketh1Div">
         <h1 id="basketh1" class="basketh1"><b>Fülle deinen Warenkorb</b></h1>
      </div>
      <div id="rightContainerTextDiv" class="rightContainerText">
         <span id="rightContainerText">Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle dein Essen.</span>
      </div>
      `;
}


function loadEmptybasket850px(){
   document.getElementById('priceSection850px').innerHTML = '';
   document.getElementById('basket850pxButton').classList.add('d-none');
   closeBasket();
}