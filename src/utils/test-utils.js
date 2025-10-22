/**
 * Test Utilities for Browser-Use Automation Framework
 * Provides common utility functions for tests
 */
class TestUtils {
  /**
   * Generate a random string
   */
  static generateRandomString(length = 10) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  /**
   * Generate a random email
   */
  static generateRandomEmail() {
    const username = this.generateRandomString(8).toLowerCase();
    return `${username}@example.com`;
  }

  /**
   * Wait for a specified amount of time
   */
  static async wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Retry an operation with a maximum number of attempts
   */
  static async retry(operation, maxAttempts = 3, delay = 1000) {
    let lastError;
    
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        return await operation();
      } catch (error) {
        lastError = error;
        if (attempt === maxAttempts) {
          throw lastError;
        }
        console.log(`Attempt ${attempt} failed, retrying in ${delay}ms...`);
        await this.wait(delay);
      }
    }
  }

  /**
   * Take a screenshot with timestamp
   */
  static async takeScreenshotWithTimestamp(browserUse, name = 'screenshot') {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const screenshotName = `${name}_${timestamp}`;
    return await browserUse.takeScreenshot(screenshotName);
  }

  /**
   * Format test data
   */
  static formatTestData(data) {
    return JSON.parse(JSON.stringify(data));
  }

  /**
   * Validate URL format
   */
  static isValidUrl(string) {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  }

  /**
   * Get current timestamp
   */
  static getCurrentTimestamp() {
    return new Date().toISOString();
  }

  /**
   * Create a data provider for tests
   */
  static createDataProvider(testData) {
    return testData.map(data => [JSON.stringify(data), data]);
  }
}

module.exports = { TestUtils };