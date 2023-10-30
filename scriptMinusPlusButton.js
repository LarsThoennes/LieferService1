function minusButton(positionIndex) {
  if (amounts[positionIndex] > 1) {
    amounts[positionIndex]--;
    renderBasket();
    renderBasket850px();
    loadRightLanguage();
  } else if (amounts[positionIndex] <= 1) {
    basket.splice([positionIndex], 1);
    prices.splice([positionIndex], 1);
    amounts.splice([positionIndex], 1);
    renderBasket();
    renderBasket850px();
    loadRightLanguage();
  }
  if (amounts < 1) {
    document.getElementById("rightContainerImgSection").innerHTML = "";
    document.getElementById("priceSection").innerHTML = "";
    loadEmptybasket();
    loadEmptybasket850px();
    loadRightLanguage();
  }
}


function plusButton(positionIndex) {
  amounts[positionIndex]++;
  loadRightLanguage();
  renderBasket();
  renderBasket850px();
}
