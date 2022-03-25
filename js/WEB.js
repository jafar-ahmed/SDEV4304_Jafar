var myIndexImage = 0;
changeImage();
function changeImage() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndexImage++;
    if (myIndexImage > x.length) { myIndexImage = 1 }
    x[myIndexImage - 1].style.display = "block";
    setTimeout(changeImage, 5000);
}
/////////////////////////
$(document).scroll(function(){
  var height = $(".navbar").height();

  if( $(this).scrollTop() > height){
    $(".navbar").css("background-color","rgb(153, 23, 25)");
  }else{
    $(".navbar").css("background-color","#232426");
  }

});