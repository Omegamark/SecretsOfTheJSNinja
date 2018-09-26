var exports = (module.exports = {});

exports.assert = function(value, text) {
  var testResults = {}
  testResults.passFailCheck = value ? "pass" : "fail";
  testResults.response = text;
  console.log(testResults);
};

exports.pass = function(text) {
  assert(true, text);
};
exports.fail = function(text) {
  assert(false, text);
};
exports.report = function(text) {
  pass(text);
};
