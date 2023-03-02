let userTextEl = document.getElementById('user-text');
let btnEL = document.getElementById('btn');

let outputEl = document.getElementById('output');

btnEL.addEventListener('click' , function(){

    let userWord = userTextEl.value

    outputEl.innerHTML = isPalindrom(userWord)


})





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