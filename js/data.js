import { getRandomInteger, getRandom } from './util.js';
let id = 0;
const DESCRIPTION = [
  'Дал, дал, ушел',
  'Запомните, а то забудете',
  'Тарелку после гречки сразу мой',
  'На рахlате же есть',
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAME = [
  'Кагlбула',
  'Абджапар',
  'Бахъухъи',
  'Къади',
  'Къурамухlад',
  'Арсен',
  'Боря',
];

const QUANTITY = 25;

const PHOTO_ID = {
  min: 1,
  max: 25
};

const ID_COMMENTS = {
  min: 1,
  max: 200
};

const NUMBER_OF_COMMENTS = {
  min: 0,
  max: 30
};

const LIKES = {
  min: 15,
  max: 200
};

const AVATAR = {
  min: 1,
  max: 6
};

const generatePhotoId = getRandom(PHOTO_ID.min, PHOTO_ID.max);
const generateIdComments = getRandom(ID_COMMENTS.min, ID_COMMENTS.max);

const generateGetAccess = (el) => el[getRandomInteger(0, el.length - 1)];

const getComment = function () {
  const array = [];
  for (let i = 0; i < getRandomInteger(NUMBER_OF_COMMENTS.min, NUMBER_OF_COMMENTS.max); i++) {
    array.push({
      id: generateIdComments(),
      avatar: `img/avatar-${getRandomInteger(AVATAR.min, AVATAR.max)}.svg`,
      message: generateGetAccess(MESSAGE),
      name: generateGetAccess(NAME)
    });
  }
  return array;
};

const getObject = () => ({
  id: id++,
  url: `photos/${generatePhotoId()}.jpg`,
  description: generateGetAccess(DESCRIPTION),
  likes: getRandomInteger(LIKES.min, LIKES.max),
  comments: getComment()
});

const generateData = () => Array.from({ length: QUANTITY }, getObject);

export {generateData};
