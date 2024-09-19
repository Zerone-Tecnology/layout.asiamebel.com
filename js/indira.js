$('#btn-details').on('click', function(){
    $('#popupDetail').addClass('active');
})
$('.btn-popup-close').on('click', function(){
    $('#popupDetail').removeClass('active');
})

$('#btn-reviews').on('click', function(){
    $('#popupReviews').addClass('active');
})
$('.btn-popup-close').on('click', function(){
    $('#popupReviews').removeClass('active');
})

function Selected(a) {
    var label = a.value;
    if (label == 1) {
        document.getElementById("Block1").style.display='none';
    } else if (label == 2) {
        document.getElementById("Block1").style.display='block';
       
    } else {
        
        document.getElementById("Block1").style.display='none';
    }
     
}

function Section(a) {
    var label = a.value;
    if (label == 1) {
        document.getElementById("Block1").style.display='none';
    } else if (label == 2) {
        document.getElementById("Block1").style.display='block';
       
    } else {
        
        document.getElementById("Block1").style.display='none';
    }
     
}

$(document).ready(function () {
    $(".second_div").hide();
         $(".btn1").click(function () {
            $(".second_div").hide();
            $(".first_div").show()
         });
       $(".btn2").click(function () {
            $(".first_div").hide();
            $(".second_div").show()
     });
  });


  var acc = document.getElementsByClassName("accordion");
          var i;
          
          for (i = 0; i < acc.length; i++) {
              acc[i].addEventListener("click", function() {
                  this.classList.toggle("active");
                  var panel = this.nextElementSibling;
                  if (panel.style.display === "block") {
                      panel.style.display = "none";
                  } else {
                      panel.style.display = "block";
                  }
              });
          }
  