from flask import Flask, render_template, request
import json
import random
import mint
app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route('/donate/<from_address>', methods=['POST', 'GET'])
def donate(from_address):
    return mint.generate_donate_transaction(from_address)

app.run(debug=True)