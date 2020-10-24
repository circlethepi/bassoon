const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

const listenButton = document.getElementById('listen-btn')
var pieceID = 0
let pieceURL = "circlethepi.github.io/bassoon/listen/"
var pieceLink = ""


let shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

listenButton.addEventListener('click', showPieceID)


//seting up starting
function startGame() {
  startButton.classList.add('hide')

  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  pieceID = 0

  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}


//setting up next question
function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

//showing question
function showQuestion(question) {
  questionElement.innerText = question.question

  question.answers.forEach(answer => {
    const button = document.createElement('button')

    button.innerText = answer.text
    button.classList.add('btn')

//attempt to add id number
    button.idval = answer.id

    if (answer.correct) {
      button.dataset.correct = answer.correct
    }

    button.addEventListener('click', selectAnswer) // BUTTON CLICK
    answerButtonsElement.appendChild(button)
  })
}




function resetState() {

  clearStatusClass(document.body)

  nextButton.classList.add('hide')

  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }

}




function selectAnswer(e) { //what happens when answer selected
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct

  //attempting to add id
  var idAdd = selectedButton.idval
  pieceID += idAdd

//back to regularly progrmmed program lol
  setStatusClass(document.body, correct)

  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })


  if (shuffledQuestions.length > currentQuestionIndex + 1) { //if there are more questions
    currentQuestionIndex++
    setNextQuestion()
  } else {
  //  startButton.innerText = 'restart'
  //  startButton.classList.remove('hide')

    listenButton.innerText = 'listen'
    listenButton.classList.remove('hide')
  }
}


function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}









const questions = [
  {
    question: '',
    answers: [
      { text: 'dawn', id: 1 },
      { text: 'dusk', id: 2 }
    ]
  },

  {
    question: '',
    answers: [
      { text: 'wind', id: 10 },
      { text: 'land', id: 20 },
      { text: 'sea', id: 30 }
    ]
  },

  {
    question: '',
    answers: [
      { text: 'rain', id: 100 },
      { text: 'sun', id: 200 }
    ]
  },

  {
    question: '',
    answers: [
      { text: 'heart', id: 1000 },
      { text: 'body', id: 2000 },
      { text: 'mind', id: 3000 }
    ]
  },

  {
    question: '',
    answers: [
      { text: 'black', id: 10000 },
      { text: 'white', id: 20000 },
      { text: 'grey', id: 30000 }
    ]
  },

  {
    question: '',
    answers: [
      { text: 'past', id: 100000 },
      { text: 'present', id: 200000 },
      { text: 'future', id: 300000 }
    ]
  },

  {
    question: '',
    answers: [
      { text: 'why', id: 1000000 },
      { text: 'how', id: 2000000 }
    ]
  },

  {
    question: '',
    answers: [
      { text: 'hard', id: 10000000 },
      { text: 'soft', id: 20000000 }
    ]
  },
]



function showPieceID()  {
  var idNumURL = pieceID.toString()
  var urlEnd = ".html"
  pieceLink = pieceURL.concat(idNumURL,urlEnd)

  window.location=pieceLink ;

}
