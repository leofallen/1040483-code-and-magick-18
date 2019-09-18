'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 20;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_GAP = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderTitle = function (ctx) {
  ctx.fillStyle = '#000';
  ctx.font = '16px PT mono';
  ctx.fillText('Ура Вы победили!', CLOUD_X + FONT_GAP, FONT_GAP + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP, FONT_GAP + FONT_GAP + FONT_GAP);
};

var renderNames = function (ctx, arr, index) {
  ctx.fillText(arr[index], CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * index, CLOUD_HEIGHT - GAP);
};

var renderTimes = function (ctx, arr, index, maxTime) {
  ctx.fillText(Math.round(arr[index]), CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * index, CLOUD_HEIGHT - (BAR_HEIGHT * arr[index]) / maxTime - BAR_WIDTH);
};

var renderBars = function (ctx, arr, index, maxTime) {
  ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * index, CLOUD_HEIGHT - (GAP + FONT_GAP), BAR_WIDTH, -(BAR_HEIGHT * arr[index]) / maxTime);
};

var getRandom = function (min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'rgb(255, 255, 255)');

  var maxTime = getMaxElement(times);

  renderTitle(ctx);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    renderNames(ctx, names, i);
    renderTimes(ctx, times, i, maxTime);

    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    if (names[i] !== 'Вы') {
      ctx.fillStyle = 'hsl(255,' + getRandom(1, 99) + '%' + ', 30%)';
    }
    renderBars(ctx, times, i, maxTime);
  }
};
