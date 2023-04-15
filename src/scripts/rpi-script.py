import RPi.GPIO as GPIO
from flask import Flask, jsonify, Response
from flask_cors import CORS
from time import sleep
# import io
from flask_socketio import SocketIO
from picamera import PiCamera
from camera_pi import Camera

app = Flask(__name__)
socketio = SocketIO(app)

CORS(app)

camera = PiCamera()
# camera.resolution = (800, 480)
# camera.framerate = 10

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

# CODE FOR CAMERA LIVE STREAM
def start_camera():
    camera.start_preview()
    sleep(2)

@app.route('/video_feed', methods=['GET'])
def video_feed():
    return Camera().get_video_stream()

# @app.route('/video')
# def video():
#     return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

# def generate_frames():
#     while True:
#         stream = io.BytesIO()
#         camera.capture(stream, format='jpeg', use_video_port=True)
#         frame = stream.getvalue()
#         yield (b'--frame\r\n'
#                b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')
#         time.sleep(0.1)

if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0')
