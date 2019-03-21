export default (expenses) => {
  return expenses.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.amount
  }, 0);
};