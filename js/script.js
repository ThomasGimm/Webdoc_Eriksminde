// Alt det her er noget Maja har gang i!
// Afsnittet handler om at skifte interviewvideo og få den til at pause

//function myFunction() {
//alert("Klar til at høre om Eriksminde?");
//}

//ct = document.getElementById("interviewThore").currentTime;
window.onload = function () {
  thoreFunction();

}


function velkommen() {

  document.getElementById("header").style.display = "none";
  document.getElementById("main").style.display = "block";

}

scrollStemning = function () {
  if (document.getElementById("stemningsvideo").getBoundingClientRect().bottom < 350 || document.getElementById("stemningsvideo").getBoundingClientRect().top > 100)
    document.getElementById("stemningsvideo").pause();
  else
    document.getElementById("stemningsvideo").play();
  document.getElementById("stemningsvideo").loop = true;
}


scrollThore = function () {
  if (document.getElementById("interviewThore").getBoundingClientRect().bottom < -20 || document.getElementById("interviewThore").getBoundingClientRect().top > 850)
    document.getElementById("interviewThore").pause();
  else
    document.getElementById("interviewThore").play();
  document.getElementById("interviewThore").loop = true;
}

scrollFran = function () {
  if (document.getElementById("interviewFran").getBoundingClientRect().bottom < -20 || document.getElementById("interviewFran").getBoundingClientRect().top > 850)
    document.getElementById("interviewFran").pause();
  else
    document.getElementById("interviewFran").play();
  document.getElementById("interviewFran").loop = true;
}



window.onscroll = function () {
  /* if(document.getElementById("interviewThore").getBoundingClientRect().bottom < -20 || document.getElementById("interviewThore").getBoundingClientRect().top > 850)
      document.getElementById("interviewThore").pause();
    else
    document.getElementById("interviewThore").play();
    document.getElementById("interviewThore").loop = true; */
  scrollStemning();
  scrollThore();
  scrollFran();

}

function interviewTime() {
  var curTime = document.getElementById("interviewThore").currentTime;

  curTime = x.value;
  document.getElementById("interviewThore").addEventListener("mouseover", playInterviewThore);
}


//THORE INTERVIEW
{
  var videoTimerThore = 0;


  function playInterviewThore() {
    document.getElementById("interviewFran").src = "video/vente-francisca.mp4";
    document.getElementById("interviewFran").loop = true;
    document.getElementById("interviewFran").play();

    document.getElementById("interviewThore").src = "video/interview_thore.mp4";
    document.getElementById("interviewThore").currentTime = videoTimerThore;
    document.getElementById("interviewThore").loop = false;
    document.getElementById("interviewThore").play();


  }

  function pauseInterviewThore() {
    videoTimerThore = document.getElementById("interviewThore").currentTime;
    if (videoTimerThore >= document.getElementById("interviewThore").duration) {
      videoTimerThore = 0;
    }

    document.getElementById("interviewFran").src = "video/vaelg-mig-francisca-kort.mp4";
    document.getElementById("interviewFran").loop = true;
    document.getElementById("interviewFran").play();

    document.getElementById("interviewThore").src = "video/vaelg-mig-thore-kort.mp4";
    document.getElementById("interviewThore").loop = true;
    document.getElementById("interviewThore").play();


  }
}


//FRAN INTERVIEW
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

// SKift af indhold ved klik på person

function thoreFunction() {
  // Ændre teksten i "sig ja" paragraphen
  document.getElementById("tekstJa").innerHTML = "Jeg siger ja til alt!";
  // Ændre teksten i valgfags paragraphen
  document.getElementById("tekstValgfag").innerHTML = "&quot Mit navn er Thore og jeg spiller elektronisk musik. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. &quot";
  // Ændre musik, alt efter valgfag
  document.getElementById('myaudio').src = 'audio/elektroniskmusik.mp3';
  // Skifte første valgfagsbillede
  document.getElementById("valgfag1").style.backgroundImage = "url(img/valgfag_analog.jpg)";
  // Skifte andet valgfagsbillede
  document.getElementById("valgfag2").style.backgroundImage = "url(img/valgfag_elektronisk_musik.png)";
}

function franFunction() {
  document.getElementById("tekstJa").innerHTML = "Jeg Ikke ja til noget";
  document.getElementById("tekstValgfag").innerHTML = "Mit navn er Francisca og jeg siger ikke ja";
  document.getElementById('myaudio').src = 'audio/eriksminde_lyd.mp3';
  document.getElementById("valgfag1").style.backgroundImage = "url(img/valgfag_sts.png)";
  document.getElementById("valgfag2").style.backgroundImage = "url(img/valgfag_sts.png)";
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