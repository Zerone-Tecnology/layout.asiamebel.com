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