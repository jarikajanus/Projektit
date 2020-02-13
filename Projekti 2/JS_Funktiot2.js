   /* Palautemerkkien lukumäärän tarkastus ja näyttäminen */
function Tarkistamerkit(form) {
var maxpit=500;
var Teksti=form.kehitys.value;
var Merkkejayhteensa=Teksti.length;
form.Merkkejajaljella.value=maxpit-Merkkejayhteensa;
}

  /* email -osoitteen tarkastus, osa 1 */
function emailIsValid(email) 
{
   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

/* varsinaisen lomakkeen tarkastus */
function Laheta(form)
{
  /* Nimen tarkistus */
  var nimi = form.nimi.value;
  if(nimi.length<3)
  {
    alert("Et antanut nimeäsi tai se on liian lyhyt (min. 3 kirjainta)!");
    form.nimi.focus();
    return false;
  }

  /* Sähköpostin tarkastus */
  if(form.email.value.indexOf('@', 0) == -1)
	{
    alert("Et antanut sähköpostiosoitettasi tai se on virheellinen!");
    form.email.focus();
    return false;
	}

  /* Iän tarkastus */
  var maksimi = document.getElementById("ika").max;
  var minimi = document.getElementById("ika").min;
  var tulos = form.ika.value;
  var n_ulos = "Ikäsi ei ole välillä " + minimi + " ja " + maksimi + ". Yritä uudelleen";
  /*var ulos = "Antamasi arvo = " + tulos;*/
  /*alert(ulos);*/
  /*alert(n_ulos);*/
  if(tulos < minimi || tulos > maksimi) {
      alert(n_ulos); 
      form.ika.focus();
      return false;
  }
  /* Ikäryhmän tarkastus */
  var ika = -1;
  for(i =6; i<=9; i++) {
    var ika2 = document.getElementById(i).selected;
    if(ika2) ika = i;
  }
  if(ika==-1) {
    alert("Et ole valinnut mitään! Kai kuulut johonkin ikäryhmään...");
    return false; 
  }

  /* Suosittelun tarkastus */
  var tarkastaRadio = document.querySelector('input[name="suosittelu"]:checked'); 
  if(tarkastaRadio == null) { 
    alert('Suosittelutieto puuttuu!');
    return false;
  }

  /* Parasta -valinnan tarkastus */
  var vr1 = document.getElementById("amma");
  var vr2 = document.getElementById("yto");
  var vr3 = document.getElementById("ruoka");
  if (!vr1.checked && !vr2.checked && !vr3.checked) {
    alert("Kai Keudassa on nyt edes jotakin parasta!!");
    return false;
  }

  /* Lempiaineen tarkastus */
  var valittu = -1;
  for(i = 1; i<=4; i++) {
    var valittu2 = document.getElementById(i).selected;
    if(valittu2) valittu = i;
  }
  if(valittu==-1) {
    alert("Et ole valinnut mitään! Kai jokin aine on mieluinen...");
    return false; 
  }

/* kehitysidean tarkastus */
var kehitys = form.kehitys.value;
  if(kehitys.length<15)
  {
    alert("Et jakanut kehitysideaasi (min. 15 kirjainta)!");
    form.nimi.focus();
    return false;
  } 








}