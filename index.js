const validateLineup = (lineup) => {
  let amount = []
  lineup.forEach(function(value) {
    amount.push(value.salary)
  });
}

//const totalSalary = (value) => {
//  
//}
module.exports = validateLineup