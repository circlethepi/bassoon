//get piece quiz results from quiz
var listenPieceID = localStorage.getItem('vIdNumLocalStorage') ;
const listenButton = document.getElementById('listen-btn') ;

//get piece title vars
const pieceTitle = document.getElementById('piecetitle') ;
var pieceTitleDisplay = ''
var partTime = 0

//setting up audio url
var audioSourceBeg = 'listen/'
var audioSourceEnd = '.mp3' ;
var audio = document.getElementById('audio') ;
var source = document.getElementById('audioSource') ;
var piecePlay = '' ;

//play controls
const playButton = document.getElementById('play-btn') ;


//begin playing pieceID
function beginPlayingPiece() {

  filePieceID = listenPieceID.slice(2) ;
  piecePlay = audioSourceBeg.concat(filePieceID, audioSourceEnd) ;

  console.log(piecePlay)

  source.src = piecePlay

  console.log(source.src)

  audio.load() ;
}



//MAKE TITLE
//random number for time part of title
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min) ;
  max = Math.floor(max) ;
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}


function generateTitle() {
 partTime = getRandomIntInclusive(0,2) ;

//GETTING TITLE COMPONENTS
//past, present, future
    var partOne = Number(listenPieceID.charAt(6)) - 1;


  //  var partTime = 0

    var nameOne = [
      ["ancient ", "forgotten ", "primeval "], //past
      ["unbroken ", "instant ", "everlasting "], //present
      ["coming ", "fated ", "approaching "] //future
    ]

//heart body mind
    var partTwo = Number(listenPieceID.charAt(1)) -1 ;

    var nameTwo = ['spiritual ', 'physical ', 'mental ']

//twelve epic sounding nouns localStorage
    var partThreeA = Number(listenPieceID.charAt(7)) - 1; //dawn dusk
    var partThreeB = Number(listenPieceID.charAt(6)) - 1; //wind land sea
    var partThreeC = Number(listenPieceID.charAt(5)) - 1; // rain sunrise
  //  var partThree = partThreeA.concat(partThreeB, partThreeC)

    var nameThree = [
        [
          ['awakening ', 'light '], //dawn-wind...rain/sun
          ['beginnings ', 'sunrise '],  //dawn-land...rain/sun
          ['omens ', 'journey '] //dawn-sea...rain/sun
        ],

        [
          ['dreams ', 'paradox '], //dusk-wind
          ['turbulence ','moonrise '], //dusk-land
          ['tempest ','myth ']   //dusk-sea
        ]
    ];


//four texturish
    var partFourA = Number(listenPieceID.charAt(3)) -1; //why how
    var partFourB = Number(listenPieceID.charAt(2)) -1; //hard soft
  //  var partFour = partFourA.concat(partFourB)

    var nameFour = [
      ['rigid ', 'tensile '], //why
      ['methodical ', 'virtuostic '] //how
    ]

//nine more nouns
    var partFiveA = partTwo;
    var partFiveB = Number(listenPieceID.charAt(0)) - 1; //black white grey

    var nameFive = [
      ['withering', 'purity', 'morality'], //heart
      ['strength', 'beauty', 'command'], //body
      ['envy', 'curiosity', 'wisdom'] //mind
    ]

  var titleOne = nameOne[partOne][partTime] ;
  var titleTwo = nameTwo[partTwo] ;
  var titleThree = nameThree[partThreeA][partThreeB][partThreeC] ;
  var titleFour = nameFour[partFourA][partFourB] ;
  var titleFive = nameFive[partFiveA][partFiveB] ;

  pieceTitleDisplay = 'the ' + titleOne + titleThree + 'of ' + titleFour + titleFive;

  console.log(pieceTitleDisplay)
  pieceTitle.innerText = pieceTitleDisplay;
  piecetitle.classList.remove('hide')


  beginPlayingPiece()

}

listenButton.addEventListener('click', generateTitle())
