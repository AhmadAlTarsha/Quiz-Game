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
    }
    , {
        id: 5,
        q: "How many bones are there in the human body?",
        answers: ["207", "209", "206", " 235"],
        correctAnswer: "206",
    },
    {
        id: 6,
        q: "What is the name of the actor who played Jack in Titanic?",
        answers: ["Brad Pitt", "Johnny Depp", "George Clooney", "Leonardo DiCaprio"],
        correctAnswer: "Leonardo DiCaprio",
    },
    {
        id: 7,
        q: "Fe is the chemical symbol for which element?",
        answers: ["Iron", "Gold", "Platenim", "Oxegin"],
        correctAnswer: "Iron",
    },
    {
        id: 8,
        q: "How many players are there on a baseball team??",
        answers: ["13", "9", "8", "11"],
        correctAnswer: "9",
    },
    {
        id: 9,
        q: " What language is the most popularly spoken worldwide?",
        answers: ["Spanish", "English ", "Chinese", "Arabic"],
        correctAnswer: "Chinese",
    },
    {
        id: 10,
        q: "Who founded Microsoft?",
        answers: ["Jeff Bezos", "Bill Gates", "steve jobs", "mark zuckerberg"],
        correctAnswer: "Bill Gates",
    },
  
   
    

];
//first step i need to create a body by using Dom to holds all the HTML tags that i create it,
// second step i need to create a (div) by using Dom,
// inside this div p (this p must be holds a paragraph as a question) 
//and another div_1  this div (must be holds  buttons as a qustions),
// then create main fun to controle from what i need to build the logic
//then i need Mainly 1-fun to render the code 2-fun to change the question
//3-fun to sum the score 4- fun to know the answer is true or false
//5-timmer for game 6-end screen 7-add audio
//then use a miltepule class fo all tags to full controls of it
// then i must do the right design to display it 
const body = document.querySelector("body")

//body.style.display="none"


const div_2 = document.querySelector(".div_2")
const div = document.querySelector(".box")
let countdown = 15
let timeOver
const startTimeer = () => {
    timeOver = setInterval(() => {
        countdown--
        document.querySelector(".countDown").innerText = `Time Lift Is : ${countdown}`
        if (countdown === 0) {
            new Audio("./endTime.wav").play()
            div.style.display = "none"
            div_2.style.display = "none"
            const resuilt = document.createElement("p")
            body.append(resuilt)
            resuilt.innerHTML = ` Game time is over, Your score Is : ${score}`
            clearInterval(timeOver)
            //  document.querySelector(".box").style.d="none"     
            document.querySelector(".countDown").innerText = ""
            
            const startAgine = document.createElement("button")
            document.querySelector(".div_4").append(startAgine)

            startAgine.id = "sb"
            startAgine.innerText = "Restart Game "
            startAgine.addEventListener("click", () => {
                startAgine.remove()
                resuilt.remove()
                div_3.innerHTML = ""
                new Audio("./playAgine.wav").play()
                div_2.style.display = "flex"
                document.querySelector(".box").innerHTML = ""
                div.style.display = "grid"

                nextquestion = 0


                countdown = 15
                startTimeer()
                score = 0
                viewQuestion(0)
                document.querySelector("#trueOrFalse").innerHTML = ""
            })
        }
    }, 1000)
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
check.innerText = "Your Answer Is: "
const check_1 = document.createElement("h2")
div_2.append(check_1)
check_1.id = "trueOrFalse"

check_1.innerText = ""
const nextButton = document.querySelector(".next")
nextButton.innerText = "next"
// div_2.append(nextButton)

// nextButton.className = "nextButton"
//this scorre to sum your gride Depending on the num of true answer
let score = 0
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


        const checkfun = () => {

            if (button.innerText === questions[indexofArray].correctAnswer) {
                score++
                new Audio("./coorectAnswer.wav").play()
                // console.log(score);
                check_1.innerText = "True"
            } else {
                check_1.innerText = "False"
                new Audio("./wrongAnswer.wav").play()
            }
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
        countdown = 15
        document.querySelector("h3").innerText = ""
        div_2.style.display = "none"
        div.innerHTML = ""
        //div_2.style.display=none
        const h2 = document.createElement("h2")
        div_3.append(h2)
        h2.id = "h2"
        h2.innerText = `Your Score Is : ${score}/${questions.length}`
        const h2_1 = document.createElement("h2")
        div_3.append(h2_1)
        h2_1.innerText = ""
        if (score == questions.length) {
            h2_1.innerText = "you are grate you gut full mark"
        } else if (score > (questions.length * 0.5)) {
            h2_1.innerText = "you are not bad"
        } else { h2_1.innerText = "you are failed" }

        const playAgineButton = document.createElement("button")
        div_3.append(playAgineButton)
        playAgineButton.innerText = "play agine"
        playAgineButton.addEventListener("click", () => {
            new Audio("./playAgine.wav").play()
            div_2.style.display = "flex"
            nextquestion = 0
            div_3.innerHTML = ""
            viewQuestion(0)

            startTimeer()
            score = 0

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
nextButton.addEventListener("click", () => {
    new Audio("./next.wav").play()
})







