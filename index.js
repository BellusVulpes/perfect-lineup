const validateLineup = (lineup) => {
  if (totalSalary(lineup) && numberOfPlayers(lineup) && playerPosition(lineup)) {
    return true
  } else {
    return false
  }
}

const playerPosition = (lineup) => {
  let job = []

  lineup.forEach(function (value) {
    job.push(value.position)
  })
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
