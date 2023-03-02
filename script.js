let userTextEl = document.getElementById('user-text');
let btnEL = document.getElementById('btn');

let outputEl = document.getElementById('output');

btnEL.addEventListener('click' , function(){

    let userWord = userTextEl.value

    outputEl.innerHTML = isPalindrom(userWord)


})

// ---------------------------------------------------------------------------------------------
let playEl = document.getElementById('play');
let finalResultEl = document.getElementById('final-result');

playEl.addEventListener('click', function(){
    
    let userChoiceEl = document.getElementById('user-choice').value;
    let userNumberEl = document.getElementById('user-number').value;
    console.log(userNumberEl);
    console.log(userChoiceEl);



    let computerNumber = randomNumber();
    console.log(computerNumber);

    let addition = parseInt(userNumberEl)  + parseInt(computerNumber);
    console.log(addition);
    

    let additionValue = isEvenAndOdd(addition);
    console.log(additionValue)

    if(userChoiceEl == additionValue){

        finalResultEl.innerHTML = (`Hai scelto il numero ${userNumberEl}  <br><br> 
                                   la tua scelta è stata  ${userChoiceEl } <br><br> 
                                   il numero del computer è  ${computerNumber } <br><br> 
                                   la somma dei due numeri è  ${addition}   che è un numero  ${additionValue } <br><br> 
                                   COMPLIMENTI: HAI VINTO! `)

    }else{

        finalResultEl.innerHTML = (`Hai scelto il numero ${userNumberEl}  <br><br> 
                                    la tua scelta è stata  ${userChoiceEl } <br><br> 
                                    il numero del computer è  ${computerNumber } <br><br> 
                                    la somma dei due numeri è  ${addition}   che è un numero  ${additionValue } <br><br> 
                                    PECCATO: HAI PERSO! `)
    }
   
})    















// ---------------------- FUNCTIONS -------------------------------------------

function isPalindrom(word){
    
    let userWordArray = [];
    
    for (let i=0; i< word.length ; i++){
    
        userWordArray.push(word[i]);
    }
    let stringArray = userWordArray.toString()
    
    
    let reverseArray = userWordArray.reverse();
    
    
    if(stringArray == reverseArray) {
    
        let result = ('La parola ' + word + ' è PALINDROMA')

        return result;
    }else{
    
        let result = ('La parola ' + word + ' NON è PALINDROMA')

        return result;
    }

}

function randomNumber(){

    let number = Math.floor(Math.random() * 5 + 1); 
    return number;
}


function isEvenAndOdd(number){

    if(number % 2 == 0){
        return 'pari';
    }else{
        return 'dispari';
    }
}