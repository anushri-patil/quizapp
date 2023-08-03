const questions = [
    {
        'que' : 'Which of the following is a markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'Javascript',
        'd': 'PHP',
        'correct' : 'a'
    },
    {
        'que': 'What does HTML stand for?',
        'a': 'Hyper Tag Markup Language',
        'b': 'Hyper Text  Markup Language',
        'c': 'Hyperlinks Text Markup Language',
        'd': 'Hyperlinking Text Markup Language',
        'correct' : 'b'
    },
    {
        'que' : 'What does CSS stand for?',
        'a': 'Computing Style Sheet',
        'b': 'Creative Style System',
        'c': 'Cascading Style Sheet',
        'd': 'Creative Styling Sheet',
        'correct' : 'c'
    },
    {
        'que' : 'Which symbol indicates a tag?',
        'a': 'Angle brackets',
        'b': 'Curved Brackets',
        'c': 'Commas',
        'd': 'Exclamation marks',
        'correct' : 'a'
    },
    {
        'que' : 'Which of these is genuine tagword?',
        'a': 'Header',
        'b': 'Body',
        'c': 'Image',
        'correct' : 'b'
    }
]
let index = 0;
let total = questions.length;
let correct = 0 ,
    incorrect = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll ('.options')
const loadQuestion = () => {
    if(index==total){
        return endQuiz()
    }
    reset()
    const data = questions[index]
    quesBox.innerText = `${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}
const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if (ans == data.correct ){
        correct++;
    }
    else{
        incorrect++;
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if(input.checked){
                answer =  input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
           input.checked = false   
        }
    )
}

 const endQuiz = () => {
    document.getElementById("box").innerHTML = `
        <h3> Thank you for playing quiz </h3>
        <h2>Your score : ${correct}/${total} are correct </h2>
    `
}    
loadQuestion();