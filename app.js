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
let palatteBtn=document.getElementsByClassName("palatte-btn")
let eyeBtn=document.getElementsByClassName("eye-btn")
let colorJ=document.getElementsByClassName("color")
let modeJ=document.getElementsByClassName("mode")
let featureJ=document.getElementById("feature")
let choiceBtn=document.querySelectorAll(".choice-btn")
let root=document.querySelector(":root")
let modeChoice=document.getElementsByClassName("mode-choice")



palatteBtn[0].addEventListener("click",function(){
    colorJ[0].classList.toggle("active")
    modeJ[0].classList.remove("active")
})

eyeBtn[0].addEventListener("click",function(){
    modeJ[0].classList.toggle("active")
    colorJ[0].classList.remove("active")
})

choiceBtn.forEach(changecolor)

function changecolor(color){
    color.addEventListener("click",function(){
        let dataColor=color.getAttribute("data-color")
        root.style.setProperty("--main-color",dataColor)
    })
}


/*Colour End*/
/*------------------------------------------------------------------------------------*/
/*Mode Start*/
let darkMode=document.getElementsByClassName("dark-mode")
let brightMode=document.getElementsByClassName("bright-mode")
let bodyJ=document.getElementsByTagName("body")
let calContainer=document.getElementsByClassName("cal-container")
let btnJ=document.querySelectorAll("button")
let greenBtn = document.querySelector('[data-color="#7BB89F"]')
let blueBtn = document.querySelector('[data-color="#535A7E"]')
let yellowBtn = document.querySelector('[data-color="#FEF18E"]');
let whiteBtn = document.querySelector('[data-color="white"]');

darkMode[0].addEventListener("click",function(){
    bodyJ[0].classList.toggle("active")
    calContainer[0].classList.toggle("active")
    for(let i = 0; i < btnJ.length; i++){
        btnJ[i].style["-webkit-background-clip"]="text"
        btnJ[i].style["-webkit-text-fill-color"]="transparent"
        btnJ[i].style.boxShadow="2px 2px 8px rgba(255,255,255,0.2)"
    }
})

brightMode[0].addEventListener("click",function(){
    bodyJ[0].classList.remove("active")
    calContainer[0].classList.remove("active")
    for(let i = 0; i < btnJ.length; i++){
        btnJ[i].style["-webkit-background-clip"]=null
        btnJ[i].style["-webkit-text-fill-color"]=null
        btnJ[i].style.boxShadow=null  
        btnJ[i].setAttribute("data-theme","light")      
    }
})


greenBtn.addEventListener("click",function(){
    if(bodyJ[0].classList.contains("active")){
        for(let i = 0; i < btnJ.length; i++){
            btnJ[i].setAttribute("data-theme","green")
        }
    }
 })

 blueBtn.addEventListener("click",function(){
    if(bodyJ[0].classList.contains("active")){
        for(let i = 0; i < btnJ.length; i++){
            btnJ[i].setAttribute("data-theme","blue")
        }
    }
 })

 yellowBtn.addEventListener("click",function(){
    if(bodyJ[0].classList.contains("active")){
        for(let i = 0; i < btnJ.length; i++){
            btnJ[i].setAttribute("data-theme","yellow")
        }
    }
 })

 whiteBtn.addEventListener("click",function(){
    if(bodyJ[0].classList.contains("active")){
        for(let i = 0; i < btnJ.length; i++){
            btnJ[i].setAttribute("data-theme","white")
        }
    }
 })





    
                         



