function myFunction() {
    var abv = parseInt(document.getElementById("abvanille").value);
    var abb = parseInt(document.getElementById("abbanaan").value);
    var aba = parseInt(document.getElementById("abaardbei").value);
    var abc = parseInt(document.getElementById("abchocolad").value);
    var toTal = abv + abb + aba + abc;
    if (toTal > 3) {
      alert(toTal + " is total , more than 3 is impossible");
    } else if (toTal < 1) {
      alert(toTal + " is total , less than 1 is impossible");
    }
    document.getElementById("abtotaal").value = toTal;
  
    //alert(" = degisti. yeni deger su oldu: " + toTal);
}