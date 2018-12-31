'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 50;
var FONT_GAP = 10;
var TEXT_HEIGHT = 20;
var barHeight = (CLOUD_HEIGHT - FONT_GAP - (TEXT_HEIGHT * 3) - GAP);
var BAR_WIDTH = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx) {
  ctx.fillStyle = '#000';

  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP + TEXT_HEIGHT);
  ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP + (TEXT_HEIGHT * 2));
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  arr.reduce(function (acc, item) {
    if (item > acc) {
      maxElement = item;
    }
  });

  return maxElement;
};

var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var renderBar = function (ctx, arr, arr2) {
  var maxTime = getMaxElement(arr);

  arr.forEach(function (item, i) {
    var positionX = CLOUD_X + GAP + (GAP + BAR_WIDTH) * i;
    var positionY = CLOUD_Y + CLOUD_HEIGHT - FONT_GAP;

    ctx.fillStyle = '#000';
    ctx.fillText(arr2[i], positionX, positionY);
    ctx.fillText(Math.round(item), positionX, CLOUD_Y + CLOUD_HEIGHT - (FONT_GAP * 2) - TEXT_HEIGHT - (barHeight * item) / maxTime);
    ctx.fillStyle = (arr2[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'rgba(25, 181, 254, ' + ('0.' + getRandomNumber(1, 9)) + ')';
    ctx.fillRect(positionX, positionY - TEXT_HEIGHT, BAR_WIDTH, -(barHeight * item) / maxTime);
  });
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  renderText(ctx);
  renderBar(ctx, times, players);
};
