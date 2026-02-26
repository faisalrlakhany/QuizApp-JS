const questions = [
    {
        question: "What comes next in the series? 2, 4, 8, 16, ?",
        a: "18",
        b: "24",
        c: "32",
        d: "20",
        correct: "c"
    },
    {
        question: "If ALL DOGS are ANIMALS and SOME ANIMALS are CATS, then:",
        a: "All dogs are cats",
        b: "Some dogs are cats",
        c: "No dog is an animal",
        d: "Dogs are animals",
        correct: "d"
    },
    {
        question: "Find the odd one out:",
        a: "Apple",
        b: "Banana",
        c: "Carrot",
        d: "Mango",
        correct: "c"
    },
    {
        question: "If 5 + 3 = 28 and 4 + 2 = 18, then 6 + 4 = ?",
        a: "40",
        b: "44",
        c: "48",
        d: "36",
        correct: "a"
    },
    {
        question: "What comes next? A, C, F, J, ?",
        a: "M",
        b: "O",
        c: "P",
        d: "N",
        correct: "b"
    },
    {
        question: "A farmer has 17 sheep. All but 9 die. How many are left?",
        a: "8",
        b: "9",
        c: "17",
        d: "0",
        correct: "b"
    },
    {
        question: "Which number replaces the question mark? 3, 6, 18, 72, ?",
        a: "216",
        b: "288",
        c: "360",
        d: "432",
        correct: "d"
    },
    {
        question: "If CAT = 24, then DOG = ?",
        a: "26",
        b: "27",
        c: "28",
        d: "29",
        correct: "a"
    },
    {
        question: "Find the missing number: 1, 1, 2, 3, 5, 8, ?",
        a: "11",
        b: "12",
        c: "13",
        d: "15",
        correct: "c"
    },
    {
        question: "If you rearrange the letters 'CIFAIPC', you get the name of a:",
        a: "City",
        b: "Ocean",
        c: "Country",
        d: "Animal",
        correct: "b"
    }
];


const quesBox = document.getElementById("ques-box")
const optionsInput = document.querySelectorAll(".options")
const box = document.getElementById("box")
let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;

const loadQuestion = () => {

    if (index == total) {
        return endQuiz();
    }
    reset();
    const data = questions[index];
    quesBox.innerText = ` ${index + 1})  ${data.question}`;
    optionsInput[0].nextElementSibling.innerText = data.a;
    optionsInput[1].nextElementSibling.innerText = data.b;
    optionsInput[2].nextElementSibling.innerText = data.c;
    optionsInput[3].nextElementSibling.innerText = data.d;


}


const submitQuiz = () => {


    const data = questions[index]
    const answer = getAnswer()
    if (answer == data.correct) {

        right++

    } else {
        wrong++
    }
    index++;
    loadQuestion();
    return;
}


const getAnswer = () => {
    let answer;
    optionsInput.forEach(
        (input) => {

            if (input.checked) {
                console.log(input.value);
                answer = input.value;

            }
        }
    )
    return answer;
}



const reset = () => {

    optionsInput.forEach((input) => {
        input.checked = false;
    })

}


const endQuiz = () => {
    box.innerHTML = `
        <div class="result-box">
     <h3 class="thanks"> Thank You For Playing The Quiz </> 
        <h2 class = "score"> Your Score : <span class ="correct"> ${right} </span> / <span class="total" > ${total} </span>  </h2>
     </div>`
}


//initial call
loadQuestion()



