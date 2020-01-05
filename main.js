function myFunction() {
    let dots = document.getElementById("dots");
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
}


function myFunction2() {
  let dots = document.getElementById("dots2");
  let moreText = document.getElementById("more2");
  let btnText = document.getElementById("myBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}


// function addFeedback(){
//   var clientName_ = document.feedbackForm.username.value;
//   var clientAns_ = document.feedbackForm.userfeedback.value;
//   if(clientName_ == "" || clientAns_ == ""){
//       break;
//   }
//   else{
//       var mainBox = document.getElementById('messagecollection');
//       mainBox.innerHTML = "";
//       mainBox.innerHTML += '<div class="messageBox">'+'<h6>'+clientName_+'</h6>'+'<p>'+clientAns_+'</p>'+'</div>'
//   }
// }