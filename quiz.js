const quizform=document.querySelector(".quiz-form") 
const submitAnswerBtn=document.querySelector("#submit-answers-btn") 
const output=document.querySelector(".output")

const correctAnswers=[ "90deg","right angled","one right angle","12, 16, 20","Equilateral triangle",
"100deg","30deg","a + b + c","no","45°"]

submitAnswerBtn.addEventListener("click",calculateScore)
function calculateScore(){
    const formResults=new FormData(quizform)
    let score=0;
     index=0;
   
    for (let value of formResults.values()){
        if(value===correctAnswers[index]){
            score=score+1
        }
        index=index+1
    }
    output.innerText="the score is :"+score
}
