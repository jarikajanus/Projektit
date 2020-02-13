
/* Palautemerkkien lukumäärän tarkastus ja näyttäminen */
function Tarkistamerkit(form) {
  var maxpit=500;
  var Teksti=form.kehitys.value;
  var Merkkejayhteensa=Teksti.length;
  form.Merkkejajaljella.value=maxpit-Merkkejayhteensa;
}

/* email -osoitteen tarkastus, osa 1 
function emailIsValid (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

/*Lomakkeen kenttien varsinainen tarkistus

/* Lähetä -painikkeen tila
function Laheta(form)
{

  /* nimi -kentän sisällön tarkistus 
  var nimi=form.nimi.value;
  if(nimi.length<5)
  {
  alert("Et antanut nimeäsi!");
  form.nimi.focus();
  return false;
  }

  /* email -kentän sisällön oikeellisuden tarkastus osa 2
  if(emailIsValid(sahkoposti))
  {
    //
  }
  else{
    alert("Anna oikea sähköpostiosoitteesi");
    lomake.email.focus();
    return (false);
  }

/* Ikä -kentän tarkastus 
var Vuodet=number(form.ika.value);
if(!IsNan(Vuodet)) {
    var maksimi = document.getElementById("ika").max;
    var minimi = document.getElementById("ika").min;
    if(Vuodet.value < minimi || Vuodet.value > maksimi) {
        alert("Ikäsi ei ole välillä " . minimi . " ja " . maksimi . ". Yritä uudelleen!"); 
        form.ika.focus();
        return false;
    }
}
else {
    alert("Antamasi arvo ei ole numero. Yritä uudelleen!");
    form.ika.focus();
    return false;
}

/* Ryhmätiedon tarkastus 
var RyhmaValinta = form.pudotus.value;
if(RyhmaValinta.selectedIndex =="") {
    alert("Et ole valinnut mitään!");
    form.pudotus.focus();
    return false; 
}

/* Suosittelun tarkastus 

var tarkastaRadio = document.querySelector('input[name="suosittelu"]:checked'); 
if(tarkastaRadio == null) { 
  alert('Suosittelutieto puuttuu!'); 
}

/* Parasta -valinnan tarkastus 
var valintaRuutu = document.getElementById("rastitus");  
if (!valintaRuutu.checked) {
  alert("Valitse nyt edes jotakin!!");
}

/* syötetyn tekstin tarkastus 

if(Teksti.length>1000)
{
alert("Palaute-tekstin pituus on rajattu 1000 merkkiin!");
form.Teksti.focus();
return false;
}

}
