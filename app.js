/*Calculator Start*/

let inputBoxJ=document.getElementById("inputBox")

function calculate(number){
    inputBoxJ.value=inputBoxJ.value+number
}

function result(){
    try{
        let answer=eval(inputBoxJ.value)
        inputBoxJ.value=Math.round(answer*100) / 100
    }
    catch (err){
      throw alert("Please enter a valid equation")
    }
}

function del(){
    inputBoxJ.value=(inputBoxJ.value.substring(0, inputBoxJ.value.length - 1))
}

function remove(){
    inputBoxJ.value=" "
}

function percentage(){
    result()
    inputBoxJ.value=inputBoxJ.value/100
}

inputBoxJ.addEventListener("keypress",function(){
    if(event.key==="Enter"){
        result()
    }
})

/*Calculator End*/
/*------------------------------------------------------------------------------------*/
/*Color Start*/
let colorBtn=document.getElementsByClassName("color-btn")
let colorJ=document.getElementsByClassName("color")
let featureJ=document.getElementById("feature")
let choiceBtn=document.querySelectorAll(".choice-btn")
let root=document.querySelector(":root")

colorBtn[0].addEventListener("click",function(){
    featureJ.classList.toggle("active")
    colorJ[0].classList.toggle("active")
})

choiceBtn.forEach(changecolor)

function changecolor(color){
    color.addEventListener("click",function(){
        let dataColor=color.getAttribute("data-color")
        root.style.setProperty("--main-color",dataColor)
    })
}






