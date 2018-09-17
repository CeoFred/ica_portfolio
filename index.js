function Opennav() {
    var  Element = document.getElementById('mySidebar');
    let Style = Element.style.display = "none";
    if (Style) {
        document.getElementById("mySidebar").style.display = "block";
    }else{
        var Element = document.getElementById('mySidebar');
        Element.style.display = "inline";
    }
}
