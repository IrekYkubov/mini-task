let objects = [
  { login: 'Maks', email: 'maks@maks.com', company: 'METHED' },
  { login: 'Methed', email: 'info@methed.ru', company: 'METHED' },
  { login: 'Humidor', email: 'tomato@pomodoro.com', company: 'cucumber' }
]
const filter = (arr, needKey, val) => {
  let result = [];
  arr.forEach(element => {
    for (const [key, value] of Object.entries(element)) {
      if (key === needKey && value === val) {
        result.push(element);
      }
    }
  });
  return result;
};

export default filter;