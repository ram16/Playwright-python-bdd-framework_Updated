
from page_objects.base_page import BasePage

class HomePage(BasePage):
    def click_navigation_link(self, link_text: str):
        self.page.click(f"text={link_text}")
