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
//and another div_1  this div (must be holds a four buttons as a qustions),
/* the draw is <div><p>qustions</p>
 <div><button>answre1</button>
<button>answre1</button><button>answre1</button>
<button>answre1</button></div></div>*/
//then use a miltebul class fo all tags to fuul controls of it
// then i must do the right design to display it 
const body = document.querySelector("body")
const div = document.createElement("div")
body.append(div)
const check = document.createElement("h2")
body.append(check)
check.innerText = "your answer is: "
const check_1 = document.createElement("h2")
body.append(check_1)
check_1.className="check"
check.className="check"

check_1.innerText = ""

const viewQuestion = (indexofArray) => {
    const p = document.createElement("p")
    div.append(p)
    p.innerText = questions[indexofArray].q
    const div_1 = document.createElement("div")
    div.append(div_1)
    div_1.className = "div_1"
    questions[indexofArray].answers.forEach((answers, i) => {
        const button = document.createElement("button")
        div_1.append(button)
        button.innerText = answers
        button.className = "button"
        if (button.innerText === questions[indexofArray].correctAnswer) {
            button.id = "coorect"
            button.className = "true"
            // check_1.innerText="ahmad"
        }

        const checkfun = function () {
            if (button.innerText === questions[indexofArray].correctAnswer) {
                check_1.innerText = "true"
            }else{check_1.innerText = "false" }
        }

        const trueorfalse = () => {

            document.getElementById("coorect").style.backgroundColor = "green", disabled = true
            // document.getElementById("coorect").disabled = true
            document.querySelectorAll(".button").forEach((ele, i) => {
                ele.disabled = true
                ele.style.backgroundColor = "red"
            })
        }
        button.addEventListener("click", trueorfalse)
        button.addEventListener("click", checkfun)
    })
}
viewQuestion(0)

let nextquestion = 0

const changeQuestion = () => {


    nextquestion++
    if (nextquestion < questions.length) {
        div.innerHTML = ""
        
        viewQuestion(nextquestion)
    } else {
        nextButton.innerText = "the end"
        div.innerHTML = ""
        const h2 = document.createElement("h2")
        body.append(h2)
        h2.innerText = "your scoore is :"
        nextButton.disabled = true
        check.innerHTML=""
        
    }
}
const a=()=> {
    console.log(check_1.innerText);
 //document.querySelector(".check_1").innerHTML=""
    check_1.innerHTML=""
   
}


const nextButton = document.createElement("button")
body.append(nextButton)
nextButton.innerText = "next"
nextButton.className = "nextButton"
nextButton.addEventListener("click", changeQuestion)
nextButton.addEventListener("click",a )


/*console.log(button.className);

*/