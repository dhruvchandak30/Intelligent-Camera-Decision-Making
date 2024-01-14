from transformers import ViTImageProcessor, ViTForImageClassification
from PIL import Image as img
import cv2
import torch
import numpy as np

# Load the pre-trained model and image processor
processor = ViTImageProcessor.from_pretrained('google/vit-base-patch16-224')
model = ViTForImageClassification.from_pretrained(
    'google/vit-base-patch16-224')

# Open the webcam
cap = cv2.VideoCapture(0)  # 0 corresponds to the default camera

while True:
    # Capture frame-by-frame
    ret, frame = cap.read()

    # Check if the frame is not None
    if frame is not None:
        # Manually swap the B and R channels to convert BGR to RGB
        rgb_frame_manual_swap = frame[:, :, [2, 1, 0]]
        pil_image = img.fromarray(rgb_frame_manual_swap)

        # Preprocess the image for the model
        inputs = processor(images=pil_image, return_tensors="pt")

        # Make a prediction
        with torch.no_grad():
            outputs = model(**inputs)

        logits = outputs.logits
        predicted_class_idx = logits.argmax(-1).item()

        # print("Predicted class:", model.config.id2label[predicted_class_idx])
        res = model.config.id2label[predicted_class_idx]
        # print(type(res))
        # List of words to check against
        words_to_match = ["skrewdriver", "syringe", "paperknife", "knife", "toolkit",
                          "carpenter's kit", "cleaver", "meat cleaver", "chopper",
                          "ignitor", "cork screw", "bottle screw", "resolver", "six-gun", "revolver, six-gun, six-shooter", "letter opener, paper knife, paperknife"]

        # Check if res matches any of the specified words
        if res.lower() in map(str.lower, words_to_match):
            print(f"{res} matches one of the specified words.")

        # Display the frame
        cv2.imshow("Webcam", frame)

    # Break the loop if 'q' key is pressed
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release the webcam
cap.release()
cv2.destroyAllWindows()
