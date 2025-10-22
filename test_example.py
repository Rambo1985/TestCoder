"""
Example test cases for the Browser Automation Framework
"""
import pytest
import asyncio
from browser_manager import BrowserManager
from page_objects import HomePage, LoginPage
from loguru import logger


class TestWebsiteAutomation:
    def setup_method(self):
        """Setup method for each test"""
        self.browser_manager = BrowserManager()
        self.home_page = HomePage(self.browser_manager)
        self.login_page = LoginPage(self.browser_manager)
    
    def teardown_method(self):
        """Teardown method for each test"""
        asyncio.run(self.browser_manager.close())
    
    @pytest.mark.asyncio
    async def test_navigate_to_homepage(self):
        """Test navigating to homepage"""
        await self.home_page.navigate_to_url("https://www.python.org")
        title_result = await self.home_page.get_page_title()
        logger.info(f"Page title: {title_result}")
        assert title_result is not None
    
    @pytest.mark.asyncio
    async def test_search_functionality(self):
        """Test search functionality on python.org"""
        await self.home_page.navigate_to_url("https://www.python.org")
        search_result = await self.home_page.search("automation")
        logger.info(f"Search result: {search_result}")
        # Add assertions based on expected search behavior
    
    @pytest.mark.asyncio
    async def test_take_screenshot(self):
        """Test taking screenshots"""
        await self.home_page.navigate_to_url("https://www.python.org")
        screenshot_path = await self.home_page.take_screenshot("homepage_test.png")
        logger.info(f"Screenshot saved at: {screenshot_path}")
        assert screenshot_path is not None


# Run tests directly if this file is executed
if __name__ == "__main__":
    # Example of running a simple test scenario
    async def run_example():
        browser_manager = BrowserManager()
        home_page = HomePage(browser_manager)
        
        try:
            # Navigate to a website
            await home_page.navigate_to_url("https://www.python.org")
            
            # Take a screenshot
            await home_page.take_screenshot("python_org_homepage.png")
            
            # Perform a search
            await home_page.search("browser automation")
            
        finally:
            await browser_manager.close()
    
    # Run the example
    asyncio.run(run_example())