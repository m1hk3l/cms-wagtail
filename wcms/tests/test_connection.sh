from selenium import webdriver
from selenium.webdriver.firefox.service import Service
from selenium.webdriver.firefox.options import Options


options = Options()
options.headless = False
options.binary_location = "/Users/mihkelk/.local/bin/firefox-developer"

service = Service()
browser = webdriver.Firefox(service=service, options=options)

browser.get("http://localhost:8000")

print(browser.title)
assert "Congratulations!" in browser.title
print("OK")

browser.quit()
