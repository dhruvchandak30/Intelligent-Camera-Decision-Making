# server.py
import cv2
from flask import Flask, request
from flask_socketio import SocketIO, emit
from threading import Thread
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
socketio = SocketIO(app, cors_allowed_origins="http://localhost:3000")


@app.route("/members", methods=["GET", "POST"])
def members():
    if request.method == "GET":
        return {"members": ["Member1", "Member2", "Member3"]}
    elif request.method == "POST":
        data = request.get_json()
        print("Received POST request:", data)
        emit("scissors_detected", {"members": [
             "Scissors Detected"]}, broadcast=True)
        dataset_url = 'https://www.kaggle.com/username/dataset-name'
        od.download(dataset_url)
        return {"status": "success"}


def start_camera():
    cap = cv2.VideoCapture(0)
    cap.set(3, 1280)
    cap.set(4, 720)

    classNames = []
    classFile = 'coco.names'
    with open(classFile, 'rt') as f:
        classNames = f.read().rstrip('\n').split('\n')

    configPath = "ssd_mobilenet_v3_large_coco_2020_01_14.pbtxt"
    weightsPath = "frozen_inference_graph.pb"
    net = cv2.dnn_DetectionModel(weightsPath, configPath)
    net.setInputSize(320, 320)
    net.setInputScale(1.0/127.5)
    net.setInputMean((127.5, 127.5, 127.5))
    net.setInputSwapRB(True)

    while True:
        success, img = cap.read()
        classIds, confs, bbox = net.detect(img, confThreshold=0.5)

        if len(classIds) != 0:
            for classId, confidence, box in zip(classIds.flatten(), confs.flatten(), bbox):
                if 0 <= classId-1 < len(classNames):
                    cv2.rectangle(img, box, color=(255, 255, 0), thickness=2)
                    cv2.putText(img, classNames[classId-1].upper(), (box[0]+1, box[1]+30),
                                cv2.FONT_HERSHEY_COMPLEX, 0.4, (0, 255, 0), 1)
                    if classNames[classId - 1] == 'scissors':
                        print('Scissors is Detected')

                        # Send a request to the Flask backend
                        payload = {"members": ["Scissors Detected"]}
                        socketio.emit("scissors_detected", payload)

        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

        cv2.imshow("window", img)

    cap.release()
    cv2.destroyAllWindows()


if __name__ == "__main__":
    camera_thread = Thread(target=start_camera)
    camera_thread.start()
    socketio.run(app, debug=True, host='0.0.0.0')
    camera_thread.join()
