const sides=document.querySelectorAll(".side-input")
const areabtn=document.querySelector("#area-btn")
const output=document.querySelector("#output")
areabtn.addEventListener("click",calculatearea)

function calculateproduct(a,b,c){
    if(a<0 || b<0 ||c<0){
output.innerText="invalid input ,enter the valid input"
    }else{
const s =(a+b+c)/2
const sum =s*(s-a)*(s-b)*(s-c)
return sum
    } 
}

function calculatearea(){
    const product= calculateproduct(Number(sides[0].value),Number(sides[1].value),Number(sides[2].value))
    const sum =Math.sqrt(product)
    output.innerText="the area of triangle is: "+sum.toFixed(2)+" units"

}
