var card = window.document.getElementById('card')
var icon1 = window.document.getElementById('icon1')
var icon2 = window.document.getElementById('icon2')

function Volts (){
    card.src = 'volts.svg'
    icon1.setAttribute("onclick", "Bandit()")
    icon2.setAttribute("onclick", "Bandit()")
}

function Bandit (){
    card.src = 'bandit.svg'
    icon1.setAttribute("onclick", "Volts()")
    icon2.setAttribute("onclick", "Volts()")
}