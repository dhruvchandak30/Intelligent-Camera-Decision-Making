from transformers import ViTImageProcessor, ViTForImageClassification
from PIL import Image as img
import cv2
import torch
import numpy as np
import base64

def run_detection(detection_data): 
    processor = ViTImageProcessor.from_pretrained('google/vit-base-patch16-224')
    model = ViTForImageClassification.from_pretrained(
        'google/vit-base-patch16-224')

    cap = cv2.VideoCapture(0)
    while True:
        ret, frame = cap.read()

        if frame is not None:
            rgb_frame_manual_swap = frame[:, :, [2, 1, 0]]
            pil_image = img.fromarray(rgb_frame_manual_swap)

            inputs = processor(images=pil_image, return_tensors="pt")

            with torch.no_grad():
                outputs = model(**inputs)

            logits = outputs.logits
            predicted_class_idx = logits.argmax(-1).item()

            res = model.config.id2label[predicted_class_idx]

            words_to_match = ["skrewdriver", "syringe", "paperknife", "knife", "toolkit",
                              "carpenter's kit", "cleaver", "meat cleaver", "chopper",
                              "ignitor", "cork screw", "bottle screw", "resolver", "six-gun", "revolver, six-gun, six-shooter", "letter opener, paper knife, paperknife"]

            if res.lower() in map(str.lower, words_to_match):
                print(f"{res} matches one of the specified words.")
                with detection_data.detection_lock:
                    detection_data.detection_result = res
                    print("In Detect", detection_data.detection_result)

                    # Capture and encode the image
                    _, encoded_image = cv2.imencode('.png', frame)
                    base64_encoded_image = base64.b64encode(encoded_image).decode('utf-8')

                    # Add the encoded image to the detection data
                    detection_data.image_data = base64_encoded_image

            cv2.imshow("Webcam", frame)

        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()
