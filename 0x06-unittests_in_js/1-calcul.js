function calculateNumber (type, a, b) {
    const A = Math.round(a);
    const B = Math.round(b);
    let result = null;
    if (type === 'SUM') {
      result = A + B;
    } else if (type === 'SUBTRACT') {
      result = A - B;
    } else if (type === 'DIVIDE') {
      if (B === 0) {
        return 'Error';
      } else {
        result = A / B;
      }
    }
    return result;
  }
  
  module.exports = calculateNumber;