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
