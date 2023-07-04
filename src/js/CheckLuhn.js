export default function checkLuhn(setValue) {
    let ch = 0;
    const num = String(setValue).replace(/\D/g, '');
    const isOdd = num.length % 2 !== 0;
    if (num === '') {
      return false;
    }
    for (let i = 0; i < num.length; i += 1) {
      let n = parseInt(num[i], 10);
      /* eslint no-cond-assign: 2 */
      ch += (isOdd || 0) === (i % 2) && (n *= 2) > 9 ? (n - 9) : n;
    }
    return (ch % 10) === 0;
  }