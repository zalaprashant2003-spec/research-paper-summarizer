import { useRef } from "react";
import { motion } from "framer-motion";

function UploadZone({ file, setFile, onUpload, loading, fileInputRef, darkMode }) {
  const dragActive = useRef(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dragActive.current = e.type === "dragenter" || e.type === "dragover";
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className={`${
        darkMode
          ? "bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700"
          : "bg-gradient-to-br from-white to-slate-50 border-slate-200"
      } rounded-2xl border-2 border-dashed transition-all duration-300 p-8 md:p-12`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      {!file ? (
        <motion.div
          className="text-center cursor-pointer"
          onClick={() => fileInputRef.current?.click()}
          whileHover={{ scale: 1.02 }}
        >
          <motion.div
            className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
              darkMode ? "bg-blue-500/20" : "bg-blue-100"
            }`}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
            </svg>
          </motion.div>

          <h3 className={`text-xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
            Drop your PDF here
          </h3>
          <p className={`text-sm mt-2 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
            or click to browse from your computer
          </p>
          <p className={`text-xs mt-3 ${darkMode ? "text-slate-500" : "text-slate-400"}`}>
            Supports PDF files up to 50MB
          </p>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className={`${
              darkMode
                ? "bg-slate-700/50 border-slate-600"
                : "bg-slate-100 border-slate-300"
            } border rounded-xl p-4 flex items-center justify-between`}
          >
            <div className="flex items-center gap-3 flex-1">
              <div
                className={`p-2.5 rounded-lg ${
                  darkMode ? "bg-green-500/20" : "bg-green-100"
                }`}
              >
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1">
                <p className={`font-medium ${darkMode ? "text-white" : "text-slate-900"}`}>
                  {file.name}
                </p>
                <p className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
            <motion.button
              onClick={() => {
                setFile(null);
                if (fileInputRef.current) fileInputRef.current.value = "";
              }}
              className={`p-2 rounded-lg transition-all ${
                darkMode
                  ? "hover:bg-red-500/20 text-red-400"
                  : "hover:bg-red-100 text-red-600"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.button>
          </div>

          <motion.button
            onClick={onUpload}
            disabled={loading}
            className={`w-full mt-6 py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
              loading
                ? darkMode
                  ? "bg-slate-600 text-slate-400 cursor-not-allowed"
                  : "bg-slate-300 text-slate-500 cursor-not-allowed"
                : darkMode
                ? "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white shadow-lg shadow-blue-500/30"
                : "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white shadow-lg shadow-blue-500/20"
            }`}
            whileHover={!loading ? { scale: 1.02, y: -2 } : {}}
            whileTap={!loading ? { scale: 0.98 } : {}}
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent"></div>
                Analyzing Paper...
              </div>
            ) : (
              "Analyze Paper"
            )}
          </motion.button>
        </motion.div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf"
        onChange={(e) => setFile(e.target.files[0])}
        className="hidden"
      />
    </motion.div>
  );
}

export default UploadZone;
