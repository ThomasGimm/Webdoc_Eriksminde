// Alt det her er noget Maja har gang i!
// Afsnittet handler om at skifte interviewvideo og få den til at pause

//function myFunction() {
//alert("Klar til at høre om Eriksminde?");
//}

//ct = document.getElementById("interviewThore").currentTime;



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
  var x = 0;
  curTime = x.value;
  document.getElementById("interviewThore").addEventListener("mouseover", playInterviewThore);
} 


function playInterviewThore() {
  document.getElementById("interviewThore").src = "video/interview_thore.mp4";
  //document.getElementById("interviewThore").currentTime = 5;
  document.getElementById("interviewThore").play();




}

function pauseInterviewThore() {
  //alert(document.getElementById("interviewThore").currentTime); 

  // https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_av_prop_currenttime
  document.getElementById("interviewThore").src = "video/vaelg-mig-thore-kort.mp4";
  document.getElementById("interviewThore").play();


}


function playInterviewFran() {
  document.getElementById("interviewFran").src = "video/interview-francisca.mp4";
  document.getElementById("interviewFran").play();

}

function pauseInterviewFran() {
  //alert(document.getElementById("interviewThore").currentTime);
  // https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_av_prop_currenttime
  document.getElementById("interviewFran").src = "video/vaelg-mig-francisca-kort.mp4";
  document.getElementById("interviewFran").play();

}

// SKift af indhold ved klik på person

function thoreFunction() {
  // Ændre teksten i "sig ja" paragraphen
  document.getElementById("tekstJa").innerHTML = "Jeg siger ja til alt!";
  // Ændre teksten i valgfags paragraphen
  document.getElementById("tekstValgfag").innerHTML = "Mit navn er Thore og jeg spiller elektronisk musik";
  // Ændre musik, alt efter valgfag
  document.getElementById('myaudio').src = 'audio/elektroniskmusik.mp3';
  // Skifte første valgfagsbillede
  document.getElementById("valgfag1").style.backgroundImage = "url(img/valgfag_analog.png)";
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
  alert("Book en tid");
}