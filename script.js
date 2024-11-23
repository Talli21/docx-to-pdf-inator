document.getElementById('browse-button').onclick = function() {
    document.getElementById('file-input').click();
};

document.getElementById('file-input').onchange = function(event) {
    const file = event.target.files[0];
    if (file && file.name.endsWith('.docx')) {
        document.getElementById('metadata').innerHTML = `
            <p><strong>File Name:</strong> ${file.name}</p>
            <p><strong>File Size:</strong> ${(file.size / 1024).toFixed(2)} KB</p>
            <p><strong>Upload Date:</strong> ${new Date().toLocaleString()}</p>
        `;
        document.getElementById('convert-button').disabled = false;
    } else {
        alert('Please upload a valid .docx file.');
    }
};

document.getElementById('convert-button').onclick = async function() {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('file', file);

    document.getElementById('loading').hidden = false;
    document.getElementById('convert-button').disabled = true;

    const response = await fetch('http://localhost:8000/upload/', {
        method: 'POST',
        body: formData
    });

    const result = await response.json();
    document.getElementById('loading').hidden = true;

    if (response.ok) {
        document.getElementById('download-link').href = result.pdf_path;
        document.getElementById('download-section').hidden = false;
    } else {
        alert(result.detail);
    }
};