from flask import Flask, render_template, Response
from picamera import PiCamera

app = Flask(__name__)
camera = PiCamera()

def gen():
    while True:
        frame = camera.get_frame()
        
        yield (b'--frame\r\n' b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

@app.route('/video_feed')
def video_feed():
    return Response(gen(), mimetype='multipart/x-mixed-replace; boundary=frame')

@app.route('/')
def index():
    return render_template('camera.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
