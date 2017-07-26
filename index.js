const eslintrc = require('./eslintrc.json');

module.exports = rules => {
  if (rules && typeof rules === 'object') {
    eslintrc.rules = Object.assign({}, eslintrc.rules, rules);
  }
  return eslintrc;
};
