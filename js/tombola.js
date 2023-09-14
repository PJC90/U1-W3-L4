const creaCelleTabella = function () {
  const idTombola = document.getElementById('tombola')
  for (let i = 1; i <= 76; i++) {
    const cella = document.createElement('div')
    cella.classList.add('css-cella')
    cella.innerText = i
    idTombola.appendChild(cella)
  }
}
creaCelleTabella()

const pressButton = document.getElementById('random-number')
pressButton.addEventListener('click', function (e) {
  e.preventDefault()
  const randomNumber = Math.floor(Math.random() * 76) + 1
  console.log('Numero casuale:', randomNumber)
  const randomNumberResult = document.getElementById('risultato-casuale')
  randomNumberResult.textContent = `numero generato: ${randomNumber}`
})
