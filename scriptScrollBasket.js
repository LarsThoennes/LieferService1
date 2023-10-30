window.onscroll = function(){
    let shoppingBasket = document.getElementById('rightContainer');
    if(window.scrollY > 50){
        shoppingBasket.style = 'top: 0px';
    } else{
        shoppingBasket.style = 'top: 100px';
    }  
}

window.onscroll = function (){
    let shoppingBasket = document.getElementById('basketSection850px');
    if(window.scrollY > 600){
        shoppingBasket.style = 'bottom: 120px';
    } else{
        shoppingBasket.style = 'bottom: 10px';
    } 
}