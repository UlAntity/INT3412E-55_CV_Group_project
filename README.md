# INT3412E-55_CV_Group_project

## Project Overview

This project is a web application that use multimodal for film genres classification task based on title, description and poster.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js (for the frontend)
- Python 3.8+ (for the backend)
- pip (Python package installer)
- virtualenv (optional, for creating a virtual environment)

# INT3412E-55_CV_Group_project

## Project Overview

This project is a web application that allows users to upload and view movie information. The application consists of a frontend built with React and a backend built with FastAPI.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js (for the frontend)
- Python 3.8+ (for the backend)
- pip (Python package installer)
- virtualenv (optional, for creating a virtual environment)

## Model Arch
Multimodal Model
  ├── model1 (DistilBERT for Sequence Classification)
  │    ├── Embeddings (Word + Position)
  │    ├── Transformer (6 layers of attention + FFN)
  │    ├── Pre-Classifier (Linear)
  │    ├── Classifier (Linear with 18 classes)
  │    └── Dropout (p=0.2)
  │
  ├── model2 (DistilBERT for Sequence Classification)
  │    ├── Similar structure to model1
  │
  ├── model3 (T2T-ViT for Vision + Sequence)
  │    ├── Tokens to Token (T2T)
  │    ├── Attention Blocks (14 blocks)
  │    ├── Head (Linear output for vision)
  │    ├── FC (Linear output for 18 classes)
  │
  ├── Final Fully Connected Layers (fc1, fc2, fc3)
  │    ├── fc1 (Linear, 18 → 18)
  │    ├── fc2 (Linear, 18 → 18)
  │    └── fc3 (Linear, 12 → 18)


## Running the Backend

1. **Clone the repository:**

    ```sh
    git clone https://github.com/UlAntity/INT3412E-55_CV_Group_project.git
    cd INT3412E-55_CV_Group_project
    ```

2. **Navigate to the backend directory:**

    ```sh
    cd Backend
    ```

3. **Create and activate a virtual environment (optional but recommended):**

    ```sh
    python -m venv env
    source env/bin/activate  # On Windows, use `env\Scripts\activate`
    ```

4. **Install the required dependencies:**

    ```sh
    pip install -r requirements.txt
    ```

5. **Run the FastAPI server:**

    ```sh
    uvicorn main:app --reload
    ```

    The backend server should now be running at `http://127.0.0.1:8000`.

## Running the Frontend

1. **Navigate to the frontend directory:**

    ```sh
    cd ../Frontend
    ```

2. **Install the required dependencies:**

    ```sh
    npm install
    ```

3. **Start the React development server:**

    ```sh
    npm run dev
    ```

    The frontend server should now be running at `http://localhost:5173`.

## Accessing the Application

- Open your web browser and navigate to `http://localhost:5173` to access the frontend.
- The frontend will communicate with the backend server running at `http://127.0.0.1:8000`.

## Additional Information

- **Database:** The backend uses SQLite as the database. The database file (`movies.db`) is located in the [Backend](http://_vscodecontentref_/1) directory.
- **Static Files:** The backend serves static files (e.g., movie posters) from the [static](http://_vscodecontentref_/2) directory.



