module.exports = function toReadable(number) {
  const numwords = [
    "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
    "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
  ];

  const tens = [
    "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"
  ];

  if (number < 20) {
    return numwords[number];
  }

  if (number >= 20 && number < 100) {
    const tensDigit = Math.floor(number / 10);
    const unitsDigit = number % 10;
    if (unitsDigit === 0) {
      return tens[tensDigit];
    } else {
      return tens[tensDigit] + " " + numwords[unitsDigit];
    }
  }

  if (number >= 100) {
    const hundredsDigit = Math.floor(number / 100);
    const tensDigit = Math.floor((number % 100) / 10);
    const unitsDigit = number % 10;
    if (tensDigit === 0 && unitsDigit === 0) {
      return numwords[hundredsDigit] + " hundred";
    } else if (tensDigit === 0) {
      return numwords[hundredsDigit] + " hundred " + numwords[unitsDigit];
    } else if (tensDigit === 1) {
      return numwords[hundredsDigit] + " hundred " + numwords[number % 100];
    } else if (unitsDigit === 0) {
      return numwords[hundredsDigit] + " hundred " + tens[tensDigit];
    } else {
      return numwords[hundredsDigit] + " hundred " + tens[tensDigit] + " " + numwords[unitsDigit];
    }
  }
}
