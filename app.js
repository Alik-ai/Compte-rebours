

const text = document.querySelector("h2");
// console.log(now, countdownDate);


//console.log(days, hours, minutes, secondes);



function chrono(){
     //Il y a eux une date definit en js : 1 janvier  1970 / C'est la date de maintenant
    const now = new Date().getTime(); 

    //countdownDate = Compte à rebour
    const countdownDate = new Date("September 3, 2021").getTime(); 

    //futur - date de maintenant en millisecondes
    const distanceBase = countdownDate - now;

    //60seconde _ 60minute _ 24heure / c'est egal a un jour en milliesecondes
    const days = Math.floor(distanceBase / (1000 * 60 * 60 *24)); 

    //% = (modulos) le reste d'une division // le reste de distanceBase diviser par 1000... 
    // Parce que c'est le nombre d'heure qui reste 
    const hours = Math.floor((distanceBase % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) 
    const minutes = Math.floor ((distanceBase % (1000 * 60 * 60 ) / (1000 * 60)));
    const seconds = Math.floor ((distanceBase % (1000 * 60) / (1000 )));
    text.innerText = `${days}j ${hours}h ${minutes}min ${seconds}s`

}

chrono();

const inteval = setInterval(() => {

    chrono();

}, 1000);