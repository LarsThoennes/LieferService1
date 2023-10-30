function like(){
    document.getElementById('unliked').classList.add("d-none");
    document.getElementById('liked').classList.remove("d-none");  
  }
  
  
  function dislike(){
    document.getElementById('unliked').classList.remove("d-none");
    document.getElementById('liked').classList.add("d-none");
  }