import Big from 'big.js';

const Operate = (numberOne, numberTwo, operation) => {
  const one = Big(numberOne);
  const two = Big(numberTwo);

  switch (operation) {
    case '+':
      return one.plus(two).toString();
    case '-':
      return one.minus(two).toString();
    case 'x':
      return one.times(two).toString();
    case '÷':
      try {
        return one.div(two).toString();
      } catch (err) {
        return 'Enter Correct Values';
      }
    case '%':
      try {
        return one.mod(two).toString();
      } catch (err) {
        return 'Enter Correct Values';
      }
    default:
      throw Error(`Unknown Operation '${operation}'`);
  }
};

export default Operate;
