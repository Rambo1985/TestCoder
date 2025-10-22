/**
 * Example Test for Browser-Use Automation Framework
 * Demonstrates how to write tests using the framework
 */
const { AutomationFramework } = require('../index');
const { ExamplePage } = require('../pages/example-page');

describe('Example Tests', () => {
  let framework;
  let examplePage;

  beforeAll(async () => {
    // Initialize the automation framework
    framework = new AutomationFramework({
      browser: 'chromium',
      headless: true,
      timeout: 30000
    });
    
    await framework.init();
    
    // Register the example page
    framework.registerPage('example', ExamplePage);
    examplePage = framework.getPage('example');
  });

  afterAll(async () => {
    // Close the framework after all tests
    await framework.close();
  });

  test('should perform a search successfully', async () => {
    // Navigate to the example page
    await examplePage.navigate('https://example.com');
    
    // Perform a search
    await examplePage.search('test query');
    
    // Verify results are displayed
    const results = await examplePage.getSearchResults();
    expect(results).not.toBeNull();
    expect(results.length).toBeGreaterThan(0);
  });

  test('should login successfully', async () => {
    // Navigate to the example page
    await examplePage.navigate('https://example.com');
    
    // Navigate to login
    await examplePage.navigateToLogin();
    
    // Perform login
    await examplePage.login('testuser', 'password123');
    
    // Verify login was successful
    const isLoggedIn = await examplePage.isLoggedIn();
    expect(isLoggedIn).toBe(true);
  });

  test('should handle page elements correctly', async () => {
    // Navigate to the example page
    await examplePage.navigate('https://example.com');
    
    // Check if search box exists
    const searchBoxExists = await examplePage.elementExists(examplePage.selectors.searchBox);
    expect(searchBoxExists).toBe(true);
    
    // Get text from an element
    const elementText = await examplePage.getElementText(examplePage.selectors.navigationMenu);
    expect(elementText).not.toBeNull();
  });
});