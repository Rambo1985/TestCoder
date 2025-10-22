# Browser-Use Automation Framework

A comprehensive UI automation framework built on top of browser-use for reliable end-to-end testing.

## Features

- Page Object Model implementation
- Cross-browser support (Chromium, Firefox, WebKit)
- Configurable browser options
- Comprehensive element interaction methods
- Screenshot and reporting capabilities
- Test utilities and helpers
- Retry mechanisms for flaky tests

## Installation

```bash
npm install
```

## Quick Start

```javascript
const { AutomationFramework } = require('./index');

(async () => {
  const framework = new AutomationFramework({
    browser: 'chromium',
    headless: true,
    timeout: 30000
  });
  
  await framework.init();
  
  // Navigate to a page
  await framework.navigate('https://example.com');
  
  // Perform actions
  await framework.fillInput('#search', 'test query');
  await framework.click('#search-button');
  
  // Close the browser
  await framework.close();
})();
```

## Page Object Example

```javascript
const { BasePage } = require('../index');

class SearchPage extends BasePage {
  constructor(browserUse, pageManager) {
    super(browserUse, pageManager);
    
    this.selectors = {
      searchBox: '#search-box',
      searchButton: '#search-button',
      results: '.search-results'
    };
  }
  
  async search(query) {
    await this.fillInput(this.selectors.searchBox, query);
    await this.click(this.selectors.searchButton);
    await this.waitForElement(this.selectors.results);
  }
}

module.exports = { SearchPage };
```

## Test Example

```javascript
const { AutomationFramework } = require('../index');
const { SearchPage } = require('../pages/search-page');

describe('Search Tests', () => {
  let framework;
  let searchPage;

  beforeAll(async () => {
    framework = new AutomationFramework();
    await framework.init();
    
    framework.registerPage('search', SearchPage);
    searchPage = framework.getPage('search');
  });

  afterAll(async () => {
    await framework.close();
  });

  test('should return search results', async () => {
    await searchPage.navigate('https://example.com');
    await searchPage.search('test query');
    
    const results = await searchPage.getSearchResults();
    expect(results).not.toBeNull();
  });
});
```

## Framework Structure

```
src/
├── index.js              # Main framework entry point
├── config/               # Configuration classes
│   └── config.js
├── pages/                # Page object classes
│   ├── base-page.js
│   └── example-page.js
├── tests/                # Test files
│   └── example-test.js
├── utils/                # Utility functions
│   └── test-utils.js
└── helpers/              # Helper classes
    └── page-manager.js
```

## Configuration Options

The framework supports various configuration options:

- `browser`: Target browser (chromium, firefox, webkit)
- `headless`: Run in headless mode (default: true)
- `timeout`: Default timeout for operations (default: 30000ms)
- `viewport`: Browser viewport dimensions
- `screenshotPath`: Path to save screenshots
- `reportPath`: Path to save test reports
- `devtools`: Enable browser devtools (default: false)
- `slowMo`: Slow down operations for debugging (default: 0)

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch
```

## License

MIT
```