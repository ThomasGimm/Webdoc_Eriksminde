// Funktion som indsætter Thores content når siden loader
window.onload = function () {
  thoreFunction();


}

// Funktion som kun viser header indtil der klikkes på linket, hvorefter main ændres vra none til block
function velkommen() {

  document.getElementById("header").style.display = "none";
  document.getElementById("main").style.display = "block";

}

// Funktion som sætter stemningsvideoen på pause, når den ikke er i billedet
scrollStemning = function () {
  if (document.getElementById("stemningsvideo").getBoundingClientRect().bottom < 350 || document.getElementById("stemningsvideo").getBoundingClientRect().top > 100)
    document.getElementById("stemningsvideo").pause();
  else
    document.getElementById("stemningsvideo").play();
  document.getElementById("stemningsvideo").loop = true;
}

// Funktion som pauser Thores interview video, når videoen er udenfor vinduet
scrollThore = function () {
  if (document.getElementById("interviewThore").getBoundingClientRect().bottom < -20 || document.getElementById("interviewThore").getBoundingClientRect().top > 850)
    document.getElementById("interviewThore").pause();
  else
    document.getElementById("interviewThore").play();
  document.getElementById("interviewThore").loop = true;
}

// Funktion som pauser Franciscas interview video, når videoen er udenfor vinduet
scrollFran = function () {
  if (document.getElementById("interviewFran").getBoundingClientRect().bottom < -20 || document.getElementById("interviewFran").getBoundingClientRect().top > 850)
    document.getElementById("interviewFran").pause();
  else
    document.getElementById("interviewFran").play();
  document.getElementById("interviewFran").loop = true;
}

function navneskilt() {
  if (document.getElementById("interviewThore").getBoundingClientRect().bottom < 50) 
    document.getElementById("navneskilt").style.display = "block";
    else
    document.getElementById("navneskilt").style.display = "none";
  
}

// Funktion som starter andre scroll funktioner, som gør at videoerne starter
window.onscroll = function () {
  scrollStemning();
  scrollThore();
  scrollFran();
navneskilt();
}



//THORE INTERVIEW
{
  // Variabel som gemmer tiden på videoen når musen fjernes fra interviewet
  var videoTimerThore = 0;

  // Funktion som sker når man hover over Thores video
  function playInterviewThore() {
    // Frans video udskiftes til ventevideoen
    document.getElementById("interviewFran").src = "video/vente-francisca.mp4";
    // Sætter Frans ventevideo til at loope
    document.getElementById("interviewFran").loop = true;
    // Sæt Frans ventevideo til at spille
    document.getElementById("interviewFran").play();

    // Ændre Thores video til interview videoen
    document.getElementById("interviewThore").src = "video/interview_thore.mp4";
    // Brug tiden, som blev gemt i variablen videoTimerThore
    document.getElementById("interviewThore").currentTime = videoTimerThore;
    // Fjern loop fra interview videoen
    document.getElementById("interviewThore").loop = false;
    // Sæt Thores video til at afspilde
    document.getElementById("interviewThore").play();


  }

  // Funktion som sker når musen fjernes fra Thores video
  function pauseInterviewThore() {

    //Inden videoen skiftes så tildeler vi variablen videoTimerThore værdien for videoens tidspunkt
    // Denne variabel bruger vi når musen kommer ind over igen
    videoTimerThore = document.getElementById("interviewThore").currentTime;
    // Så spørger vi om videoens gemte tidspunkt er større ind eller lig med længden af filmen
    if (videoTimerThore >= document.getElementById("interviewThore").duration) {
      // Hvis ja, så sætter vi tiden til 0, så den starter forfra næste gang
      videoTimerThore = 0;
    }

    // Ændre Frans video tilbage til vælg mig fra vente
    document.getElementById("interviewFran").src = "video/vaelg-mig-francisca-kort.mp4";
    // Sætte Frans vælg mig video til at loope
    document.getElementById("interviewFran").loop = true;
    // Sætte Frans vælg mig video til at afspille
    document.getElementById("interviewFran").play();

    // Ændre Thores video tilbage til vælg mig videoen fra interviewet
    document.getElementById("interviewThore").src = "video/vaelg-mig-thore-kort.mp4";
    // Sætte Thores vælg mig video til at loope
    document.getElementById("interviewThore").loop = true;
    // Sætte Thores vælg mig video til at loope
    document.getElementById("interviewThore").play();


  }
}


//FRAN INTERVIEW
// Læs kommentarer for Thores interview!
{
  var videoTimerFran = 0;


  function playInterviewFran() {
    
    document.getElementById("interviewThore").src = "video/vente-thore.mp4"
    document.getElementById("interviewThore").loop = true;
    document.getElementById("interviewThore").play();

    document.getElementById("interviewFran").src = "video/interview-francisca.mp4";
    document.getElementById("interviewFran").currentTime = videoTimerFran;
    document.getElementById("interviewFran").loop = false;
    document.getElementById("interviewFran").play();

    
  }

  function pauseInterviewFran() {
    videoTimerFran = document.getElementById("interviewFran").currentTime;
    if (videoTimerFran >= document.getElementById("interviewFran").duration) {
      videoTimerFran = 0;
     
    }
    document.getElementById("interviewThore").src = "video/vaelg-mig-thore-kort.mp4"
    document.getElementById("interviewThore").loop = true;
    document.getElementById("interviewThore").play();

    document.getElementById("interviewFran").src = "video/vaelg-mig-francisca-kort.mp4";
    document.getElementById("interviewFran").loop = true;
    document.getElementById("interviewFran").play();


  }
}

// SKift af indhold ved klik på person (Thore)

function thoreFunction() {
 // Bestemmer navnet som følger ned langs siden
  document.getElementById("navneskilt").innerHTML = "Thore";
  // Ændre teksten i "sig ja" paragraphen
  document.getElementById("tekstJa").innerHTML = "<bold>&quot</bold> Jeg siger ja til alt! <bold>&quot</bold>";
  // Ændre teksten i valgfags paragraphen
  document.getElementById("tekstValgfag").innerHTML = "<bold>&quot</bold> Mit navn er Thore og jeg spiller elektronisk musik. Lo mollit anim id est laborum. <bold>&quot</bold>";
  // Ændre musik, alt efter valgfag
  document.getElementById('myaudio').src = 'audio/elektroniskmusik.mp3';
  // Skifte første valgfagsbillede
  document.getElementById("valgfag1").style.backgroundImage = "url(img/valgfag_analog.jpg)";
  // Skifte andet valgfagsbillede
  document.getElementById("valgfag2").style.backgroundImage = "url(img/valgfag_elektronisk_musik.png)";

  // Give vælg mig videoen en ramme (outline) når den er valgt (ved klik)
  document.getElementById("interviewThore").style.outline = "solid 1.5em #D8C11D";
  // Fjerne rammen fra Frans video
  document.getElementById("interviewFran").style.outline = "none";
}

// SKift af indhold ved klik på person (Francisca)
// Se kommentarer for Thore

function franFunction() {
  document.getElementById("navneskilt").innerHTML = "Francisca";
  document.getElementById("tekstJa").innerHTML = "Jeg Ikke ja til noget";
  document.getElementById("tekstValgfag").innerHTML = "Mit navn er Francisca og jeg siger ikke ja";
  document.getElementById('myaudio').src = 'audio/eriksminde_lyd.mp3';
  document.getElementById("valgfag1").style.backgroundImage = "url(img/valgfag_sts.png)";
  document.getElementById("valgfag2").style.backgroundImage = "url(img/valgfag_sts.png)";

  document.getElementById("interviewThore").style.outline = "none";
  document.getElementById("interviewFran").style.outline = "solid 1.5em #D8C11D";
}



// Lyde til valgfag

function PlaySound(myaudio) {
  var thissound = document.getElementById(myaudio);
  thissound.play();
}

function StopSound(myaudio) {
  var thissound = document.getElementById(myaudio);
  thissound.pause();
  thissound.currentTime = 0;
}

function myFunction() {
  // alert("Book en tid");

}