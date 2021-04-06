const correctAnswers = ['B','C','A','B','B','C','B','C']; 

let adder = 100 / correctAnswers.length; 

const form = document.querySelector(".quiz-form"); 
const result = document.querySelector(".result"); 
const getDiv = document.querySelectorAll('div'); 
const easyQuestion = document.querySelector('.easy-questions'); 
const hidePrompt = document.querySelector('.hide-prompt'); 

//timer Qury the DOM
const timerDiv = document.querySelector('.timer'); 
const min = document.querySelector('.minute'); 
const sec  = document.querySelector('.second'); 




let buttonLevel; 

/**
 * Select level of questions
 */

let buttonEasy = document.querySelector(".click-easy");
let buttonMedium = document.querySelector(".click-medium");  
let buttonHard = document.querySelector(".click-hard"); 

buttonEasy.addEventListener('click',e =>{
    buttonLevel = e.target.textContent;
    hidePrompt.classList.add('d-none'); 
    easyQuestion.classList.remove('d-none');
    timerDiv.classList.remove('d-none'); 


    let second = 29;
    let minute = 1; 
    const countdown = setInterval(()=>{
        
        sec.textContent = `${second}`; 
        min.textContent = `${minute}`; 
        if(minute == 0 && second == 0){
            clearInterval(countdown);
            alert("TIME's UP");
            timerDiv.classList.add('d-none');
            //document.getElementById("quiz-form").submit(); 
        }
        else if(second == 0){
            second = 59; 
            minute = minute -1; 
        }else{
            second -= 1; 
            console.log(second); 
        }
        },1000)
    });

buttonMedium.addEventListener('click',e=>{
    buttonLevel = e.target.textContent;
    alert('This level is still in progress :(' );  
    
}); 

buttonHard.addEventListener('click',e=>{
    buttonLevel = e.target.textContent;
    alert('This level is still in progress :(' );  
}); 


/*
Clicking the submit button 
*/
form.addEventListener('submit', e =>{
timerDiv.classList.add('d-none')
e.preventDefault(); 
let score = 0; 

const userInput = [form.q1.value,form.q2.value,form.q3.value,
    form.q4.value,form.q5.value,form.q6.value,form.q7.value,form.q8.value ]

//validate the answers
userInput.forEach((answer,index) => {
    if(answer  === correctAnswers[index]){
        score += adder; 
    }
}); 

//Display the score
result.classList.remove('d-none'); 
scrollTo(0, 0);

//Animate the score at the top 
let val = 0; 
const timer = setInterval(()=>{
    result.querySelector('span').textContent = `${Math.round(val)}%`; 
    if(val === score){
        clearInterval(timer); 
    }else{
        val +=(adder/8);
    }
},100); 


}); 


