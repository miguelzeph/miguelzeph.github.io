[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-brightgreen?style=for-the-badge)](https://github.com/miguelzeph/train-your-classifier)

# Train Your Classifier

<div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
  <div style="flex: 1; text-align: center;">
    <img src="../img/bird.png" alt="Bird Classification" width="80%">
    <p>Bird</p>
  </div>
  <div style="flex: 1; text-align: center;">
    <img src="../img/reptiles.png" alt="Reptile Classification" width="80%">
    <p>Reptiles</p>
  </div>
  <div style="flex: 1; text-align: center;">
    <img src="../img/monkey.png" alt="Monkey Classification" width="80%">
    <p>Monkey</p>
  </div>
</div>

[![Explore on GitHub](https://img.shields.io/badge/Explore_on_GitHub-100000?style=for-the-badge&logo=GitHub&logoColor=white)](https://github.com/miguelzeph/train-your-classifier)


This project provides an easy way to train a machine learning model for image classification using Python and TensorFlow. 

### Key Features:
- **Environment Setup:** 
  - Create a virtual environment with Python 3.7.
  - Configure Jupyter Notebook and install necessary packages.
- **Training:**
  - Use provided images to train the model.
  - Customize model architecture, adjust training parameters, and ensure a balanced dataset for better accuracy.
- **Enhancements:**
  - Employ transfer learning to improve model performance with pre-trained models.

### Usage:
- **Training Notebook:** Configure and train your model using the `train_your_model.ipynb` notebook.
- **Save and Load Models:**
  - Save trained models with `model.save('./your_models_trained/<your_model_name>.h5')`.
  - Reload them using TensorFlow with:
    ```python
    import tensorflow as tf
    
    # Load the trained model
    model = tf.keras.models.load_model('./your_models_trained/<your_model_name>.h5')
    ```

### Project Repository:
[Train Your Classifier on GitHub](https://github.com/miguelzeph/train-your-classifier)


### Author

Miguel Angelo do Amaral Junior