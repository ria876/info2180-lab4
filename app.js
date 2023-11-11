//Pleae note the live server extension was used to run this code
window.onload= function(){
    let search = document.getElementsByClassName("button")[0];
    let searchBar = document.getElementById("searchbar");
    let results = document.getElementById('results');
    let heroinfo = document.getElementById('hero');
    //console.log("JavaScript file is loaded");
    search.addEventListener("click", clickHandler);

    function clickHandler(event){
        event.preventDefault();
        //console.log("Search button is clicked");
        let xhttp = new XMLHttpRequest();
        
        xhttp.onreadystatechange = function() {
            //console.log("Ready state: " + this.readyState + ", Status: " + this.status);
            results.style.display='block';
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                //console.log("Response: " + this.responseText);
                heroinfo.innerHTML = xhttp.responseText;
             }else{
                 console.log('Error Code: ' + xhttp.status);
                 console.log('Error Message: ' + xhttp.statusText);
             }
        };
        xhttp.open("GET", "http://localhost/info2180-lab4/superheroes.php?query=" + searchBar.value.trim(), true);
        xhttp.send();
    }
 }
       


