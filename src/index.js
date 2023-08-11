module.exports = function toReadable(number) {
  var a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
  var b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if ((number = number.toString()).length > 9) return 'overflow';
   num = ('000000000' + number).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
  if (!num) return; var str = '';
   str += (num[0] == 0) ? (a[Number(num[0])] || b[num[0][0]] + ' ' + a[num[0][0]]) + 'zero' : '';
   str += (num[1] != 0) ? (a[Number(num[1])] || b[num[1][0]] + ' ' + a[num[1][1]]) + 'crore ' : '';
   str += (num[2] != 0) ? (a[Number(num[2])] || b[num[2][0]] + ' ' + a[num[2][1]]) + 'lakh ' : '';
   str += (num[3] != 0) ? (a[Number(num[3])] || b[num[3][0]] + ' ' + a[num[3][1]]) + 'thousand ' : '';
   str += (num[4] != 0) ? (a[Number(num[4])] || b[num[4][0]] + ' ' + a[num[4][1]]) + 'hundred ' : '';
   str += (num[5] != 0) ? ((str != '') ? '' : '') + (a[Number(num[5])] || b[num[5][0]] + ' ' + a[num[5][1]]) : '';
  return str.trim();
}

