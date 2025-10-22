"""
Base Page Object Model for UI Automation Framework
Provides common methods and elements for page objects
"""
from browser_manager import BrowserManager
from loguru import logger
import asyncio


class BasePage:
    def __init__(self, browser_manager: BrowserManager):
        self.browser_manager = browser_manager
    
    async def navigate_to_url(self, url: str):
        """Navigate to a specific URL"""
        try:
            result = await self.browser_manager.navigate_to(url)
            logger.info(f"Navigated to {url}")
            return result
        except Exception as e:
            logger.error(f"Failed to navigate to {url}: {e}")
            raise
    
    async def perform_task(self, task: str):
        """Perform a specific task using browser-use"""
        try:
            result = await self.browser_manager.perform_action(task)
            logger.info(f"Performed task: {task}")
            return result
        except Exception as e:
            logger.error(f"Failed to perform task '{task}': {e}")
            raise
    
    async def wait_for_page_load(self, timeout: int = 10):
        """Wait for page to load"""
        await asyncio.sleep(timeout)
        logger.info("Waited for page to load")
    
    async def take_screenshot(self, name: str = None):
        """Take a screenshot"""
        try:
            filepath = await self.browser_manager.take_screenshot(name)
            logger.info(f"Screenshot taken: {filepath}")
            return filepath
        except Exception as e:
            logger.error(f"Failed to take screenshot: {e}")
            raise


class HomePage(BasePage):
    """Home Page Object"""
    
    async def search(self, query: str):
        """Perform a search"""
        task = f"Find the search input field and enter '{query}', then click the search button"
        return await self.perform_task(task)
    
    async def get_page_title(self):
        """Get the current page title"""
        task = "Get the page title"
        return await self.perform_task(task)


class LoginPage(BasePage):
    """Login Page Object"""
    
    async def login(self, username: str, password: str):
        """Login with credentials"""
        task = f"Enter '{username}' in the username field, enter '{password}' in the password field, and click the login button"
        return await self.perform_task(task)
    
    async def is_login_successful(self):
        """Check if login was successful"""
        task = "Check if the page contains a successful login message or elements that indicate logged in state"
        return await self.perform_task(task)