const questions = [
    {
        'que' : 'Which is the First Operational Launch Vehicle of India?',
        'a': 'ASLV',
        'b': 'PSLV',
        'c': 'SLV-3',
        'd': 'GSLV',
        'correct' : 'b'
    },
    {
        'que': 'Which Spacecraft is Developed by ISRO to study the Sun?',
        'a': 'Shukrayaan-1',
        'b': 'Aditya-L1',
        'c': 'Aditya-L2',
        'd': 'Mangalyaan-3',
        'correct' : 'b'
    },
    {
        'que' : 'When was the ISRO logo adopted?',
        'a': '2002',
        'b': '2013',
        'c': '2020',
        'd': '2023',
        'correct' : 'a'
    },
    {
        'que' : 'Which Indian state has the highest number of Space Centres?',
        'a': 'Maharastra',
        'b': 'Tamil Nodu',
        'c': 'Gujarat',
        'd': 'Karnataka',
        'correct' : 'd'
    },
    {
        'que' : 'Where is the Headquarters of the Indian Space Research Organisation (ISRO)?',
        'a': 'Delhi',
        'b': 'Pune',
        'c': 'Karnataka',
        'd': 'Kerala',
        'correct' : 'c'
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
