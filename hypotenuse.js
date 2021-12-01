const sides=document.querySelectorAll(".side-input")
const hypotenuseBtn=document.querySelector("#hypotenuse-btn")
const output=document.querySelector("#output")
function calculateHypotenuse(){
const sumOfSquares=calculateSumOfSquares(Number(sides[0].value),Number(sides[1].value))
const lengthOfHypotenuse=Math.sqrt(sumOfSquares)
output.innerText="the length of hypotenuse is: "+lengthOfHypotenuse.toFixed(2)
}
function calculateSumOfSquares(a,b){
    if(a<0 || b<0){
output.innerText="invalid input ,enter the valid input"
    }else{
    const sumOfSquares=a*a+b*b;
    return sumOfSquares
    }
}
hypotenuseBtn.addEventListener("click",calculateHypotenuse)
