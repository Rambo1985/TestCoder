"""
Main entry point for the Browser Automation Framework
"""
import asyncio
import argparse
from browser_manager import BrowserManager
from page_objects import HomePage
from config import config
from loguru import logger
import sys


async def run_automation_task(url: str, task: str, max_steps: int = 100):
    """
    Run a specific automation task
    """
    browser_manager = BrowserManager()
    
    try:
        # Initialize the agent
        await browser_manager.initialize_agent(max_steps)
        
        # Navigate to the URL
        await browser_manager.navigate_to(url)
        
        # Perform the specified task
        result = await browser_manager.perform_action(task)
        
        logger.info(f"Task completed. Result: {result}")
        return result
        
    except Exception as e:
        logger.error(f"Error during automation: {e}")
        raise
    finally:
        await browser_manager.close()


def main():
    parser = argparse.ArgumentParser(description="Browser Automation Framework")
    parser.add_argument("--url", type=str, help="URL to navigate to", default="https://www.python.org")
    parser.add_argument("--task", type=str, help="Task to perform", required=True)
    parser.add_argument("--max-steps", type=int, default=100, help="Maximum steps for the agent")
    
    args = parser.parse_args()
    
    # Run the automation task
    try:
        result = asyncio.run(run_automation_task(args.url, args.task, args.max_steps))
        print(f"Automation completed with result: {result}")
    except Exception as e:
        print(f"Automation failed: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()