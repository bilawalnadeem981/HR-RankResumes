import React from "react";
import { useUpload } from "../../hooks/ui/useUpload";

const UploadButton = () => {
  const { file, handleFileChange, handleUpload } = useUpload();

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