"""
Browser Manager for UI Automation Framework
Handles browser initialization, management, and interaction using browser-use
"""
import asyncio
import time
from browser_use import Agent
from config import config
from loguru import logger
import os


class BrowserManager:
    def __init__(self):
        self.agent = None
        self.browser = None
        
    async def initialize_agent(self, max_steps: int = 100):
        """
        Initialize the browser-use agent
        """
        try:
            # Create agent with browser settings
            self.agent = Agent(
                task='',
                llm=None,  # Will be configured per task
                max_steps=max_steps
            )
            logger.info("Browser agent initialized successfully")
            return self.agent
        except Exception as e:
            logger.error(f"Failed to initialize browser agent: {e}")
            raise

    async def navigate_to(self, url: str):
        """
        Navigate to a specific URL
        """
        if not self.agent:
            await self.initialize_agent()
        
        try:
            result = await self.agent.run(f"Navigate to {url}")
            logger.info(f"Navigated to {url}")
            return result
        except Exception as e:
            logger.error(f"Failed to navigate to {url}: {e}")
            raise

    async def perform_action(self, task: str):
        """
        Perform a specific action using browser-use
        """
        if not self.agent:
            await self.initialize_agent()
        
        try:
            result = await self.agent.run(task)
            logger.info(f"Performed action: {task}")
            return result
        except Exception as e:
            logger.error(f"Failed to perform action '{task}': {e}")
            raise

    async def take_screenshot(self, filename: str = None):
        """
        Take a screenshot of the current page
        """
        if not filename:
            filename = f"screenshot_{int(time.time())}.png"
        
        filepath = os.path.join(config.SCREENSHOT_DIR, filename)
        
        # Using browser-use functionality to take screenshot
        result = await self.perform_action(f"Take a screenshot and save as {filepath}")
        logger.info(f"Screenshot saved: {filepath}")
        return filepath

    async def close(self):
        """
        Close the browser
        """
        if self.agent and self.agent.browser:
            await self.agent.browser.close()
            logger.info("Browser closed")