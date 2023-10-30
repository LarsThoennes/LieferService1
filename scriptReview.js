function review() {
  document.getElementById("popUpBackground").classList.remove("d-none");
  document.body.classList.add("bodyPopUp");
}

function closeReview() {
  document.getElementById("popUpBackground").classList.add("d-none");
  document.body.classList.remove("bodyPopUp");
}

function openBasket() {
  if (amounts.length <= 0) {
    document.getElementById("basketButton").classList.add("d-none");
    alert("der Warenkorb ist leer");
  } else {
    document.getElementById("popUpBasketBackground").classList.remove("d-none");
    document.getElementById("basketButton").classList.add("d-none");
    document.body.classList.add("bodyPopUp");
  }
}

function closeBasket() {
  document.getElementById("popUpBasketBackground").classList.add("d-none");
  document.getElementById("basketButton").classList.remove("d-none");
  document.body.classList.remove("bodyPopUp");
}

function popUpReview() {
  document.getElementById("showReview").classList.add("d-none");
  document.getElementById("sendReview").classList.remove("d-none");
  document.getElementById("popUpNewReview").innerHTML = "";
  document.getElementById("popUpReviews").innerHTML = "";
  for (let i = 0; i < reviews.length; i++) {
    let review = reviews[i];
    document.getElementById("popUpReviews").innerHTML += `
    <div class="reviewOutline">
        <div class="reviewHeadline">
          <h1>${review["reviewName"]}</h1>
        </div>
        <div class="reviewStarCount">
            
            <div class="reviewStarCountChildren">
             
              <img src="${review["reviewStar"]}">
            </div>
            <span class="reviewText"><b>${review["reviewText"]}</b></span>
        </div>
    </div>
    `;
  }
}

function popUpLoadNewReview() {
  document.getElementById("showReview").classList.remove("d-none");
  document.getElementById("sendReview").classList.add("d-none");
  document.getElementById("popUpReviews").innerHTML = "";
  document.getElementById("popUpNewReview").innerHTML = "";
  for (let i = 0; i < 1; i++) {
    document.getElementById("popUpNewReview").innerHTML += `
<div class="reviewOutline">
    <div class="reviewNameInputSection">
        <input id="commentator${i}" class="reviewNameInput" placeholder="Name eingeben">
    </div>
    <div class="reviewStarCountFood">
        
       
    </div>
    <div class="reviewStarCountDeliver">
       
        <div class="reviewStarButtonSection">
            <button onclick="reviewStar1('1')" id="star1" class="fa fa-star reviewStarButton"></button>
            <button onclick="reviewStar2('2')" id="star2" class="fa fa-star reviewStarButton"></button>
            <button onclick="reviewStar3('3')" id="star3" class="fa fa-star reviewStarButton"></button>
            <button onclick="reviewStar4('4')" id="star4" class="fa fa-star reviewStarButton"></button>
            <button onclick="reviewStar5('5')" id="star5" class="fa fa-star reviewStarButton"></button>
        </div>
    </div>
    <div class="reviewtextInputSection">
        <input id="comment${i}" class="reviewtextInput" placeholder="Text einfügen">
    </div>
</div>
<div class="postReviewSection">
    <button onclick="postReview(${i}, ${i})" id="postReviewButton" class="postReview">Bewertung Abschicken</button>
</div>

      `;
  }
}

function postReview(commentIndex, commentatorIndex) {
  let star1 = "img/reviews/1StarReview.png";
  let star2 = "img/reviews/2StarReview.png";
  let star3 = "img/reviews/3StarReview.png";
  let star4 = "img/reviews/4StarReview.png";
  let star5 = "img/reviews/5StarReview.png";

  let name = document.getElementById(`commentator${commentatorIndex}`).value;
  let text = document.getElementById(`comment${commentIndex}`).value;

  if (amountStar == 5) {
    let newReview = {
      reviewStar: star5,
      reviewName: name,
      reviewText: text,
    };
    reviews.unshift(newReview);
  }
  if (amountStar == 4) {
    let newReview = {
      reviewStar: star4,
      reviewName: name,
      reviewText: text,
    };
    reviews.unshift(newReview);
  }
  if (amountStar == 3) {
    let newReview = {
      reviewStar: star3,
      reviewName: name,
      reviewText: text,
    };
    reviews.unshift(newReview);
  }
  if (amountStar == 2) {
    let newReview = {
      reviewStar: star2,
      reviewName: name,
      reviewText: text,
    };
    reviews.unshift(newReview);
  }
  if (amountStar == 1) {
    let newReview = {
      reviewStar: star1,
      reviewName: name,
      reviewText: text,
    };
    reviews.unshift(newReview);
  }
  popUpLoadNewReview();
}

function reviewStar1(clickedStar) {
  document.getElementById("star1").classList.add("checked");
  document.getElementById("star2").classList.remove("checked");
  document.getElementById("star3").classList.remove("checked");
  document.getElementById("star4").classList.remove("checked");
  document.getElementById("star5").classList.remove("checked");

  amountStar = 1;
}

function reviewStar2(clickedStar) {
  document.getElementById("star1").classList.add("checked");
  document.getElementById("star2").classList.add("checked");
  document.getElementById("star3").classList.remove("checked");
  document.getElementById("star4").classList.remove("checked");
  document.getElementById("star5").classList.remove("checked");

  amountStar = 2;
}

function reviewStar3(clickedStar) {
  document.getElementById("star1").classList.add("checked");
  document.getElementById("star2").classList.add("checked");
  document.getElementById("star3").classList.add("checked");
  document.getElementById("star4").classList.remove("checked");
  document.getElementById("star5").classList.remove("checked");

  amountStar = 3;
}

function reviewStar4(clickedStar) {
  document.getElementById("star1").classList.add("checked");
  document.getElementById("star2").classList.add("checked");
  document.getElementById("star3").classList.add("checked");
  document.getElementById("star4").classList.add("checked");
  document.getElementById("star5").classList.remove("checked");

  amountStar = 4;
}

function reviewStar5(clickedStar) {
  document.getElementById("star1").classList.add("checked");
  document.getElementById("star2").classList.add("checked");
  document.getElementById("star3").classList.add("checked");
  document.getElementById("star4").classList.add("checked");
  document.getElementById("star5").classList.add("checked");

  amountStar = 5;
}
