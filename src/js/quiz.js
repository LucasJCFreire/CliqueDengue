let currentQuestion = 0
let correctAnswers = 0
showQuestion()

document.querySelector('.scoreArea button').addEventListener('click', resetEvent)

function showQuestion() {
    if (questions[currentQuestion]) {
        let q = questions[currentQuestion]
        let pct = Math.floor((currentQuestion / questions.length) * 100)
        document.querySelector('.progress--bar').style.width = `${pct}%`

        document.querySelector('.scoreArea').style.display = 'none'
        document.querySelector('.questionArea').style.display = 'block'
        document.querySelector('.quiz-question').innerHTML = q.question
        document.querySelector('.quiz-options').innerHTML = ''

        let optionsHTML = ''

        q.options.forEach((item, index) => {
            optionsHTML += `<div data-op='${index}' class='option'><span>${index + 1}</span>${item}</div>`
        });
        document.querySelector('.quiz-options').innerHTML = optionsHTML
        document.querySelectorAll('.quiz-options .option').forEach(item => {
            item.addEventListener('click', optionClickEvent)
        })
    } else {
        finishQuiz()
    }
}

function optionClickEvent(e) {
    let clickedOption = parseInt(e.target.getAttribute('data-op'))
    if (questions[currentQuestion].answer === clickedOption) {
        correctAnswers++
    } else {
        // console.log('errou')
    }
    currentQuestion++
    showQuestion()
}

function finishQuiz() {
    let points = Math.floor((correctAnswers / questions.length) * 100)

    if(points < 50 ) {
        document.querySelector('.scoreText1').innerHTML=`Ta ruim hein ?! Estude mais e tente novamente.`
        document.querySelector('.scoreText1').style.color='#FF0000'
        document.querySelector('.quizImage').src = './src/images/trofeu3.jpg'
    } else if (points >= 50 && points < 90) {
        document.querySelector('.scoreText1').innerHTML=`Muito bom`
        document.querySelector('.quizImage').src = './src/images/trofeu2.jpg'

    } else if (points > 70) {
        document.querySelector('.scoreText1').innerHTML=`Parabéns`
        document.querySelector('.quizImage').src = './src/images/trofeu1.jpg'
    }

    document.querySelector('.scorePct').innerHTML=`Acertou ${points}%`
    document.querySelector('.scoreText2').innerHTML=`Você respondeu ${questions.length} questões e acertou ${correctAnswers}`

    document.querySelector('.scoreArea').style.display = 'block'
    document.querySelector('.questionArea').style.display = 'none'
    document.querySelector('.progress--bar').style.width = `100%`
}

function resetEvent () {
    correctAnswers = 0
    currentQuestion = 0
    showQuestion()
}