document.addEventListener('DOMContenLoaded', () =>{

    //card options
    const cardArray = [
        {
            name:'fries',
            img: 'images/fries.png'
        },
        {
            name:'cheeseburger',
            img: 'images/cheeseburger.png'
        }
    ]

    const grid = document.querySelector('.grid')
    var cardsChosen = []
    var cardsChosenId = []

    //create your boead
    function createBorad() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }

    
    //check for matches

    //flip your card
    function flipcard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId.name])
        cardsChosenId.push(cardId)
    }


    createBorad()

}) 