export const logOperation = (data, result) => {
  console.log('called with data:', data, 'result:', result);
};

/**
 * takes in 0-6
 * returns the day of the week
 */
export function mapNumberToDay(num, cb = logOperation) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  cb(num, days[num]);
  return days[num];
}
