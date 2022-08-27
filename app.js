const quizData = [{
    question: " Blockchain is primarily defined as a shared _______________ ledger.",
    a: "Dynamic",
    b: "Immutable",
    c: "Single",
    d: "Updated",
    correct: "b",
},
{
    question: " Which is NOT a technology used to create blockchain?",
    a: "Ledger",
    b: "WiFi",
    c: "Cryptography",
    d: "Computer networking technology",
    correct: "b",
},
{
    question: " Blockchain as a ledger can best be described as a ____________ entry ledger.",
    a: "Single",
    b: "Double",
    c: "Triple",
    d: "Dynamic",
    correct: "c",
},
{
    question: " Nodes running on a blockchain must have _________ on all data stored.",
    a: "Consensus",
    b: "Hashes",
    c: "Ownership",
    d: "Certificate",
    correct: "a",
},
{
    question: "Which is a type of data that can be stored on a blockchain?",
    a: "Medical records",
    b: "Ownership of a tangible asset",
    c: "Training certificates",
    d: "All of the above",
    correct: "d",
},{
    question: "  ______________ running on a blockchain allow actions to be taken on events/transactions.",
    a: "Nodes",
    b: "Smart contract",
    c: "Network sprinter",
    d: "Hashes",
    correct: "a",
},{
    question: " The white paper that was released outlining Bitcoin was created by ______________ ",
    a: "Bill gates",
    b: "Steve jobs",
    c: "Satoshi Nakamoto",
    d: " Elon musk",
    correct: "c",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);