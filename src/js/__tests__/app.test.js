import checkLuhn from '../CheckLuhn.js';
import checkPayment from '../CheckPayment.js';

test('checkLuhn should return true', () => {
  expect(checkLuhn('4893 4702 1277 8911')).toBe(true);
});

test('checkLuhn should return false', () => {
  expect(checkLuhn('4893 4702 1277 8912')).toBe(false);
});

test.each([
  ['2200240728327020', true],
  ['2200240728327021', false],
  ['2200240728327022', false],
])('should return correct result for %s', (card, result) => {
  expect(checkLuhn(card)).toBe(result);
});

test('should return visa', () => {
  expect(checkPayment(4893470212778911)).toBe('visa');
});

test.each([
  [375944451251251, 'amex'],
  [2204222222222222, 'mir'],
  [4444444444444, 'visa'],
  [5201111111111111, 'mastercard'],
  [2301111111111111, 'mastercard'],
  [347000000000000, 'amex'],
  [3011111111111119, 'diners'],
  [3500000000000000, 'jcb'],
  [3542578965232154, 'jcb'],
])('should return correct result for %s', (card, result) => {
  expect(checkPayment(card)).toBe(result);
});