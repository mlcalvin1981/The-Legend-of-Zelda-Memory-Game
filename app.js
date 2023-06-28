document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: 'arrow',
        img: 'images/arrow.png'
      },
      {
        name: 'bait',
        img: 'images/bait.png'
      },
      {
        name: 'bomb',
        img: 'images/bomb.png'
      },
      {
        name: 'candle',
        img: 'images/candle.png'
      },
      {
        name: 'heart',
        img: 'images/heart.png'
      },
      {
        name: 'wand',
        img: 'images/wand.png'
      },
      {
        name: 'arrow',
        img: 'images/arrow.png'
      },
      {
        name: 'bait',
        img: 'images/bait.png'
      },
      {
        name: 'bomb',
        img: 'images/bomb.png'
      },
      {
        name: 'candle',
        img: 'images/candle.png'
      },
      {
        name: 'heart',
        img: 'images/heart.png'
      },
      {
        name: 'wand',
        img: 'images/wand.png'
      }
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        cards[optionOneId].setAttribute('src', 'images/black.png')
        cards[optionTwoId].setAttribute('src', 'images/black.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        
      }
      cardsChosen = []
      cardsChosenId = []
      
      if  (cardsWon.length === cardArray.length/2) {
        alert("THANKS LINK, YOU'RE THE HERO OF HYRULE.");
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })
  
  