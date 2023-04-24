function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

//Vi kan løse filtersystemet for mobil ved hjelp av bare èn knapp. Vi kan vise filteret når knappen trykkes
// og endre teksten på knappen ved hjelp av en if/else.

//Vi kan kombinere disse to løsningene under.

//Denne gjør så vi kan endre tekst.

function Filter( el ) {
    if ( el.value === "Endre Filter" )
        el.value = "Lukk";
    else
        el.value = "Endre Filter";
    if (document.getElementById("myFilter").style.display === "block") {
      document.getElementById("myFilter").style.display = "none";
    } 
    else {
      document.getElementById("myFilter").style.display = "block";
    }
}

function search_product() {
  let input = document.getElementById('searchbar').value
  input=input.toLowerCase();
  let x = document.getElementsByClassName('produkt');
    
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="none";
      }
      else {
          x[i].style.display="block";                 
      }
  }
}