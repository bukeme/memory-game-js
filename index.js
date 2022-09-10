const memoryCards = document.querySelectorAll('.memory-card')



let isFlipped = false
let lockBoard = false
let first, second
memoryCards.forEach(function(card) {
    card.style.order = Math.floor(Math.random() * 12)
    card.addEventListener('click', flip)
})


function flip() {
    if (lockBoard) {
        return
    }
    this.classList.add('flip')
    if (!isFlipped) {
        first = this
        isFlipped = true
    } else {
        if (this == first) {
            return
        }
        second = this

        if (first.dataset.name == second.dataset.name) {
            first.removeEventListener('click', flip)
            second.removeEventListener('click', flip)
        } else {
            lockBoard = true
            setTimeout(function() {
                first.classList.remove('flip')
                second.classList.remove('flip')
                lockBoard = false
            }, 1500)
        }
        isFlipped = false
    }

}