// valid email list
var emailList = [
  'francescoallera@gmail.com',
  'arlowebmail@gmail.com',
  'alexgiorgio.asole@gmail.com',
  'matteo.basile56@gmail.com',
  'bibbodavide@gmail.com',
  'simone.bresci.05@gmail.com',
  'brutalmachinelol@gmail.com',
  'danilo.colloca91@gmail.com',
  'antoniofiorentino16@gmail.com',
  'sabfon@hotmail.it',
  'gianpaolo.garbarino@gmail.com',
  'gentilevito1076@gmail.com',
  'domenicograsso016@gmail.com',
  'h.marian914@gmail.com',
  'sebastiano.lanfranchi@gmail.com',
  'alessandroliggieri95@gmail.com',
  'francesco.m.manga@gmail.com',
  'metboolean@gmail.com',
  'agarom97@gmail.com',
  'snapoli1998@gmail.com',
  'danielpellegrini87@gmail.com',
  'fa610movic90@gmail.com',
  'edoardo.piragine@gmail.com',
  'edoardo.pizzicannella@gmail.com',
  'breezer087@gmail.com',
  'adele.r87@gmail.com',
  'luciorendine69@gmail.com',
  'marcello.rota.1989@gmail.com',
  'giosuesantoro6@gmail.com',
  'diego.scano77@gmail.com',
  'estefansilvi@gmail.com',
  'teresaspigoni@hotmail.com',
  'delta873@gmail.com',
  'verderosamircowork@gmail.com',
  'davide.vignozzi@gmail.com'
];

// email verification
var emailFound;
var email = prompt('Inserisci la tua mail');
for (i = 0; i < emailList.length; i++) {
  if (email === emailList[i]) {
    emailFound = true;
  }
};

// if email match - else if not
if (emailFound) {
  alert('Accesso eseguito come: ' + email);
  // get user name imput and put it inside user-name span
  var userInput = prompt('Inserisci il tuo nome');
  alert('Benvenuto ' + userInput + ' preparati a lanciare il dado!');
  var userName = document.getElementsByClassName('user-name');
  userName[0].innerText = userInput;
} else {
  alert('Attenzione! Accesso negato, non puoi giocare a dadi.\nInserisci un\'altra mail');
  document.getElementById('dice-game-container').style.display='none';
};

// roll dice function
function rollDice() {
  var computerDice = Math.floor(Math.random() * 6) + 1;
  var userDice = Math.floor(Math.random() * 6) + 1;
  if (computerDice < userDice) {
    alert('Hai vinto!');
    computerResult = document.getElementsByClassName('computer-result');
    computerResult[0].innerText = computerDice;
    userResult = document.getElementsByClassName('user-result');
    userResult[0].innerText = userDice;
  } else if (computerDice === userDice) {
    alert('Pari');
    computerResult = document.getElementsByClassName('computer-result');
    computerResult[0].innerText = computerDice;
    userResult = document.getElementsByClassName('user-result');
    userResult[0].innerText = userDice;
  } else {
    alert('Hai perso');
    computerResult = document.getElementsByClassName('computer-result');
    computerResult[0].innerText = computerDice;
    userResult = document.getElementsByClassName('user-result');
    userResult[0].innerText = userDice;
  };
}
