import { calcTimerLabel } from './calcTimerLabel';

test('should return 0:34 when duration is 1min and 26 seconds passed', () => {
  const result = calcTimerLabel(
    1*60*1000,
    new Date(2018, 3, 1, 12, 0, 0, 0),
    new Date(2018, 3, 1, 12, 0, 26, 4)
  ).toString();

  expect(result).toBe('0:34');
});

test('should return 2:34 when duration is 3min and 26 seconds passed', () => {
  const result = calcTimerLabel(
    3*60*1000,
    new Date(2018, 3, 1, 12, 0, 0, 0),
    new Date(2018, 3, 1, 12, 0, 26, 4)
  ).toString();

  expect(result).toBe('2:34');
});

test('should return 12:34 when duration is 30min and 17:26 passed', () => {
  const result = calcTimerLabel(
    30*60*1000,
    new Date(2018, 3, 1, 12, 0, 0, 0),
    new Date(2018, 3, 1, 12, 17, 26, 4)
  ).toString();

  expect(result).toBe('12:34');
});

test('should return -0:26 when duration is 1min and 1:26 passed', () => {
  const result = calcTimerLabel(
    1*60*1000,
    new Date(2018, 3, 1, 12, 0, 0, 0),
    new Date(2018, 3, 1, 12, 1, 26, 4)
  ).toString();

  expect(result).toBe('-0:26');
});

test('should return -0:26 when duration is 3min and 3:26 passed', () => {
  const result = calcTimerLabel(
    3*60*1000,
    new Date(2018, 3, 1, 12, 0, 0, 0),
    new Date(2018, 3, 1, 12, 3, 26, 4)
  ).toString();

  expect(result).toBe('-0:26');
});
