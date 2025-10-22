/**
 * Page Manager for Browser-Use Automation Framework
 * Handles common page operations and utilities
 */
class PageManager {
  constructor(browserUse) {
    this.browserUse = browserUse;
  }

  /**
   * Wait for page to load completely
   */
  async waitForPageLoad(timeout = 10000) {
    await this.browserUse.executeAction('wait', timeout);
  }

  /**
   * Get current URL
   */
  async getCurrentUrl() {
    return await this.browserUse.executeAction('getUrl');
  }

  /**
   * Get page title
   */
  async getTitle() {
    return await this.browserUse.executeAction('getTitle');
  }

  /**
   * Refresh the page
   */
  async refresh() {
    await this.browserUse.executeAction('refresh');
  }

  /**
   * Go back in history
   */
  async goBack() {
    await this.browserUse.executeAction('goBack');
  }

  /**
   * Go forward in history
   */
  async goForward() {
    await this.browserUse.executeAction('goForward');
  }

  /**
   * Check if element exists
   */
  async elementExists(selector) {
    try {
      const element = await this.browserUse.findElement(selector);
      return !!element;
    } catch (error) {
      return false;
    }
  }

  /**
   * Wait for element to be visible
   */
  async waitForElementVisible(selector, timeout = 10000) {
    return await this.browserUse.waitForElement(selector, timeout);
  }

  /**
   * Wait for element to be clickable
   */
  async waitForElementClickable(selector, timeout = 10000) {
    await this.waitForElementVisible(selector, timeout);
    // Additional check for clickability can be implemented here
    return true;
  }

  /**
   * Scroll to element
   */
  async scrollToElement(selector) {
    return await this.browserUse.executeAction('scrollToElement', selector);
  }

  /**
   * Get element text
   */
  async getElementText(selector) {
    return await this.browserUse.getText(selector);
  }

  /**
   * Get element attribute
   */
  async getElementAttribute(selector, attribute) {
    return await this.browserUse.executeAction('getAttribute', selector, attribute);
  }

  /**
   * Check if element is enabled
   */
  async isElementEnabled(selector) {
    return await this.browserUse.executeAction('isEnabled', selector);
  }

  /**
   * Check if element is selected (for checkboxes, radio buttons)
   */
  async isElementSelected(selector) {
    return await this.browserUse.executeAction('isSelected', selector);
  }

  /**
   * Get all cookies
   */
  async getCookies() {
    return await this.browserUse.executeAction('getCookies');
  }

  /**
   * Set a cookie
   */
  async setCookie(cookie) {
    return await this.browserUse.executeAction('setCookie', cookie);
  }

  /**
   * Clear browser cookies
   */
  async clearCookies() {
    return await this.browserUse.executeAction('clearCookies');
  }

  /**
   * Execute custom JavaScript
   */
  async executeScript(script, ...args) {
    return await this.browserUse.executeAction('evaluate', script, ...args);
  }
}

module.exports = { PageManager };