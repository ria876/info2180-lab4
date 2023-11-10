//Pleae note the live server extension was used to run this code
window.onload= function(){
    let search = document.getElementsByClassName("button")[0];

    search.addEventListener("click", clickHandler);

    function clickHandler(){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                
                alert(xhttp.responseText);
            }
        };
        xhttp.open("GET", "superheroes.php", true);
        xhttp.send();
    }
}


