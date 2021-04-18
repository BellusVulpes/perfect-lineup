const validateLineup = (lineup) => {
  if (totalSalary(lineup) && numberOfPlayers(lineup) && playerPosition(lineup) && game(lineup) && team(lineup)) {
    return true
  } else {
    return false
  }
}

const game = (lineup) => {
  let game = []
  let counter = 1
  let maxCounter = 1

  lineup.forEach(function (value) {
    game.push(value.gameId)
  })
  const sortGame = game.sort((a, b) => a - b)

  for (let i = 1; i < sortGame.length; i++) {
    if (sortGame[i - 1] === sortGame[i]) {

}

const playerPosition = (lineup) => {
  let job = []
  let OF = []
  let P = []
  let C = []
  let oneB = []
  let twoB = []
  let threeB = []
  let SS = []


  lineup.forEach(function (value) {
    job.push(value.position)
  })
  for (let i = 0; i < job.length; i++) {
    if (job[i] === 'OF') {
      OF.push(job[i])
    }
    if (job[i] === 'P') {
      P.push(job[i])
    }
    if (job[i] === 'C') {
      C.push(job[i])
    }
    if (job[i] === '1B') {
      oneB.push(job[i])
    }
    if (job[i] === '2B') {
      twoB.push(job[i])
    }
    if (job[i] === '3B') {
      threeB.push(job[i])
    }
    if (job[i] === 'SS') {
      SS.push(job[i])
    }
  }
  if (OF.length === 3 && P.length === 1 && C.length === 1 && oneB.length === 1 && twoB.length === 1 && threeB.length === 1 && SS.length === 1) {
    return true
  } else {
    return false
  }
}

const numberOfPlayers = (lineup) => {
  let player = []

  lineup.forEach(function (value) {
    player.push(value.position)
  })

  if (player.length === 9) {
    return true
  } else {
    return false
  }
}

const totalSalary = (lineup) => {
  let amount = []

  lineup.forEach(function (value) {
    amount.push(value.salary)
  })
  const amountSum = amount.reduce((total, money) => total + money, 0)

  if (amountSum <= 45000) {
    return true
  } else {
    return false
  }
}

module.exports = validateLineup
