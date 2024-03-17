# Packages required for Streamlit web app and Image fetching
import streamlit as st
import numpy as np
from PIL import Image
from keras.preprocessing.image import load_img, img_to_array
from keras.applications.vgg16 import preprocess_input, decode_predictions
from keras.applications.vgg16 import VGG16

# To predict the image
def predict(image1): 
    model = VGG16()
    image = load_img(image1, target_size=(224, 224))
    # convert the image pixels to a numpy array
    image = img_to_array(image)
    # reshape data for the model
    image = image.reshape((1, image.shape[0], image.shape[1], image.shape[2]))
    # prepare the image for the VGG model
    image = preprocess_input(image)
    # predict the probability across all output classes
    yhat = model.predict(image)
    # convert the probabilities to class labels
    label = decode_predictions(yhat)
    # retrieve the most likely result, e.g. highest probability
    label = label[0][0]
    return label 

# Main driver
st.title("Multilabel Image Classification")
st.write("Using VGG16 for automated image classification")

uploaded_image = st.file_uploader("Upload an image...", type=["jpg", "jpeg", "png"], accept_multiple_files=False)

if uploaded_image is not None:
    st.image(uploaded_image, caption='Uploaded Image.', use_column_width=True)

    # Image classification with VGG16
    classification_result = predict(uploaded_image)
    st.write('Image Classification Result:')
    st.write('%s (%.2f%%)' % (classification_result[1], classification_result[2]*100))
