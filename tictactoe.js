
const btnRestart = document.querySelector('button')
btnRestart.addEventListener('click', function(){
  location.reload()
})

let turn = ''
let xArray = []
let oArray = []
const winSet = [['00','11','22'],
                ['02','11','20'],
                ['00','01','02'],
                ['10','11','12'],
                ['20','21','22'],
                ['00','10','20'],
                ['01','11','21'],
                ['02','12','22'],
              ]
              
function checkWinner(o, x, t) {
  if (o.length >= 3 && t === 'O') {
    for (set of winSet) {
      if (o.includes(set[0]) && o.includes(set[1]) && o.includes(set[2])) {
        setTimeout(function() {alert('O is Winner');}, 500);
        break;
      }
    }
  }
  if (x.length >= 3 && t === 'X') {
    for (set of winSet) {
      if (x.includes(set[0]) && x.includes(set[1]) && x.includes(set[2])) {
        setTimeout(function() {alert('X is Winner');}, 500);
        break;
      }
    }
  }
}

const boxes = document.querySelectorAll('td')
for (const box of boxes) {
  box.addEventListener('click', function() {
    // console.log('TURN: ' + turn)
    const status = box.innerText;
    const id = box.getAttribute('id')
    if (status === '') {
      console.log('CURRENT TURN: ' + turn)
      if (turn === '' || turn == 'X') 
      {
        box.innerText='X'   
        xArray.push(id)   
        checkWinner(oArray, xArray, turn)
        turn = 'O'
      } 
      else if (turn === 'O') {
        box.innerText='O'   
        oArray.push(id)   
        checkWinner(oArray, xArray, turn)
        turn = 'X'
      }
    }
  })
}




