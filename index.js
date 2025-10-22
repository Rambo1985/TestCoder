/**
 * Browser-Use Automation Framework - Main Entry Point
 * Provides easy access to the framework components
 */
const { AutomationFramework } = require('./src/index');
const { BasePage } = require('./src/pages/base-page');
const { TestUtils } = require('./src/utils/test-utils');
const { Config } = require('./src/config/config');

module.exports = {
  AutomationFramework,
  BasePage,
  TestUtils,
  Config
};

/**
 * Example usage:
 * 
 * const { AutomationFramework } = require('./index');
 * 
 * (async () => {
 *   const framework = new AutomationFramework();
 *   await framework.init();
 *   
 *   await framework.navigate('https://example.com');
 *   
 *   await framework.close();
 * })();
 */