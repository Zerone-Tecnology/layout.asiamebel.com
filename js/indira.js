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