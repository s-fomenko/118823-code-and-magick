'use strict';

var showHiddenBlocks = function () {
  var setup = document.querySelector('.setup');
  var setupSimilar = document.querySelector('.setup-similar');

  setup.classList.remove('hidden');
  setupSimilar.classList.remove('hidden');
};

var createMockData = function () {
  var mockData = [];

  var firstNameList = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];

  var lastNameList = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];

  var coatColorList = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var eyesColorList = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  for (var i = 0; i < 4; i++) {
    var dataItem = {};

    dataItem.name = firstNameList[Math.floor(Math.random() * firstNameList.length)] + ' ' + lastNameList[Math.floor(Math.random() * lastNameList.length)];
    dataItem.coatColor = coatColorList[Math.floor(Math.random() * coatColorList.length)];
    dataItem.eyesColor = eyesColorList[Math.floor(Math.random() * eyesColorList.length)];

    mockData.push(dataItem);
  }
  return mockData;
};

var createWizardItem = function (data) {
  var wizardItem = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var item = wizardItem.cloneNode(true);

  item.querySelector('.setup-similar-label').textContent = data.name;
  item.querySelector('.wizard-coat').style.fill = data.coatColor;
  item.querySelector('.wizard-eyes').style.fill = data.eyesColor;

  return item;
};

var createWizardItems = function (data) {
  var fragment = document.createDocumentFragment();
  var wizardList = document.querySelector('.setup-similar-list');

  data.forEach(function (item) {
    fragment.appendChild(createWizardItem(item));
  });

  wizardList.appendChild(fragment);
};

var mockData = createMockData();

createWizardItems(mockData);

showHiddenBlocks();

