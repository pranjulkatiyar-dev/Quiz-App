const questions = [
    {
        'Que': 'What does HTML stand for?',
        'a': 'Hyper Text Machine Language',
        'b': 'Hyper Text Markup Language',
        'c': 'High Text Markup Language',
        'd': 'Hyper Transfer Markup Language',
        'correct': 'b'
    },
    {
        'Que': 'Which tag is used to create a hyperlink in HTML?',
        'a': '<link>',
        'b': '<href>',
        'c': '<a>',
        'd': '<url>',
        'correct': 'c'
    },
    {
        'Que': 'Which HTML tag is used to display an image?',
        'a': '<pic>',
        'b': '<img>',
        'c': '<image>',
        'd': '<src>',
        'correct': 'b'
    },
    {
        'Que': 'What does CSS stand for?',
        'a': 'Computer Style Sheets',
        'b': 'Creative Style Sheets',
        'c': 'Cascading Style Sheets',
        'd': 'Colorful Style Sheets',
        'correct': 'c'
    },
    {
        'Que': 'Which CSS property is used to change the text color?',
        'a': 'text-color',
        'b': 'font-color',
        'c': 'color',
        'd': 'text-style',
        'correct': 'c'
    },
    {
        'Que': 'Which CSS property is used to make text bold?',
        'a': 'text-weight',
        'b': 'font-style',
        'c': 'font-weight',
        'd': 'text-bold',
        'correct': 'c'
    },
    {
        'Que': 'Which CSS property controls the space between elements?',
        'a': 'spacing',
        'b': 'margin',
        'c': 'border',
        'd': 'gap',
        'correct': 'b'
    },
    {
        'Que': 'Which keyword is used to declare a variable in modern JavaScript?',
        'a': 'var',
        'b': 'int',
        'c': 'let / const',
        'd': 'define',
        'correct': 'c'
    },
    {
        'Que': 'Which method is used to print something in the browser console?',
        'a': 'console.print()',
        'b': 'console.log()',
        'c': 'print()',
        'd': 'log.console()',
        'correct': 'b'
    },
    {
        'Que': 'Which method is used to fetch data from an API in JavaScript?',
        'a': 'get()',
        'b': 'request()',
        'c': 'fetch()',
        'd': 'call()',
        'correct': 'c'
    },
    {
        'Que': 'What does DOM stand for?',
        'a': 'Document Object Machine',
        'b': 'Document Object Model',
        'c': 'Data Object Model',
        'd': 'Display Object Method',
        'correct': 'b'
    },
    {
        'Que': 'Which event fires when a button is clicked in JavaScript?',
        'a': 'onhover',
        'b': 'onpress',
        'c': 'onclick',
        'd': 'ontouch',
        'correct': 'c'
    },
]

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;

const quesbox = document.getElementById("quesbox");
const optionInputs = document.querySelectorAll('.Options');

const loadquestion = () => {
    if (index === total) {
        return endQuiz();
    }
    reset();
    const data = questions[index];
    quesbox.innerText = `${index + 1}) ${data.Que}`;
    optionInputs[0].nextElementSibling.innerText = `(a) ${data.a}`;
    optionInputs[1].nextElementSibling.innerText = `(b) ${data.b}`;
    optionInputs[2].nextElementSibling.innerText = `(c) ${data.c}`;
    optionInputs[3].nextElementSibling.innerText = `(d) ${data.d}`;
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    if (ans == data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadquestion();
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach((input) => {
        if (input.checked) {
            answer = input.value;
        }
    });
    return answer;
}

const reset = () => {
    optionInputs.forEach((input) => {
        input.checked = false;
    });
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align:center">
        <h3>Thank you for playing the Quiz!</h3><br>
        <h2>${right} / ${total} correct</h2><br>
        <h4>Wrong: ${wrong}</h4>
    </div>`;
}

loadquestion();