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

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  var title = function () {
    ctx.fillStyle = '#000';

    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP + TEXT_HEIGHT);
    ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP + (TEXT_HEIGHT * 2));
  };

  title();

  var maxTime = times.reduce(function (maxElement, item) {
    if (item > maxElement) {
      maxElement = item;
    }
    return maxElement;
  });

  var getRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - FONT_GAP);
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - (FONT_GAP * 2) - TEXT_HEIGHT - (barHeight * times[i]) / maxTime);

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(25, 181, 254, ' + ('0.' + getRandomNumber(1, 9)) + ')';
    }

    ctx.fillRect(CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - FONT_GAP - TEXT_HEIGHT, BAR_WIDTH, -(barHeight * times[i]) / maxTime);
  }
};
