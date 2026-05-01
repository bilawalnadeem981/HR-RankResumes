import React, { useState } from "react";
import { useUpload } from "../../hooks/ui/useUpload";
import Modal from "./Modal";
import { Upload, FileText, X, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const UploadButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { file, loading, error, result, handleFileChange, handleUpload, reset } = useUpload();
  const [isDragging, setIsDragging] = useState(false);

  const onDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
        handleFileChange({ target: { files: [droppedFile] } });
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    reset();
  };

  const onUploadClick = async () => {
    try {
      await handleUpload();
    } catch (err) {
      // Error is handled by the hook and displayed in UI
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
        onClose={handleClose} 
        title="Analyze New Resume"
      >
        <div className="space-y-6">
          {!result ? (
            <>
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
                  accept=".pdf"
                  disabled={loading}
                />
                
                <label 
                  htmlFor="modal-file-upload"
                  className={`flex flex-col items-center ${loading ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
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
                      <p className="text-sm font-semibold text-gray-400 mt-1">or click to browse (PDF only)</p>
                    </>
                  )}
                </label>

                {file && !loading && (
                    <button 
                        onClick={(e) => { e.preventDefault(); handleFileChange({ target: { files: [] } }); }}
                        className="absolute top-4 right-4 p-1.5 rounded-full bg-white shadow-md text-gray-400 hover:text-rose-500 transition-colors"
                    >
                        <X className="w-4 h-4" />
                    </button>
                )}
              </div>

              {error && (
                <div className="bg-rose-50 rounded-2xl p-4 flex items-start gap-3 border border-rose-100 animate-shake">
                  <AlertCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                  <p className="text-xs font-bold text-rose-700 leading-relaxed">
                    {error}
                  </p>
                </div>
              )}

              {!error && (
                <div className="bg-amber-50 rounded-2xl p-4 flex items-start gap-3 border border-amber-100">
                  <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <p className="text-xs font-bold text-amber-700 leading-relaxed">
                    For best results, ensure your resume is in <span className="underline">PDF format</span> and includes clear section headings.
                  </p>
                </div>
              )}

              <button
                onClick={onUploadClick}
                disabled={!file || loading}
                className={`w-full font-black py-4 rounded-2xl transition-all duration-300 shadow-xl flex items-center justify-center gap-2
                  ${file && !loading
                    ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-100" 
                    : "bg-gray-100 text-gray-400 cursor-not-allowed shadow-none"}`}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Analyzing Resume...
                  </>
                ) : (
                  "Start AI Analysis"
                )}
              </button>
            </>
          ) : (
            <div className="py-8 flex flex-col items-center text-center space-y-6">
              <div className="relative">
                <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shadow-xl shadow-emerald-50">
                  <span className="text-3xl font-black">{result?.data?.score}</span>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-md">
                   <CheckCircle className="w-6 h-6 text-emerald-600" />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-black text-gray-900">Analysis Complete!</h3>
                <p className="text-gray-500 font-medium mt-2">
                  Your resume scored <span className="text-indigo-600 font-black">{result?.data?.score}%</span> based on the required skill set.
                </p>
              </div>

              {result?.data?.keywordsFound?.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2 max-w-[300px]">
                  {result.data.keywordsFound.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-full border border-indigo-100">
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              <button
                onClick={handleClose}
                className="w-full px-8 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-gray-800 transition-all active:scale-95 shadow-xl shadow-gray-200"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

export default UploadButton;