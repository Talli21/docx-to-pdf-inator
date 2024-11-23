## **Docx to PDF Converter**

### **Overview**
The **Docx to PDF Converter** is a web application designed to handle `.docx` files, convert them to PDF format, and provide additional functionality like metadata display and optional password protection for the generated PDFs. The app is built with a responsive frontend using **HTML**, **CSS**, and **JavaScript**, and a robust backend powered by **FastAPI**. It includes features like exception handling, Dockerization, and support for CI/CD pipelines.

---

### **Features**
- **File Upload**: Upload `.docx` files via a simple drag-and-drop interface or a file selection dialog.
- **Metadata Display**: View file details such as name, size, and upload date before conversion.
- **PDF Conversion**: Seamless conversion of `.docx` files to PDF format using the `docx2pdf` library.
- **Password Protection**: Optional password protection for generated PDFs.
- **Download Link**: Download the converted PDF directly from the application.
- **Responsive Design**: Clean and user-friendly UI optimized for various devices.
- **Exception Handling**: Ensures robust error handling for invalid file uploads or backend errors.
- **Dockerized Deployment**: Fully containerized application for easy deployment.
- **Kubernetes-Ready**: Includes Kubernetes manifest files for scalable hosting.
- **CI/CD Integration**: Automates Docker image builds using GitHub Actions.
- **Bash Script**: Simplifies container deployment with a pre-configured script.

---

### **Project Structure**
```
/project-directory
  |-- index.html        # Frontend HTML
  |-- styles.css        # Styling for the web application
  |-- script.js         # Frontend JavaScript for functionality
  |-- app.py            # FastAPI backend code
  |-- Dockerfile        # Docker image configuration
  |-- requirements.txt  # Python dependencies
  |-- uploads/          # Directory for storing uploaded files
  |-- k8s/              # Kubernetes manifest files
  |-- scripts/
      |-- run.sh        # Bash script for running the container
```

---

### **Getting Started**
#### Prerequisites
- Python 3.8 or later
- Node.js (optional for serving static files)
- Docker
- Kubernetes (optional for deployment)

#### **Steps to Run Locally**
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/docx-to-pdf-converter.git
   cd docx-to-pdf-converter
   ```

2. Create a virtual environment and install dependencies:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   pip install -r requirements.txt
   ```

3. Start the FastAPI server:
   ```bash
   uvicorn app:app --reload
   ```

4. Open `index.html` in your browser or serve it with:
   ```bash
   python -m http.server
   ```

5. Access the app at `http://localhost:8000`.

---

### **Running with Docker**
1. Build the Docker image:
   ```bash
   docker build -t docx-to-pdf .
   ```

2. Run the container:
   ```bash
   docker run -p 8000:8000 -v $(pwd)/uploads:/app/uploads docx-to-pdf
   ```

3. Open the application in your browser at `http://localhost:8000`.

#### **Using the Bash Script**
Run the pre-configured script for deploying the container:
```bash
bash scripts/run.sh
```

---

### **Deploying with Kubernetes**
1. Navigate to the `k8s/` directory:
   ```bash
   cd k8s
   ```

2. Apply the manifest files:
   ```bash
   kubectl apply -f deployment.yaml
   kubectl apply -f service.yaml
   ```

3. Access the service using the external IP provided by your Kubernetes cluster.

---

### **CI/CD Pipeline**
The project includes a **GitHub Actions** workflow for automating Docker builds:
- Triggers on each push to the `main` branch.
- Builds and pushes the Docker image to Docker Hub.

Workflow file: `.github/workflows/docker-build.yml`

---

### **Exception Handlers**
- Invalid File Format: Rejects non-`.docx` files with appropriate error messages.
- File Not Found: Returns a 404 error for missing files during download.
- General Errors: Returns descriptive error messages for any backend issues.

---

### **Future Enhancements**
- Add support for bulk file uploads and conversions.
- Integrate email notifications for converted file delivery.
- Provide hosted endpoints for testing the application.
- Improve microservice architecture with separate services for file handling and conversion.

---

### **License**
This project is licensed under the MIT License.

--- 

Feel free to contribute to this project by opening issues or submitting pull requests!
