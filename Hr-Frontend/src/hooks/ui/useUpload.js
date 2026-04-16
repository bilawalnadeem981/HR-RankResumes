import { useState } from "react";

export const useUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selected = event.target.files[0];
    if (
      selected &&
      ![
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ].includes(selected.type)
    ) {
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

  return {
    file,
    handleFileChange,
    handleUpload,
  };
};
