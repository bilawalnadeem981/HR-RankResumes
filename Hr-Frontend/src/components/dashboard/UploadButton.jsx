import React, { useState } from "react";

const UploadButton = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected && !["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(selected.type)) {
      alert("Only PDF/DOC/DOCX allowed");
      return;
    }
    setFile(selected);
  };

  const handleUpload = () => {
    if (!file) {
      alert("Please select a file first");
      return;
    }
    console.log("Uploading file:", file);
    alert("File ready for upload: " + file.name);
  };

  return (
    <div className="card mb-4">
      <h2 className="card-header">Upload Resume</h2>

      <input type="file" onChange={handleFileChange} />

      {file && <p className="mt-2 text-sm">Selected: {file.name}</p>}

      <button
        onClick={handleUpload}
        className="bg-indigo-600 text-white px-4 py-2 rounded mt-3"
      >
        Upload Resume
      </button>
    </div>
  );
};

export default UploadButton;