# detect.py
from transformers import ViTImageProcessor, ViTForImageClassification
from PIL import Image as img
import cv2
import torch
import numpy as np
import base64
import requests
import cloudinary
import cloudinary.uploader

cloudinary.config(
    cloud_name="dohky5q86",
    api_key="971431767226324",
    api_secret="lZcQav4UbfAHM3M2GbcxZ9YtbdM"
)


def run_detection():
    processor = ViTImageProcessor.from_pretrained(
        'google/vit-base-patch16-224')
    model = ViTForImageClassification.from_pretrained(
        'google/vit-base-patch16-224')

    cap = cv2.VideoCapture(0)
    print("Starting Camera")

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
            words_to_match = ["skrewdriver", "syringe", "paperknife", "knife", "toolkit", "drumstick", "safety pin", "chain"
                              "carpenter's kit", "cleaver", "meat cleaver", "chopper", "rhinoceros beetle", "can opener, tin opener"
                              "ignitor", "cork screw", "bottle screw", "resolver", "six-gun", "hook, claw"
                              "revolver, six-gun, six-shooter", "letter opener, paper knife, paperknife", "assault rifle, assault gun"]


# Inside the if block where the specified object is detected
            if res.lower() in map(str.lower, words_to_match):
                print(f"{res} matches one of the specified words.")
                success, buffer = cv2.imencode('.png', frame)
                if not success:
                    print("Error converting frame to PNG format")
                    # Handle the error as needed
                else:
                    # Convert the buffer to a bytes object
                    png_data = np.array(buffer).tobytes()

                    # Now you can use png_data in the cloudinary.uploader.upload function
                    res_str = str(res.lower())
                    if res_str in map(str.lower, words_to_match):
                        print(f"{res_str} matches one of the specified words.")
                        # Use png_data instead of frame in the upload function
                        cloud_result = cloudinary.uploader.upload(
                            png_data, public_id=res_str)
                        # cloudinary.uploader.upload(frame, public_id=res)  # Remove this line
                        # send_image_in_chunks(frame, res)  # You may need to update this function too
                        print("Sent Image to Cloudinary")
                        # print(cloud_result.public_id)
                        secure_url = cloud_result['secure_url']
                        print(secure_url)
                        body = {
                            'image_url': secure_url,
                            'result': res_str
                        }
                        url = 'http://localhost:8000/api/receiveImageChunk'
                        response = requests.post(url, json=body)

                        # Check the response
                        if response.status_code == 200:
                            print('Image sent successfully:', response.json())
                            break
                        else:
                            print('Error:', response.status_code, response.text)

            cv2.imshow("Webcam", frame)

        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()


# def send_image_in_chunks(image_frame, result):
#     # Capture and encode the image in chunks
#     chunk_size = 1024  # Adjust the chunk size as needed
#     _, encoded_image = cv2.imencode('.png', image_frame)

#     # Split the encoded image into chunks
#     for i in range(0, len(encoded_image), chunk_size):
#         chunk = encoded_image[i:i + chunk_size]
#         base64_encoded_chunk = base64.b64encode(chunk).decode('utf-8')

#         # Prepare the data to be sent in the POST request
#         body = {
#             'image_chunk': base64_encoded_chunk,
#             'result': result
#         }

#         # Send the POST request with the current chunk
#         url = 'http://localhost:8000/api/receiveImageChunk'
#         response = requests.post(url, json=body)

#         # Check the response
#         if response.status_code == 200:
#             print('Chunk sent successfully:', response.json())
#         else:
#             print('Error:', response.status_code, response.text)
