// @flow

const addZero = (number: number) => (number < 10 ? `0${number}` : number);

export const convertDateInstanceToDateTime = (d: typeof Date) => {
  const year = d.getFullYear();
  const date = d.getDate();
  const month = d.getMonth() + 1;
  const hours = d.getHours();
  const minutes = d.getMinutes();
  return `${addZero(date)}-${addZero(month)}-${year} ${addZero(hours)}:${addZero(minutes)}`;
};
