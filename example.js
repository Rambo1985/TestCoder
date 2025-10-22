/**
 * Example script demonstrating the Browser-Use Automation Framework
 */
const { AutomationFramework } = require('./index');

async function runExample() {
  console.log('Starting Browser-Use Automation Framework example...');
  
  // Initialize the framework with custom options
  const framework = new AutomationFramework({
    browser: 'chromium', // Can be 'chromium', 'firefox', or 'webkit'
    headless: false,     // Set to true to run in headless mode
    timeout: 30000,
    viewport: {
      width: 1280,
      height: 720
    }
  });
  
  try {
    // Initialize the browser
    await framework.init();
    
    // Navigate to a website
    console.log('Navigating to example.com...');
    await framework.navigate('https://example.com');
    
    // Take a screenshot
    await framework.takeScreenshot('homepage');
    console.log('Screenshot taken: homepage.png');
    
    // Example of interacting with elements (if they exist on the page)
    // await framework.fillInput('#search-input', 'search term');
    // await framework.click('#search-button');
    
    // Get page title
    const title = await framework.executeAction('getTitle');
    console.log(`Page title: ${title}`);
    
    console.log('Example completed successfully!');
  } catch (error) {
    console.error('Error during automation:', error);
  } finally {
    // Close the browser
    await framework.close();
    console.log('Browser closed.');
  }
}

// Run the example
if (require.main === module) {
  runExample().catch(console.error);
}

module.exports = { runExample };