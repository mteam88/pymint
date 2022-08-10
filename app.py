from flask import Flask, render_template, request
import json
import random
import mint
app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route('/donate/<from_address>', methods=['POST'])
def donate(from_address):
    return mint.generate_donate_transaction(from_address)

@app.route('/mintbyid/<from_address>/<id>', methods=['POST'])
def mintbyid(from_address, id):
    return mint.generate_mintbyid_transaction(from_address, id)

@app.route('/currentprice', methods=['POST', 'GET'])
def currentprice():
    print(mint.get_current_price())
    return mint.get_current_price()

app.run(debug=True)