const validateLineup = (lineup) => {

}

const totalSalary = (lineup) => {
  let amount = []
  lineup.forEach(function(value) {
    amount.push(value.salary)
  });
  const amountSum = amount.reduce((total, money) => total + money, 0);
}
module.exports = validateLineup