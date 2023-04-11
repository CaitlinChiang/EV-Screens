import RPi.GPIO as GPIO
from flask import Flask, jsonify

app = Flask(__name__)
GPIO.setmode(GPIO.BCM)

GPIO.setup(17, GPIO.IN, pull_up_down=GPIO.PUD_UP)
GPIO.setup(27, GPIO.IN, pull_up_down=GPIO.PUD_UP)
GPIO.setup(6,  GPIO.IN, pull_up_down=GPIO.PUD_UP)
GPIO.setup(13, GPIO.IN, pull_up_down=GPIO.PUD_UP)
GPIO.setup(19, GPIO.IN, pull_up_down=GPIO.PUD_UP)
GPIO.setup(26, GPIO.IN, pull_up_down=GPIO.PUD_UP)

@app.route('/leverleft', methods=['GET'])
def leverleft():
    data = GPIO.input(17)
    return jsonify(data)

@app.route('/leverright', methods=['GET'])
def leverright():
    data = GPIO.input(27)
    return jsonify(data)

@app.route('/button1left', methods=['GET'])
def button1left():
    data = GPIO.input(6)
    return jsonify(data)

@app.route('/button2right', methods=['GET'])
def button2right():
    data = GPIO.input(13)
    return jsonify(data)

@app.route('/button3left', methods=['GET'])
def button3left():
    data = GPIO.input(19)
    return jsonify(data)

@app.route('/button4right', methods=['GET'])
def button4right():
    data = GPIO.input(26)
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
