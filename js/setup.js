'use strict';

var FIRST_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var LAST_NAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var PLAYERS = 4;

var userDialog = document.querySelector('.setup');
var setupSimilar = userDialog.querySelector('.setup-similar');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var getRandom = function (min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

var getWizards = function (playersNumber) {
  var result = [];
  var getWizard = function (firstName, lastName, coatColor, eyesColor) {
    return {
      name: firstName[getRandom(0, FIRST_NAMES.length - 1)] + ' ' + lastName[getRandom(0, LAST_NAMES.length - 1)],
      coatColor: coatColor[getRandom(0, COAT_COLORS.length - 1)],
      eyesColor: eyesColor[getRandom(0, EYES_COLORS.length - 1)]
    };
  };

  for (var i = 0; i < playersNumber; i++) {
    result[i] = getWizard(FIRST_NAMES, LAST_NAMES, COAT_COLORS, EYES_COLORS);
  }

  return result;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var getFragment = function (arr) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < arr.length; i++) {
    fragment.appendChild(renderWizard(arr[i]));
  }

  return fragment;
};

var wizards = getWizards(PLAYERS);
similarListElement.appendChild(getFragment(wizards));

userDialog.classList.remove('hidden');
setupSimilar.classList.remove('hidden');
