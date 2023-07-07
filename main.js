//this is the array of questions
// that i need it for my game
const questions = [
    {
        id: 1,
        q: "What is the name of the longest river in South America?",
        answers: ["Amazon River", "Cuanza River", "Kasai River", "Oti River"],
        correctAnswer: "Amazon River",
    },
    {
        id: 2,
        q: " What's the name of a place you go to see lots of animals?",
        answers: ["The Hotel", "The Coffe House", "The zoo", "The Cinema"],
        correctAnswer: "The zoo",
    },
    {
        id: 3,
        q: " How many legs does a spider have?",
        answers: ["Eight", "Tow", "three", "one"],
        correctAnswer: "Eight",
    },
    {
        id: 4,
        q: "Where does Santa Claus live?",
        answers: ["The North Pole", "Jordan", "Usa", "Brizel"],
        correctAnswer: "The North Pole",
    },
];
//first step i need to create a body bu using Dom to holds all the HTML tags that i create it,
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
const div_1 = document.createElement("div")
const p = document.createElement("p")
body.append(div)
div.append(p)
div.append(div_1)
div_1.className = "div_1"
const button_1 = document.createElement("button")
const button_2 = document.createElement("button")
const button_3 = document.createElement("button")
const button_4 = document.createElement("button")
button_1.innerText = "change q"

div_1.append(button_1)
div_1.append(button_2)
div_1.append(button_3)
div_1.append(button_4)


let QuestionCount = 0
for (let index = 0; index < questions.length; index++) {
    
    p.innerText = questions[QuestionCount].q
    
   QuestionCount+=index 


}
const changequestion = () => {
    if (questions[0].answers[0]===questions[0].correctAnswer) {
       p.innerHTML=""   
      p.innerText = questions[QuestionCount].q     
    console.log(questions[QuestionCount].q);
     
    } 
   
}
 button_1.addEventListener("click", changequestion)








/*
questions.forEach(function(ele,i){
ele.answers.forEach(function(ele2,ind){
    console.log(ele2);
})
})*/




/*//create the main function (questionsFUN) that holds the array (Qusestion) as an argument
//to make the change dinamic
const questionsFUN=(arrayOfQuestion)=>{
for (let index = 0; index < arrayOfQuestion.length; index++) {
   console.log(arrayOfQuestion[index]);
    
}
}
questionsFUN(questions)*/
