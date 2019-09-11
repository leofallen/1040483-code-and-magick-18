var fireballSize = 22;
var getFireballSpeed = function(left) {
  return left ? 5 : 2;
};

wizardSpeed = 3;
wizardWidth = 70;

var getWizardHeight = function() {
  return 1.337 * wizardWidth;
};
var getWizardX = function(width) {
  return (width / 2) - (wizardWidth / 2);
};
var getWizardY = function(height) {
  return height / 3;
}
