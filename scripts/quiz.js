const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

var pieceID = 0
//link creating variables
let pieceURL = "circlethepi.github.io/bassoon/listen/"
var pieceLink = ""
var titleID = ""
var urlEnd = ".html"


let shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})



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
    showPieceID() //auto redirect to listen page

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
      { text: 'past', id: 1000 },
      { text: 'present', id: 2000 },
      { text: 'future', id: 3000 }
    ]
  },

  {
    question: '',
    answers: [
      { text: 'why', id: 10000 },
      { text: 'how', id: 20000 }
    ]
  },

  {
    question: '',
    answers: [
      { text: 'hard', id: 100000 },
      { text: 'soft', id: 200000 }
    ]
  },

  {
    question: '',
    answers: [
      { text: 'heart', id: 1000000 }, //only affects titles
      { text: 'body', id: 2000000 },
      { text: 'mind', id: 3000000 }
    ]
  },

  {
    question: '',
    answers: [
      { text: 'black', id: 10000000 }, //only affects titles
      { text: 'white', id: 20000000 },
      { text: 'grey', id: 30000000 }
    ]
  },
]



function showPieceID()  {
  var idNum = pieceID.toString()
  //idNumURL = idNum.slice(3) //ets rid of title numbers
  //titleID = idNum.slice(0,2)
  //pieceLink = pieceURL.concat(idNumURL,urlEnd)

  localStorage.setItem('vIdNumLocalStorage', idNum);

  window.location.href='listen.html'

//  window.location=pieceLink ;
}
