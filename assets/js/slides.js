var slideIndex[5] = [1,1,1,1,1];
showDivs(slideIndex);

function plusDivs(n, name) {
    showDivs(slideIndex += n, name);
}

function showDivs(n, name) {
    var i;
    var x = document.getElementsByClassName("mySlides"++name);
    if (n > x.length) {slideIndex[name] = 1}
    if (n < 1) {slideIndex[name] = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex[name]-1].style.display = "block";
}
