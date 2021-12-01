const inputs=document.querySelectorAll(".angle-input")
const isTriangleBtn=document.querySelector("#is-triangle-btn")
const output=document.querySelector("#output")
isTriangleBtn.addEventListener("click",isTriangle)

function calculateSumOfAngles(angle1,angle2,angle3){
    if(angle1<0 || angle2<0 || angle3<0){
    output.innerText="please enter valid input";
    }else{
    const sumOfAngles=angle1+angle2+angle3;
    return sumOfAngles
    }
}
function isTriangle(){
const sumOfAngles=calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value))
if(sumOfAngles===180){
    output.innerText="Yay!The angles form a triangle"
}else{
    output.innerText="Oh Oh! The angles dont form a triangle"
}
}
