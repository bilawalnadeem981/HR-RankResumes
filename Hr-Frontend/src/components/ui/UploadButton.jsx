import React, { useState } from "react";
import { useUpload } from "../../hooks/ui/useUpload";
import Modal from "./Modal";
import { Upload, FileText, X, CheckCircle, AlertCircle } from "lucide-react";

const UploadButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { file, handleFileChange, handleUpload } = useUpload();
  const [isDragging, setIsDragging] = useState(false);

  const onDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
        handleFileChange({ target: { files: [droppedFile] } });
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="group flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-2xl shadow-lg shadow-indigo-200 hover:shadow-indigo-300 transition-all duration-300 active:scale-95"
      >
        <Upload className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
        Upload Resume
      </button>

      <Modal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        title="Analyze New Resume"
      >
        <div className="space-y-6">
          <div 
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={onDrop}
            className={`relative border-2 border-dashed rounded-3xl p-10 transition-all duration-300 flex flex-col items-center justify-center text-center
              ${isDragging ? "border-indigo-500 bg-indigo-50/50 scale-[1.02]" : "border-gray-200 hover:border-indigo-300 bg-gray-50/50"}`}
          >
            <input 
              type="file" 
              id="modal-file-upload" 
              className="hidden" 
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
            />
            
            <label 
              htmlFor="modal-file-upload"
              className="cursor-pointer flex flex-col items-center"
            >
              <div className={`p-5 rounded-[2rem] mb-4 transition-all duration-300 ${file ? "bg-emerald-100 text-emerald-600 shadow-emerald-100 shadow-xl" : "bg-white text-indigo-600 shadow-xl shadow-gray-200"}`}>
                {file ? <FileText className="w-10 h-10" /> : <Upload className="w-10 h-10" />}
              </div>
              
              {file ? (
                <div>
                  <p className="text-lg font-black text-gray-900 truncate max-w-[250px]">{file.name}</p>
                  <p className="text-sm font-bold text-emerald-600 flex items-center justify-center gap-1 mt-1">
                    <CheckCircle className="w-4 h-4" /> Ready to analyze
                  </p>
                </div>
              ) : (
                <>
                  <p className="text-lg font-black text-gray-900">Drop your resume here</p>
                  <p className="text-sm font-semibold text-gray-400 mt-1">or click to browse from computer</p>
                </>
              )}
            </label>

            {file && (
                <button 
                    onClick={(e) => { e.preventDefault(); handleFileChange({ target: { files: [] } }); }}
                    className="absolute top-4 right-4 p-1.5 rounded-full bg-white shadow-md text-gray-400 hover:text-rose-500 transition-colors"
                >
                    <X className="w-4 h-4" />
                </button>
            )}
          </div>

          <div className="bg-amber-50 rounded-2xl p-4 flex items-start gap-3 border border-amber-100">
            <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <p className="text-xs font-bold text-amber-700 leading-relaxed">
              For best results, ensure your resume is in <span className="underline">PDF format</span> and includes clear section headings.
            </p>
          </div>

          <button
            onClick={() => {
                handleUpload();
                if(file) setIsOpen(false);
            }}
            disabled={!file}
            className={`w-full font-black py-4 rounded-2xl transition-all duration-300 shadow-xl
              ${file 
                ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-100" 
                : "bg-gray-100 text-gray-400 cursor-not-allowed shadow-none"}`}
          >
            Start Analysis
          </button>
        </div>
      </Modal>
    </>
  );
};

export default UploadButton;