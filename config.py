"""
Browser Automation Framework Configuration
"""
import os
from dataclasses import dataclass

@dataclass
class Config:
    # Browser settings
    BROWSER_HEADLESS: bool = False
    BROWSER_TIMEOUT: int = 30
    BROWSER_WIDTH: int = 1920
    BROWSER_HEIGHT: int = 1080
    
    # Test settings
    SCREENSHOT_DIR: str = "./screenshots"
    REPORT_DIR: str = "./reports"
    LOG_DIR: str = "./logs"
    
    # Create directories if they don't exist
    def __post_init__(self):
        os.makedirs(self.SCREENSHOT_DIR, exist_ok=True)
        os.makedirs(self.REPORT_DIR, exist_ok=True)
        os.makedirs(self.LOG_DIR, exist_ok=True)

# Global configuration instance
config = Config()