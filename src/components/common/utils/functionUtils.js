export const monthsArray = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export const lettersArray = (employees) => {
  let arr = [];
  employees.map(record=> {
    const letter = record.get('surname').slice(0,1);
    if (arr.indexOf(letter) === -1) {
      arr.push(letter);
    }
    return null;
  });
  return arr.sort();
};

export const defaultScrollProperties = {
  duration: 400,
  smooth: true,
  offset: -50,
};