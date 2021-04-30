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

// console.log(emailList[24]);

// Start Email Verification
var emailFound; //false, sempre! variabile dichiarata ma non popolata
var email = prompt('Inserisci la tua mail');
for (i = 0; i < emailList.length; && !emailFound; i++) {
    if (email === emailList[i]) {
        emailFound = true; // variabile flag
        // console.log(emailList[i]);
    }
};

if (emailFound) {
    alert('Accesso eseguito come: ' + email);
    // Start Dice Game
    // var rollDice = Math.floor(Math.random () * 6) + 1;
    alert('Inizio gioco');
    alert('Il computer lancerà il dado poi toccherà a te, good luck!');
    var computerDice = Math.floor(Math.random() * 6) + 1;
    alert('Il computer ha lanciato il dado ed è uscito: ' + computerDice);
    alert('Ora tocca a te! Lancia il dado!');
    var userDice = Math.floor(Math.random() * 6) + 1;
    alert('Hai appena lanciato il dado ed è uscito: ' + userDice);
    // var bestResult = Math.max(computerDice, userDice);
    if (computerDice < userDice) {
        alert('Hai vinto!');
    } else if (computerDice === userDice) {
        alert('Pari');
    } else {
        alert('Hai perso');
    };
} else {
    alert('Attenzione! Accesso negato, inserisci un\'altra mail');
};
