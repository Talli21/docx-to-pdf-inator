### **README.md**

# **Docx to PDF Converter**

A lightweight web application for converting `.docx` files to PDF format. The app includes features such as file metadata display, an intuitive drag-and-drop interface, and optional password protection for the generated PDFs.

---

## **Features**
- **Upload & Convert**: Upload `.docx` files and convert them to PDF effortlessly.
- **File Metadata**: Displays uploaded file information like name, size, and upload date.
- **Download PDF**: Download the converted PDF directly from the app.
- **Password Protection**: Optionally secure PDFs with a password.
- **Responsive UI**: Clean and modern user interface optimized for various devices.
- **Containerized Deployment**: Fully Dockerized for easy setup and scalability.

---

## **Tech Stack**
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: FastAPI
- **Conversion Tool**: `docx2pdf`
- **Containerization**: Docker

---

## **Getting Started**

### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/docx-to-pdf-converter.git
cd docx-to-pdf-converter
```

### **2. Run the Backend**
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Build and run the Docker container:
   ```bash
   docker build -t docx-to-pdf-backend .
   docker run -p 8000:8000 docx-to-pdf-backend
   ```

### **3. Open the Frontend**
1. Navigate to the `frontend` directory.
2. Open `index.html` in your browser.

---

## **Future Enhancements**
- Add bulk file uploads.
- Implement Kubernetes deployment for production environments.
- Enhance password protection functionality.

---

## **License**
This project is licensed under the MIT License. Contributions are welcome!
