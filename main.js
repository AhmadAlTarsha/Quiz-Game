//project one:

//this is the array of questions
// that i need it for my game
const questions = [
    {
        id: 1,
        q: "What is the name of the longest river in South America?",
        answers: ["Amazon River", "Cuanza River", "Kasai River", , "Oti River"],
        correctAnswer: "Amazon River",
    },
    {
        id: 2,
        q: " What's the name of a place you go to see lots of animals?",
        answers: ["The Hotel", "The zoo", "The Coffe House", "The Cinema"],
        correctAnswer: "The zoo",
    },
    {
        id: 3,
        q: " How many legs does a spider have?",
        answers: ["Tow", "three", "Eight", "one"],
        correctAnswer: "Eight",
    },
    {
        id: 4,
        q: "Where does Santa Claus live?",
        answers: ["Jordan", "Usa", "Brizel", "The North Pole"],
        correctAnswer: "The North Pole",
    },
];
//first step i need to create a body by using Dom to holds all the HTML tags that i create it,
// second step i need to create a (div) by using Dom,
// inside this div p (this p must be holds a paragraph as a question) 
//and another div_1  this div (must be holds  buttons as a qustions),
// then create main fun to controle from what i need to build the logic
//then i need Mainly 1-fun to render the code 2-fun to change the question
//3-fun to sum the score 4- fun to know the answer is true or false
//5-
//then use a miltepule class fo all tags to full controls of it
// then i must do the right design to display it 
const body = document.querySelector("body")
const div_2 = document.querySelector(".div_2")
const div = document.querySelector(".box")
let countdown= 5
let timeOver
const startTimeer=()=>{
     timeOver=setInterval(()=>{
        countdown--
        document.querySelector(".countDown").innerText=countdown 
        if (countdown===0) {
            div.style.display="none"
          div_2.style.display="none"
         const resuilt=document.createElement("p")
         body.append(resuilt)
         resuilt.innerHTML=` time over your scoore is ${scoore}`
    clearInterval(timeOver)
   //  document.querySelector(".box").style.d="none"     
     document.querySelector(".countDown").innerText="" 
     //new Audio("./wrongAnswer.wav").play()
     const startAgine=document.createElement("button")
     body.append(startAgine)
     startAgine.id="sb"
     startAgine.innerText="go to main "
     startAgine.addEventListener("click",()=>{
        startAgine.remove()
        resuilt.remove()
          div_3.innerHTML="" 
        new Audio("./playAgine.wav").play()
          div_2.style.display="flex"
          div.style.display="grid"
          console.log(div_2);
          nextquestion=0
    
   
   countdown=5
   startTimeer()
   scoore=0      
        
    
     })
        }
    },1000)
}
startTimeer()
const div_3 = document.createElement("div")
// body.append(div)
// div.c
// body.append(div_2)
body.append(div_3)
// div_2.className = "div_2"
div_3.className = "div_3"
const check = document.createElement("h2")
div_2.append(check)
check.innerText = "your answer is: "
const check_1 = document.createElement("h2")
div_2.append(check_1)

check_1.innerText = ""
const nextButton = document.querySelector(".next")
nextButton.innerText = "next"
// div_2.append(nextButton)

// nextButton.className = "nextButton"
//this scorre to sum your gride Depending on the num of true answer
let scoore = 0
//--------render function 
const viewQuestion = (indexofArray) => {
    nextButton.disabled = true
    const p = document.createElement("p")
    div.append(p)
    p.innerText = questions[indexofArray].q
    const div_1 = document.createElement("div")
    div.append(div_1)
    div_1.className = "div_1"
    questions[indexofArray].answers.forEach((answers) => {
        const button = document.createElement("button")
        div_1.append(button)
        button.innerText = answers
        button.className = "button"
        if (button.innerText === questions[indexofArray].correctAnswer) {
            button.id = "coorect"
            button.className = "true"
        }


        const checkfun = function () {

            if (button.innerText === questions[indexofArray].correctAnswer) {
                scoore++
                new Audio("./coorectAnswer.wav").play()
                // console.log(scoore);
                check_1.innerText = "true"
            } else { check_1.innerText = "false"
            new Audio("./wrongAnswer.wav").play() }
        }

        //-----this fun spilt the true and false answer
        // then i give the true or false answer diffirant class or id 
        // then i give each of them diffirant proparety
        const trueOrfalse = () => {
          
            nextButton.disabled = false
            document.getElementById("coorect").style.backgroundColor = "green",
                document.getElementById("coorect").disabled = true
            document.querySelectorAll(".button").forEach((ele) => {
                ele.disabled = true
                ele.style.backgroundColor = "red"
            })

        }
        button.addEventListener("click", trueOrfalse)//mice inaple
        button.addEventListener("click", checkfun)
    })
}
// here i will exicute the render fun and give it 0 index to display first element of (question array)
viewQuestion(0)
let nextquestion = 0

//----- this fun tack a num that i declerate it and add 1 evey when i exicute it
// and pass this num to the render fun to display the elemnt of all array of question

const changeQuestion = () => {
    nextButton.disabled = true
    nextquestion++
    if (nextquestion < questions.length) {
        
        div.innerHTML = ""
        // here i passed the num to render fun
        viewQuestion(nextquestion)

        // this condition to ensure if the num was greater of question array end the game
    } else {
        clearInterval(timeOver)
        countdown =20
        document.querySelector("h3").innerText=""
       
        div.innerHTML = ""
        //div_2.style.display=none
        const h2 = document.createElement("h2")
        div_3.append(h2)
        h2.innerText = `your scoore is : ${scoore}/${questions.length}`
        const h2_1 = document.createElement("h2")
        div_3.append(h2_1)
        h2_1.innerText = ""
        if (scoore == questions.length) {
            h2_1.innerText = "you are grate you gut full mark"
        } else if (scoore > (questions.length * 0.5)) {
            h2_1.innerText = "you are not bad"
        } else { h2_1.innerText = "you are failed" }

        const playAgineButton = document.createElement("button")
        div_3.append(playAgineButton)
        playAgineButton.innerText = "play agine"
        playAgineButton.addEventListener("click", () => {
         new Audio("./playAgine.wav").play()
          div_2.style.display="flex"
          nextquestion=0
   div_3.innerHTML=""    
   viewQuestion(0)
   
   startTimeer()
   scoore=0      

 //div_2.innerHTML=""
       
 
           
        })
    }
    
}
// ------this fun for display (h2) that represent the ansewr is true or false
const veiewTruOrFalse = () => {
    // console.log(check_1.innerText);
    check_1.innerHTML = ""
}

nextButton.addEventListener("click", changeQuestion)
nextButton.addEventListener("click", veiewTruOrFalse)
nextButton.addEventListener("click", ()=>{

})







