import cv2

#img=cv2.imread("air.jpeg")
cap=cv2.VideoCapture(0)
cap.set(3,1280)
cap.set(4,720)


classNames=[]
classFile='coco.names'
with open(classFile,'rt') as f:
    classNames=f.read().rstrip('\n').split('\n')


configPath= "ssd_mobilenet_v3_large_coco_2020_01_14.pbtxt"
weightsPath= "frozen_inference_graph.pb"
# mobilenet_iter_73000.caffemodel
# frozen_inference_graph.pb
net = cv2.dnn_DetectionModel(weightsPath, configPath)
net.setInputSize(320,320)
net.setInputScale(1.0/127.5)
net.setInputMean((127.5,127.5,127.5))
net.setInputSwapRB(True)


while True:
    success, img = cap.read()
    classIds, confs, bbox = net.detect(img, confThreshold=0.5)
    if len(classIds) != 0:
        for classId, confidence, box in zip(classIds.flatten(), confs.flatten(), bbox):
            if 0 <= classId-1 < len(classNames):
                cv2.rectangle(img, box, color=(255, 255, 0), thickness=2)
                cv2.putText(img, classNames[classId-1].upper(), (box[0]+1, box[1]+30), cv2.FONT_HERSHEY_COMPLEX, 0.4, (0, 255, 0), 1)
                if classNames[classId-1] == 'scissors':
                    print('Scissors is Detected')

    cv2.imshow("window", img)
    cv2.waitKey(1)




