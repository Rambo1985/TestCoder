/**
 * Base Page Class for Browser-Use Automation Framework
 * Provides common functionality for all page objects
 */
class BasePage {
  constructor(browserUse, pageManager) {
    this.browserUse = browserUse;
    this.pageManager = pageManager;
    this.timeout = 10000;
  }

  /**
   * Navigate to the page
   */
  async navigate(url) {
    await this.browserUse.navigate(url);
    await this.waitForPage();
  }

  /**
   * Wait for the page to be ready
   * Override this method in child classes
   */
  async waitForPage() {
    // Default implementation - can be overridden
    await this.pageManager.waitForPageLoad();
  }

  /**
   * Wait for an element
   */
  async waitForElement(selector) {
    return await this.browserUse.waitForElement(selector, this.timeout);
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

  /**
   * Take a screenshot of the page
   */
  async takeScreenshot(name) {
    return await this.browserUse.takeScreenshot(name);
  }

  /**
   * Check if element exists
   */
  async elementExists(selector) {
    return await this.pageManager.elementExists(selector);
  }

  /**
   * Wait for element to be visible
   */
  async waitForElementVisible(selector) {
    return await this.pageManager.waitForElementVisible(selector);
  }

  /**
   * Wait for element to be clickable
   */
  async waitForElementClickable(selector) {
    return await this.pageManager.waitForElementClickable(selector);
  }

  /**
   * Get element text
   */
  async getElementText(selector) {
    return await this.pageManager.getElementText(selector);
  }

  /**
   * Get element attribute
   */
  async getElementAttribute(selector, attribute) {
    return await this.pageManager.getElementAttribute(selector, attribute);
  }

  /**
   * Scroll to element
   */
  async scrollToElement(selector) {
    return await this.pageManager.scrollToElement(selector);
  }

  /**
   * Execute custom JavaScript
   */
  async executeScript(script, ...args) {
    return await this.pageManager.executeScript(script, ...args);
  }
}

module.exports = { BasePage };