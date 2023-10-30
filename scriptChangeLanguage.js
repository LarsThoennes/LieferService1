function changeLanguageEng() {
   document.getElementById("germanLanguage").classList.add("d-none");
   document.getElementById("englishLanguage").classList.remove("d-none");
 
   document.getElementById("orderCard").innerHTML = "<b>Menu</b>";
   document.getElementById("review").innerHTML = "6.2 Reviews";
   document.getElementById("informationText").innerHTML = "You can collect stamps at this restaurant. When completing your order, please make sure that you </br> You have signed up for our newsletter to receive your stamps by email.";
   document.getElementById("rightConatinerHeadline").innerHTML = "Basket";
   document.getElementById("deliverButton").innerHTML = "<b>Delivery</b><br>30-55 min";
   document.getElementById("pickUpButton").innerHTML = "<b>Pickup</b><br>15 min";
   document.getElementById("popUpHeadline").innerHTML = "Reviews";
   document.getElementById("popUpMainSectionHeadline").innerHTML = "General reviews";
   document.getElementById("PopUpSpan1").innerHTML = "from 6,311 reviews";
   document.getElementById("PopUpSpan2").innerHTML = "All reviews come from Lieferando.de customers who have ordered from Best Burgers - American Diner.";
   document.getElementById("sendReview").innerHTML = "Write review";
   document.getElementById("showReview").innerHTML = "View reviews";
   document.getElementById("pickUpButton850px").innerHTML = "<b>Pick Up</b> <br> 15 min";
   document.getElementById("deliverButton850px").innerHTML = "<b>Delivery</b> <br> 30-35 min";
   document.getElementById("basketButton850px").innerHTML = "<h1>Basket</h1>";
 
   if (document.getElementById("total")) {
     document.getElementById("subtotal").innerHTML = "<b>Subtotal</b>";
     document.getElementById("total").innerHTML = "Total";
   }
   if (document.getElementById("deliverCost")) {
     document.getElementById("deliverCost").innerHTML = "Deliver Costs";
   }
   if (document.getElementById("basketh1")) {
     document.getElementById("basketh1").innerHTML = "Fill your shopping cart";
     document.getElementById("rightContainerText").innerHTML ="Add some delicious dishes from the menu and order your food.";
   }
 }
 
 function changeLanguageGer() {
   document.getElementById("germanLanguage").classList.remove("d-none");
   document.getElementById("englishLanguage").classList.add("d-none");
 
   document.getElementById("orderCard").innerHTML = "<b>Speisekarte</b>";
   document.getElementById("review").innerHTML = "6.2 Bewertungen";
   document.getElementById("informationText").innerHTML = "Bei diesem Restaurant kannst du Stempel sammeln. Stelle beim Bestellabschluss bitte sicher, dass du </br> dich für unseren Newsletter angemeldet hast, um deine Stempel per E-Mail zu erhalten.";
   document.getElementById("rightConatinerHeadline").innerHTML = "Warenkorb";
   document.getElementById("deliverButton").innerHTML = "<b>Lieferung</b><br>30-55 min";
   document.getElementById("pickUpButton").innerHTML = "<b>Abholung</b><br>15 min";
   document.getElementById("popUpHeadline").innerHTML = "Bewertungen";
   document.getElementById("popUpMainSectionHeadline").innerHTML ="Allgemeine Bewertungen";
   document.getElementById("PopUpSpan1").innerHTML = "von 6.311 Bewertungen";
   document.getElementById("PopUpSpan2").innerHTML = "Alle Bewertungen stammen von Lieferando.de Kunden, die bei Best Burgers - American Diner bestellt haben.";
   document.getElementById("sendReview").innerHTML = "Bewertung abgeben";
   document.getElementById("showReview").innerHTML = "Bewertungen ansehen";
   document.getElementById("pickUpButton850px").innerHTML ="<b>Abholung</b> <br> 15 min";
   document.getElementById("deliverButton850px").innerHTML ="<b>Lieferung</b> <br> 30-35 min";
   document.getElementById("basketButton850px").innerHTML = "<h1>Warenkorb</h1>";
 
   if (document.getElementById("total")) {
       document.getElementById("subtotal").innerHTML = "<b>Zwischensumme</b>";
       document.getElementById("total").innerHTML = "Gesamtsumme";

      if (document.getElementById("deliverCost")) {
          document.getElementById("deliverCost").innerHTML = "Lieferkosten";
      }
   }
   if (document.getElementById("basketh1")) {
       document.getElementById("basketh1").innerHTML = "Fülle deinen Warenkorb";
       document.getElementById("rightContainerText").innerHTML = "Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle dein Essen.";
   }
 }
 
 function loadRightLanguage() {
   const idGermanLanguage = document.getElementById("germanLanguage");
   if ((idGermanLanguage.textContent =idGermanLanguage.classList.contains("d-none"))) {
     changeLanguageEng();
     document.getElementById("germanLanguage").innerHTML = "";
     document.getElementById("germanLanguage").innerHTML += '<img  class="languageImg" src="img/Sprachen/german.png">';
   }
   else {
     changeLanguageGer();
     document.getElementById("germanLanguage").innerHTML = "";
     document.getElementById("germanLanguage").innerHTML += '<img  class="languageImg" src="img/Sprachen/german.png">';
   }
 }
 
 function changeLanguageEngSidePage() {
   document.getElementById("germanLanguage").classList.add("d-none");
   document.getElementById("englishLanguage").classList.remove("d-none");
 
   document.getElementById("linkOpeningHours").innerHTML = "Opening Times";
   document.getElementById("table1").innerHTML = "Monday";
   document.getElementById("table2").innerHTML = "Tuesday";
   document.getElementById("table3").innerHTML = "Wednesday";
   document.getElementById("table4").innerHTML = "Thursday";
   document.getElementById("table5").innerHTML = "Friday";
   document.getElementById("table6").innerHTML = "Saturday";
   document.getElementById("table7").innerHTML = "Sunday";
   document.getElementById("openingTimes").innerHTML = "CLOSED";
   document.getElementById("linkDirections").innerHTML = "Direction";
   document.getElementById("directionsSpan").innerHTML = "Our address is <b>Reisholzer Str. 23, 40231 Düsseldorf</b>";
 }
 
 function changeLanguageGerSidePage() {
   document.getElementById("germanLanguage").classList.remove("d-none");
   document.getElementById("englishLanguage").classList.add("d-none");
 
   document.getElementById("linkOpeningHours").innerHTML = "Öffnungszeiten";
   document.getElementById("table1").innerHTML = "Montag";
   document.getElementById("table2").innerHTML = "Dienstag";
   document.getElementById("table3").innerHTML = "Mittwoch";
   document.getElementById("table4").innerHTML = "Donnerstag";
   document.getElementById("table5").innerHTML = "Freitag";
   document.getElementById("table6").innerHTML = "Samstag";
   document.getElementById("table7").innerHTML = "Sonntag";
   document.getElementById("openingTimes").innerHTML = "Geschlossen";
   document.getElementById("linkDirections").innerHTML = "Anfahrt";
   document.getElementById("directionsSpan").innerHTML = "Unsere Adresse lautet <b>Reisholzer Str. 23, 40231 Düsseldorf</b>";
 }
 