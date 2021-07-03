const questions = [
    {
        qus: "How many districts does Bangladesh have?",
        a: "61",
        b: "62",
        c: "64",
        d: "66",
        ans: "c",
    },

    {
        qus: "How many divisions does Bangladesh have?",
        a: "10",
        b: "9",
        c: "8",
        d: "6",
        ans: "c",
    },

    {
        qus: "What is the capital of Bangladesh?",
        a: "Delhi",
        b: "Chittagong",
        c: "Kolkata",
        d: "Dhaka",
        ans: "d",
    },

    {
        qus: "What is the dialing code for Bangladesh?",
        a: "+90",
        b: "+880",
        c: "+017",
        d: "+02",
        ans: "b",
    },

    {
        qus: "In what part of Asia is Bangladesh located?",
        a: "South Asia",
        b: "East Asia",
        c: "Middle Asia",
        d: "West Asia",
        ans: "a",
    },

    {
        qus: "Which color is included in the flag of Bangladesh?",
        a: "White",
        b: "Blue",
        c: "Red",
        d: "Orange",
        ans: "c",
    },

    {
        qus: "Bangladesh got it's independence from which country in 1971?",
        a: "India",
        b: "China",
        c: "UK",
        d: "Pakistan",
        ans: "d",
    },

    {
        qus: "What is the independence day for Bangladesh?",
        a: "21 February",
        b: "7 March",
        c: "26 March",
        d: "16 Decemebr",
        ans: "c",
    },
]

let index = 0;
let score = 0;


const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

function quizer(){
    var currentQ = questions[index];
    questionEl.innerHTML = currentQ.qus;
    a_text.innerHTML = currentQ.a;
    b_text.innerHTML = currentQ.b;
    c_text.innerHTML = currentQ.c;
    d_text.innerHTML = currentQ.d;
}

submitBtn.addEventListener('click', () => {
    let answer;

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    })
    if(answer){
        answerEls.forEach(answerEl => answerEl.checked = false);

        if(answer == questions[index].ans){
            score++;
        }
        index++;
        if(questions.length == index){
            quiz.innerHTML = `
                <h2>You answered ${score}/${questions.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
        else{
            quizer();
        }
    }
    


})

quizer();