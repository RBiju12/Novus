from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS 
import requests
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
import time
import openai
import psycopg2

openai.api_key = ""

app = Flask(__name__, static_folder='../frontend/build', static_url_path='/')
CORS(app)
#Enabled CORS to allow for my api endpoints to be protected and for my backend and frontend to connect

def connect_db():
    dbname = ''
    user = ''
    password = ''
    host = ''
    port = ''

    connection = f"dbname={dbname} user={user} password={password} host={host} port={port}"
    conn = psycopg2.connect(connection)
    return conn
#function to connect to PostgreSQL database

@app.route("/")
def index():
    return send_from_directory(app.static_folder, "index.html")

@app.route("/welcome")
def hello():
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
#Send json data to frontend to be extracted

#All 4 of my scraped data endpoints that I parsed and extracted the text using web scraping technologies

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
    
#5 of my graph data points to be rendered on my frontend via the REACT apex charts component
    
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
        return jsonify({"companies":top_comp})
    
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
    
@app.route('/graphdata3')
def change():
    url = "https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=MB1K8ATOZKJGFKHM"

    page = requests.get(url)

    data = page.json()

    change_data = []

    for i in data["top_gainers"]:
        amount = i["change_amount"]
        change_data.append(amount)
    
    if len(change_data) == 0:
        return "Empty List"
    
    else:
        return jsonify({"change":change_data})
    
@app.route('/graphdata4')
def percentage():
    url = "https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=MB1K8ATOZKJGFKHM"

    page = requests.get(url)

    data = page.json()

    change_per = []

    for i in data["top_gainers"]:
        amount = i["change_percentage"]
        change_per.append(amount)
    
    if len(change_per) == 0:
        return "Empty List"
    
    else:
        return jsonify({"percentage":change_per})
    
@app.route('/graphdata5')
def volumes():
    url = "https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=MB1K8ATOZKJGFKHM"

    page = requests.get(url)

    data = page.json()

    vol = []

    for i in data["top_gainers"]:
        amount = i["volume"]
        vol.append(amount)
    
    if len(vol) == 0:
        return "Empty List"
    
    else:
        return jsonify({"volume":vol})
    
#Selenium endpoint that automates the search of Stock info and price
    
@app.route('/automate')
def automate():
    try:
        driver_service = Service(executable_path='C:\novusdriver\chromedriver-win64\chromedriver.exe')
        coptions = webdriver.ChromeOptions()
        driver = webdriver.Chrome(service=driver_service, options=coptions)

        url = "https://www.google.com/"

        driver.get(url)

        search_box = driver.find_element(By.CLASS_NAME, 'gLFyf')
        #Extract the google search engine button and sends a query

        search_box.send_keys('Learn more about Stocks')

        search_box.submit()

        time.sleep(30)
        #Delays for 30 seconds to visualize the data

        driver.quit()
    except Exception as e:
        return f'Error is {e}'
    

#Chatbot endpoint that fetches the openAI data and grabs the responses from Chat GPT and sends to my frontend
@app.route('/chatbot')
def chatbot():
    try:
        input_message = [
        {"role": "system", "content": "What are some good stock companies to invest in?"}
        ]

        response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=input_message
        )

        generator = response['choices'][0]['message']['content']

        print(generator)

        time.sleep(3)

        return jsonify({"data": generator})
    except Exception as e:
        return jsonify({"error": str(e)})
    

#Database endpoint that is a POST request that fetches from my frontend and grabes the firstname, lastname, and email field and 
#displays in my PostgreSQL database

@app.route('/db', methods=['POST'])
def database():
    try:
        data = request.get_json()

        print(data)

        firstname = data.get('firstname')
        lastname = data.get('lastname')
        email = data.get('email')

        conn = connect_db()

        cursor = conn.cursor()

        query = "INSERT INTO users (firstname, lastname, email) VALUES (%s, %s, %s)"

        cursor.execute(query, (firstname, lastname, email))

        conn.commit()

        cursor.close()
        
        conn.close()

        return jsonify({"message", "Data saved"})
    
    except Exception as e:
        return jsonify({"Error": str(e)})


    
#Handles all of my 404 errors
@app.errorhandler(404)
def handleerror(e):
    print("Error", {e})
    return "Bad Gateaway", 400
    

if __name__ == '__main__':
    app.run(debug=True)
