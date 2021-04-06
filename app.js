const correctAnswers = ['B','C','A','B']; 

let adder = 100 / correctAnswers.length; 

const form = document.querySelector(".quiz-form"); 
const result = document.querySelector(".result"); 

const getDiv = document.querySelectorAll('div'); 

form.addEventListener('submit', e =>{
e.preventDefault(); 
let score = 0; 

const userInput = [form.q1.value,form.q2.value,form.q3.value,form.q4.value]

//validate the answers
userInput.forEach((answer,index) => {
    if(answer  === correctAnswers[index]){
        score += adder; 
    }
}); 

result.classList.remove('d-none'); 
scrollTo(0, 0);

let val = 0; 

const timer = setInterval(()=>{
    result.querySelector('span').textContent = `${val}%`; 
    if(val === score){
        clearInterval(timer); 
    }else{
        val ++;
    }
},10); 

}); 