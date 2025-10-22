/**
 * Browser-Use Automation Framework - Main Entry Point
 */
const { BrowserUse } = require('@browser-use/core');
const { Config } = require('./config/config');
const { PageManager } = require('./helpers/page-manager');

class AutomationFramework {
  constructor(options = {}) {
    this.config = new Config(options);
    this.browserUse = new BrowserUse(this.config.getBrowserOptions());
    this.pageManager = new PageManager(this.browserUse);
    this.pages = {};
  }

  /**
   * Initialize the automation framework
   */
  async init() {
    console.log('Initializing Browser-Use Automation Framework...');
    await this.browserUse.init();
    console.log('Framework initialized successfully!');
  }

  /**
   * Navigate to a URL
   */
  async navigate(url) {
    return await this.browserUse.navigate(url);
  }

  /**
   * Get a page instance by name
   */
  getPage(pageName) {
    if (!this.pages[pageName]) {
      throw new Error(`Page ${pageName} not found. Please register it first.`);
    }
    return this.pages[pageName];
  }

  /**
   * Register a page class
   */
  registerPage(pageName, PageClass) {
    this.pages[pageName] = new PageClass(this.browserUse, this.pageManager);
  }

  /**
   * Execute a custom action
   */
  async executeAction(action, ...params) {
    return await this.browserUse.executeAction(action, ...params);
  }

  /**
   * Take a screenshot
   */
  async takeScreenshot(name = 'screenshot') {
    return await this.browserUse.takeScreenshot(name);
  }

  /**
   * Close the browser
   */
  async close() {
    console.log('Closing Browser-Use Automation Framework...');
    await this.browserUse.close();
    console.log('Framework closed successfully!');
  }

  /**
   * Wait for an element
   */
  async waitForElement(selector, timeout = 5000) {
    return await this.browserUse.waitForElement(selector, timeout);
  }

  /**
   * Find an element
   */
  async findElement(selector) {
    return await this.browserUse.findElement(selector);
  }

  /**
   * Click an element
   */
  async click(selector) {
    return await this.browserUse.click(selector);
  }

  /**
   * Fill an input field
   */
  async fillInput(selector, text) {
    return await this.browserUse.fillInput(selector, text);
  }

  /**
   * Get text from an element
   */
  async getText(selector) {
    return await this.browserUse.getText(selector);
  }
}

module.exports = { AutomationFramework };