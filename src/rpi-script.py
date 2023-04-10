import RPi.GPIO as GPIO
from flask import Flask, jsonify

app = Flask(__name__)
GPIO.setmode(GPIO.BCM)

GPIO.setup(17, GPIO.IN)
GPIO.setup(27, GPIO.IN)
GPIO.setup(6, GPIO.IN)
GPIO.setup(13, GPIO.IN)
GPIO.setup(19, GPIO.IN)
GPIO.setup(26, GPIO.IN)

@app.route('/leverleft', methods=['GET'])
def leverleft():
    value = GPIO.input(17)
    return jsonify({'value': value})

@app.route('/leverright', methods=['GET'])
def leverright():
    value = GPIO.input(27)
    return jsonify({'value': value})

@app.route('/button1left', methods=['GET'])
def button1left():
    value = GPIO.input(6)
    return jsonify({'value': value})

@app.route('/button2right', methods=['GET'])
def button2right():
    value = GPIO.input(13)
    return jsonify({'value': value})

@app.route('/button3left', methods=['GET'])
def button3left():
    value = GPIO.input(19)
    return jsonify({'value': value})

@app.route('/button4right', methods=['GET'])
def button4right():
    value = GPIO.input(26)
    return jsonify({'value': value})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
