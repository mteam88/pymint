from flask import Flask, render_template, request
import json
import random
app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

app.run(debug=True)