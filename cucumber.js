module.exports = {
  default: {
    paths: ['features/**/*.feature'],
    require: ['step_definitions/**/*.ts'],
    requireModule: ['ts-node/register'],
    format: ['progress-bar', 'html:test-results/cucumber-report.html'],
    parallel: 2,
    timeout: 30000
  }
};
