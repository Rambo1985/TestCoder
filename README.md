# Browser Automation Framework

A UI automation framework built on top of browser-use, providing an easy-to-use interface for web automation tasks.

## Features

- Easy-to-use page object model
- Built-in logging and reporting
- Screenshot capabilities
- Configurable browser settings
- Pytest integration for test automation

## Installation

1. Clone this repository
2. Install the required dependencies:

```bash
pip install -r requirements.txt
```

## Usage

### Running a Simple Automation Task

```bash
python main.py --url "https://www.python.org" --task "Find the search input field and enter 'automation', then click the search button"
```

### Running Tests

```bash
# Run all tests
pytest

# Run tests with HTML report
pytest --html=reports/report.html

# Run specific test
pytest test_example.py::TestWebsiteAutomation::test_navigate_to_homepage -v
```

### Using the Framework in Your Code

```python
import asyncio
from browser_manager import BrowserManager
from page_objects import HomePage

async def main():
    browser_manager = BrowserManager()
    home_page = HomePage(browser_manager)
    
    try:
        # Navigate to a website
        await home_page.navigate_to_url("https://www.python.org")
        
        # Perform actions
        await home_page.search("browser automation")
        
        # Take screenshots
        await home_page.take_screenshot("search_results.png")
        
    finally:
        await browser_manager.close()

# Run the automation
asyncio.run(main())
```

## Project Structure

```
/workspace/
├── browser_manager.py      # Core browser management functionality
├── page_objects.py         # Page object model implementation
├── config.py              # Configuration settings
├── main.py                # Main entry point for automation tasks
├── test_example.py        # Example test cases
├── requirements.txt       # Project dependencies
├── pytest.ini             # Pytest configuration
├── screenshots/           # Directory for screenshots
├── reports/              # Directory for test reports
└── logs/                 # Directory for logs
```

## Configuration

The framework can be configured via the `config.py` file:

- `BROWSER_HEADLESS`: Run browser in headless mode (default: False)
- `BROWSER_TIMEOUT`: Browser timeout in seconds (default: 30)
- `BROWSER_WIDTH`: Browser window width (default: 1920)
- `BROWSER_HEIGHT`: Browser window height (default: 1080)
- `SCREENSHOT_DIR`: Directory for saving screenshots (default: "./screenshots")
- `REPORT_DIR`: Directory for saving reports (default: "./reports")
- `LOG_DIR`: Directory for saving logs (default: "./logs")

## Page Object Model

The framework implements a Page Object Model pattern:

1. **BasePage**: Contains common methods for all pages
2. **Specific Page Classes**: Extend BasePage for specific functionality

Example:

```python
class SearchPage(BasePage):
    async def search(self, query: str):
        task = f"Find the search input field and enter '{query}', then click the search button"
        return await self.perform_task(task)
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.
