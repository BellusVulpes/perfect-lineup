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
      if (++counter > maxCounter) maxCounter = counter
    } else {
      counter = 1
    }
  }
  if (maxCounter > 3) {
    return false
  } else {
    return true
  }
}

const team = (lineup) => {
  let team = []
  let counter = 1
  let maxCounter = 1

  lineup.forEach(function (value) {
    team.push(value.teamId)
  })
  const sortTeam = team.sort((a, b) => a - b)

  for (let i = 1; i < sortTeam.length; i++) {
    if (sortTeam[i - 1] === sortTeam[i]) {
      if (++counter > maxCounter) maxCounter = counter
    } else {
      counter = 1
    }
  }
  if (maxCounter > 2) {
    return false
  } else {
    return true
  }
}

const playerPosition = (lineup) => {
  let job = []
  let jobExample = ['P', 'C', '1B', '2B', '3B', 'SS', 'OF', 'OF', 'OF']

  lineup.forEach(function (value) {
    job.push(value.position)
  })

  const sortJob = job.sort((a, b) => a - b)
  const sortJobExample = jobExample.sort((a, b) => a - b)

  if (JSON.stringify(sortJob) !== JSON.stringify(sortJobExample)) {
    return false
  } else {
    return true
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
