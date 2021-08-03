/**
 * Returns a readable with zeroes, for example 07-07-2021.
 * It's needed to have a date value on input
 */
export const today = new Date();
const todayPlusMili = new Date().setDate(new Date().getDate() + 1);
export const todayPlus = new Date(todayPlusMili);

export const dateToValue = (date) => {
  const regularDate = new Date(date);
  return `${regularDate.getFullYear()}-${
    regularDate.getMonth() + 1 > 9
      ? regularDate.getMonth() + 1
      : "0" + (regularDate.getMonth() + 1)
  }-${
    regularDate.getDate() > 9
      ? regularDate.getDate()
      : "0" + regularDate.getDate()
  }`;
};

export const dateToValuePlus = `${todayPlus.getFullYear()}-${
  todayPlus.getMonth() + 1 > 9
    ? todayPlus.getMonth() + 1
    : "0" + (todayPlus.getMonth() + 1)
}-${todayPlus.getDate() > 9 ? todayPlus.getDate() : "0" + todayPlus.getDate()}`;

export const valueToDate = new Date(dateToValue);
export const valueToDatePlus = new Date(dateToValuePlus);

export const dateToJS = (date) => {
  const regularDate = new Date(date);
  return `${regularDate.getFullYear()}/${
    regularDate.getMonth() + 1 > 9
      ? regularDate.getMonth() + 1
      : "0" + (regularDate.getMonth() + 1)
  }/${
    regularDate.getDate() > 9
      ? regularDate.getDate()
      : "0" + regularDate.getDate()
  }`;
};
