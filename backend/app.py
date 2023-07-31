from flask import Flask, jsonify
from flask_cors import CORS 
import requests
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
import time

app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
    data = {
    "info": "Welcome to the Novus Website!"
    }

    return jsonify(data)

@app.route("/Novus/<user>")
def welcome(user):
    return f'Welcome {user}, to the Novus web app'


#Local Close
@app.route("/apidata")
def status():
    url = "https://www.alphavantage.co/query?function=MARKET_STATUS&apikey=MB1K8ATOZKJGFKHM"
    
    info = requests.get(url)

    print("Page Status", info.status_code)

    data = info.json()

    return jsonify(data)
    

@app.route("/scrape1")
def stories():
        url = "https://www.marketwatch.com/story/san-francisco-landlords-borrowed-9-billion-from-wall-street-now-they-want-big-tax-relief-from-a-struggling-city-32b87134?mod=us-markets"

        page = requests.get(url)

        soup = BeautifulSoup(page.text, 'html.parser')

        paragraph = soup.find_all('p')[:12]
        
        new_scrape = []

        for i in paragraph:
            section = i.text
            new_scrape.append(section)

        if len(new_scrape) == 0:
            return "Empty List"
        
        else:
            return jsonify(new_scrape)
    
    

@app.route("/scrape2")
def article():  
    
        url = "https://www.marketwatch.com/story/why-the-10-year-treasury-yield-touching-3-85-could-mark-a-peak-for-the-rest-of-this-year-2d21ef72?mod=us-markets"

        page = requests.get(url)

        soup = BeautifulSoup(page.text,'html.parser')

        paragraphs = soup.find_all('p')[:17]
        
        new_scrape2 = []

        for i in paragraphs:
            sections = i.text
            new_scrape2.append(sections)

        if len(new_scrape2) == 0:
            return "Empty List"
         
        else:
            return jsonify(new_scrape2)


@app.route("/scrape3")
def marketarticle():
    url = "https://www.marketwatch.com/story/why-the-stock-market-shook-off-a-jekyll-and-hyde-fed-meeting-884d5ccc?mod=us-markets"

    page = requests.get(url)

    soup = BeautifulSoup(page.text,'html.parser')

    stocktext = soup.find_all('p')[:12]

    new_scrape3 = []

    for i in stocktext:
        rates = i.text
        new_scrape3.append(rates)
        
    if len(new_scrape3) == 0:
        return "Empty List"
    else:
        return jsonify(new_scrape3)


@app.route("/scrape4")
def marketarticles():
    url = "https://www.marketwatch.com/story/why-blackrock-is-reportedly-close-to-applying-for-bitcoin-etf-despite-regulatory-pressure-on-crypto-38aa1df9?mod=us-markets"

    page = requests.get(url)

    soup = BeautifulSoup(page.text,'html.parser')

    stocktexts = soup.find_all('p')[:13]

    new_scrape4 =[]

    for i in stocktexts:
        sectionss = i.text
        new_scrape4.append(sectionss)

    if len(new_scrape4) == 0:
        return "Empty List"

    else:
        return jsonify(new_scrape4)
    
@app.route('/graphdata1')
def graph():
    url = "https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=MB1K8ATOZKJGFKHM"

    page = requests.get(url)

    data = page.json()

    top_comp = []

    for i in data["top_gainers"]:
        info = i["price"]
        top_comp.append(info)
    
    if len(top_comp) == 0:
        return "Empty List"
    
    else:
        return jsonify(top_comp)
    
@app.route('/graphdata2')
def companies():
    url = "https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=MB1K8ATOZKJGFKHM"

    page = requests.get(url)

    data = page.json()

    tickers = []

    for i in data["top_gainers"]:
        info = i["ticker"]
        tickers.append(info)
    
    if len(tickers) == 0:
        return "Empty List"
    
    else:
        return jsonify(tickers)
    
@app.route('/automate')
def automate():
    try:
        driver_service = Service(executable_path='C:\novusdriver\chromedriver-win64\chromedriver.exe')
        coptions = webdriver.ChromeOptions()
        driver = webdriver.Chrome(service=driver_service, options=coptions)

        url = "https://www.google.com/"

        driver.get(url)

        search_box = driver.find_element(By.CLASS_NAME, 'gLFyf')

        search_box.send_keys('Learn more about Stocks')

        search_box.submit()

        time.sleep(30)

        driver.quit()
    except Exception as e:
        return f'Error is {e}'
    
    
@app.errorhandler(404)
def handleerror(e):
    print("Error", {e})
    return "Bad Gateaway", 400
    

if __name__ == '__main__':
    app.run(debug=True)
