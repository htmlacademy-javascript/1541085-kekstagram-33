// функция проверяет длину строки

const getLengthString = (string, maxLength) => (string.length <= maxLength);
getLengthString('Проверка', 15);

// Функция проверяет строку на палиндромность.

function isPalindrom(string) {
  string = string.replaceAll(' ', '');
  string = string.toLowerCase();
  const reversed = string.split('').reverse().join('');
  return string === reversed;
}
isPalindrom('Леша на полке клопа нашел');

// Функция принимает строку и возвращает положительное число или NaN если строка не содержит чисел.

const getNumber = (string) => {
  let number = '';
  string = string.toString().replaceAll(' ', '');
  for (let i = 0; i < string.length; i++) {
    if (!(isNaN(Number(string[i])))) {
      number += string[i];
    }
  }
  return parseInt(number, 10);
};

getNumber(' агент, 10.7');


//Переводит часы в минуты.
const getMinutes = (time) => {
  const start = time.split(':').map((elements) => parseInt(elements, 10));
  start[0] *= 60;
  const minutes = start.reduce((sum, elements) => sum + elements, 0);
  return minutes;
};

const getTime = (startHour, endHour, startMeeting, durationMeeting) => {
  const startMinutes = getMinutes(startHour);
  const endMinutes = getMinutes(endHour);
  const startHourMeeting = getMinutes(startMeeting);
  return (startHourMeeting + durationMeeting <= endMinutes && startMinutes <= startHourMeeting);
};

getTime('8:05', '17:05', '08:10', 50);
