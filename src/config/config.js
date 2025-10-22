/**
 * Configuration class for Browser-Use Automation Framework
 */
class Config {
  constructor(options = {}) {
    // Default configuration
    this.config = {
      browser: options.browser || 'chromium', // chromium, firefox, webkit
      headless: options.headless !== undefined ? options.headless : true,
      timeout: options.timeout || 30000,
      viewport: {
        width: options.viewport?.width || 1280,
        height: options.viewport?.height || 720
      },
      screenshotPath: options.screenshotPath || './screenshots/',
      reportPath: options.reportPath || './reports/',
      defaultWaitTimeout: options.defaultWaitTimeout || 10000,
      userAgent: options.userAgent || 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      devtools: options.devtools || false,
      slowMo: options.slowMo || 0,
      args: options.args || []
    };
  }

  getBrowserOptions() {
    return {
      browser: this.config.browser,
      headless: this.config.headless,
      viewport: this.config.viewport,
      timeout: this.config.timeout,
      devtools: this.config.devtools,
      slowMo: this.config.slowMo,
      args: this.config.args
    };
  }

  get(key) {
    return this.config[key];
  }

  set(key, value) {
    this.config[key] = value;
  }

  getAll() {
    return { ...this.config };
  }
}

module.exports = { Config };