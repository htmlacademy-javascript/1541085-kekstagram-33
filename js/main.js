const PUBLISHED_IMG_COUNT = 25;

//Массив имен для комментариев
const NAMES = [
  'Кагlбула',
  'Абджапар',
  'Бахъухъи',
  'Къади',
  'Къурамухlад',
  'Арсен',
  'Боря',
];

//Массив описаний для фотографий
const DESCRIPTION = [
  'Дал, дал, ушел',
  'Запомните, а то забудете',
  'Тарелку после гречки сразу мой',
  'На рахlате же есть',
];

//Массив комментариев
const MESSAGE = [
  'Все отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!',
];


//Функция дает случайное число
const getRandomInteger = (minNumber, maxNumber) => {
  const minValue = Math.ceil(Math.min(Math.abs(minNumber), Math.abs(maxNumber)));
  const maxValue = Math.floor(Math.max(Math.abs(minNumber), Math.abs(maxNumber)));
  return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
};


//Функция дает уникальное число
const getUniqueNumber = () => {
  let number = 0;
  return function () {
    return number++;
  };
};

const photoId = getUniqueNumber();
const commentId = getUniqueNumber();
const urlNumber = getUniqueNumber();

//Функция дает случайный элемент массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

//Функция создает комментарии
const getComment = () => ({
  id: commentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGE),
  name: getRandomArrayElement(NAMES),
});

//Функция создает объект
const createPhotoDescription = () => ({
  id: photoId(),
  url: `photos/${urlNumber()}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: getRandomInteger(0, 30)}, getComment),
});

//Функция создает описание
const photoDescription = Array.from({length: PUBLISHED_IMG_COUNT}, createPhotoDescription);

console.log(photoDescription);

