/*
Descrizione
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Abbellire con CSS o Bootstrap
Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)
Buon Lavoro
*/

let emailList = document.querySelector('#email-list')

const btn = document.querySelector('#btn')




btn.addEventListener('click', function() {
    emailList.innerHTML = ""; // Svuota la lista prima di aggiungere nuove email
    for (let i = 0; i < 10; i++){
        //chiamata all' endpoint che verrà eseguita per 10 volte
        fetch("https://flynn.boolean.careers/exercises/api/random/mail", { method: "GET" })
        .then(response => response.json())
        .then(data => {
            // codice per far qualcosa con la risposta
            console.log(data.response);
            emailList.innerHTML += `<li>${data.response}</li>`
    
        })
        .catch(error => {
            // codice da eseguire in caso di errore
            console.error(error);
        });
    
    }

})


