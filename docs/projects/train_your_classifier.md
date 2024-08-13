[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-brightgreen?style=for-the-badge)](https://github.com/miguelzeph/train-your-classifier)


# Train Your Classifier

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
