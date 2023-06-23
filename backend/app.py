from flask import Flask
from flask_cors import CORS 
import requests

app = Flask(__name__)
CORS(app) 
@app.route("/")
def index():
    test = {
    "Info": "Welcome to the Novus Website!"
    }

    return test

@app.route("/<user>")
def welcome(user):
    return f'Welcome {user}, to the Novus web app'

@app.route("/marketregions")
def market():
    url = "https://www.alphavantage.co/query?function=MARKET_STATUS&apikey=XX9MEU6BO8D3SWYN"

    info = requests.get(url)

    print("Page Status", info.status_code)

    data = info.json()

    all_regions = []

    for i in data["markets"]:
        countries = i["region"]
        all_regions.append(countries)

    if len(all_regions) == 0:
        return "Data not found"
    else:
        return all_regions


    
@app.route("/marketcompanies")
def companes():
    url = "https://www.alphavantage.co/query?function=MARKET_STATUS&apikey=XX9MEU6BO8D3SWYN"

    info = requests.get(url)

    print("Page Status", info.status_code)

    data = info.json()
    
    all_companies = []

    for j in data["markets"]:
        companytype = j["primary_exchanges"]
        all_companies.append(companytype)

    if len(all_companies) == 0:
        return "Data not found"
    else:
        return all_companies
    
#Local open
@app.route("/localopen")
def open():
    url = "https://www.alphavantage.co/query?function=MARKET_STATUS&apikey=XX9MEU6BO8D3SWYN"
    
    info = requests.get(url)

    print("Page Status", info.status_code)

    data = info.json()
    
    all_open_times = []

    for i in data["markets"]:
        open_time = i["local_open"]
        all_open_times.append(open_time)
        
    if len(all_open_times) == 0:
        return "Data not found"
    else:
        return all_open_times

#Local_Close
@app.route("/localclose")
def close():
    url = "https://www.alphavantage.co/query?function=MARKET_STATUS&apikey=XX9MEU6BO8D3SWYN"
    
    info = requests.get(url)

    print("Page Status", info.status_code)

    data = info.json()
    
    all_status = []

    for i in data["markets"]:
        status = i["current_status"]
        all_status.append(status)
        
    if len(all_status) == 0:
        return "Data not found"
    else:
        return all_status


@app.route("/marketnotes")
def notes():
    url = "https://www.alphavantage.co/query?function=MARKET_STATUS&apikey=XX9MEU6BO8D3SWYN"
    
    info = requests.get(url)

    print("Page Status", info.status_code)

    data = info.json()
    market_notes = []

    for i in data["markets"]:
        urgent = i["notes"]
        if(urgent == ""):
            continue
        else:
            market_notes.append(urgent)

    if len(market_notes) == 0:
        return "Data not found"
    else:
        return market_notes
    


@app.route("/marketstatus")
def status():
    url = "https://www.alphavantage.co/query?function=MARKET_STATUS&apikey=XX9MEU6BO8D3SWYN"
    
    info = requests.get(url)

    print("Page Status", info.status_code)

    data = info.json()
    
    all_close_times = []

    for i in data["markets"]:
        open_close = i["local_close"]


if __name__ == '__main__':
    app.run(debug=True)
