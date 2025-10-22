/**
 * Example Page Object for Browser-Use Automation Framework
 * Demonstrates how to create page objects using the framework
 */
const { BasePage } = require('./base-page');

class ExamplePage extends BasePage {
  constructor(browserUse, pageManager) {
    super(browserUse, pageManager);
    
    // Define selectors for elements on this page
    this.selectors = {
      searchBox: '#search-box',
      searchButton: '#search-button',
      resultsContainer: '#results',
      navigationMenu: '.nav-menu',
      loginButton: '#login-btn',
      usernameField: '#username',
      passwordField: '#password',
      submitButton: '#submit'
    };
  }

  /**
   * Wait for the example page to be ready
   */
  async waitForPage() {
    await this.waitForElement(this.selectors.searchBox);
  }

  /**
   * Perform a search
   */
  async search(query) {
    await this.fillInput(this.selectors.searchBox, query);
    await this.click(this.selectors.searchButton);
    await this.waitForElement(this.selectors.resultsContainer);
  }

  /**
   * Get search results
   */
  async getSearchResults() {
    const resultsElement = await this.findElement(this.selectors.resultsContainer);
    return await this.getElementText(this.selectors.resultsContainer);
  }

  /**
   * Navigate to login page
   */
  async navigateToLogin() {
    await this.click(this.selectors.loginButton);
  }

  /**
   * Login with credentials
   */
  async login(username, password) {
    await this.fillInput(this.selectors.usernameField, username);
    await this.fillInput(this.selectors.passwordField, password);
    await this.click(this.selectors.submitButton);
  }

  /**
   * Check if user is logged in
   */
  async isLoggedIn() {
    // This would check for a logout button or user profile element
    return await this.elementExists('#logout-btn');
  }
}

module.exports = { ExamplePage };