function deliver() {
  const idDelivery = document.getElementById("deliverCostSection");

  document.getElementById("deliverButton850px").classList.add("clickedDeliverButton");
  document.getElementById("deliverButton850px").classList.remove("deliverButtonColor");
  document.getElementById("pickUpButton850px").classList.remove("clickedDeliverButton");
  document.getElementById("deliverButton").classList.add("clickedDeliverButton");
  document.getElementById("deliverButton").classList.remove("deliverButtonColor");

  document.getElementById("pickUpButton").classList.remove("clickedDeliverButton");
  document.getElementById("orderInformationDeliver").classList.remove("d-none");
  document.getElementById("orderInformationPickUp").classList.add("d-none");
  if (document.getElementById("deliverCostSection")) {
    document.getElementById("deliverCostSection").classList.remove("d-none");
    loadPriceSection();
  }
}

function pickUp() {
  document.getElementById("pickUpButton850px").classList.add("clickedDeliverButton");
  document.getElementById("pickUpButton850px").classList.remove("deliverButtonColor");
  document.getElementById("deliverButton850px").classList.remove("clickedDeliverButton");

  document.getElementById("pickUpButton").classList.add("clickedDeliverButton");
  document.getElementById("pickUpButton").classList.remove("deliverButtonColor");
  document.getElementById("deliverButton").classList.remove("clickedDeliverButton");
  document.getElementById("orderInformationDeliver").classList.add("d-none");

  document.getElementById("orderInformationPickUp").classList.remove("d-none");
  if (document.getElementById("deliverCostSection")) {
      document.getElementById("deliverCostSection").classList.add("d-none");
      loadPriceSection();
  }
}
