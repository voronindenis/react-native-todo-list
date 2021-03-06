// @flow

const addZero = (number: number) => (number < 10 ? `0${number}` : number);
/**
 * Convert Date instance to date time format DD-MM-YYYY HH:mm
 *
 * @param d {Date}
 * @returns {string}
 */
export const convertDateInstanceToDateTime = (d: ?Date) => {
  if (d) {
    const year = d.getFullYear();
    const date = d.getDate();
    const month = d.getMonth() + 1;
    const hours = d.getHours();
    const minutes = d.getMinutes();
    return `${addZero(date)}-${addZero(month)}-${year} ${addZero(hours)}:${addZero(minutes)}`;
  }
  return '';
};

/**
 * replace date to month for creating correct date
 *
 * @param value {string}
 * @returns {string}
 */
export const replaceDateToMonths = (value: string) => {
  const [fullDate, time] = value.split(' ');
  const [date, month, year] = fullDate.split('-');
  return `${month}-${date}-${year} ${time}`;
};
