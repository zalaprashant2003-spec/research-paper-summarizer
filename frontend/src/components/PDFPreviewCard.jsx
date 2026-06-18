import { useState } from "react";
import { motion } from "framer-motion";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function PDFPreviewCard({ file, darkMode, delay = 0 }) {
  const [expanded, setExpanded] = useState(false);
  const [scale, setScale] = useState(1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={expanded ? { y: -4 } : {}}
      className={`${
        darkMode
          ? "bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700"
          : "bg-gradient-to-br from-white to-slate-50 border-slate-200"
      } rounded-2xl border transition-all duration-300`}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className={`w-full px-6 md:px-8 py-4 flex items-center justify-between ${
          expanded ? "" : "rounded-2xl"
        }`}
      >
        <div className="flex items-center gap-3">
          <div className={`p-2.5 rounded-lg ${darkMode ? "bg-red-500/20" : "bg-red-100"}`}>
            <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
            </svg>
          </div>
          <h3 className={`text-lg font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>
            PDF Preview
          </h3>
        </div>
        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <svg
            className={`w-5 h-5 ${darkMode ? "text-slate-400" : "text-slate-500"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{ height: expanded ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div
          className={`px-6 md:px-8 pb-6 border-t ${
            darkMode ? "border-slate-700" : "border-slate-200"
          }`}
        >
          {/* Zoom Controls */}
          <div className="flex gap-2 mb-4 justify-center">
            <motion.button
              onClick={() => setScale(Math.max(0.5, scale - 0.2))}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-lg transition-all ${
                darkMode
                  ? "bg-slate-700 hover:bg-slate-600 text-slate-300"
                  : "bg-slate-200 hover:bg-slate-300 text-slate-700"
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            </motion.button>
            <span className={`px-3 py-2 text-sm font-medium rounded-lg ${
              darkMode ? "bg-slate-700 text-slate-300" : "bg-slate-200 text-slate-700"
            }`}>
              {Math.round(scale * 100)}%
            </span>
            <motion.button
              onClick={() => setScale(Math.min(2, scale + 0.2))}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-lg transition-all ${
                darkMode
                  ? "bg-slate-700 hover:bg-slate-600 text-slate-300"
                  : "bg-slate-200 hover:bg-slate-300 text-slate-700"
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </motion.button>
          </div>

          {/* PDF Viewer */}
          <div
            className={`flex justify-center rounded-lg overflow-hidden ${
              darkMode ? "bg-slate-700/30" : "bg-slate-100"
            }`}
          >
            <Document
              file={file}
              loading={
                <div className={`p-8 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                  Loading PDF...
                </div>
              }
              error={
                <div className={`p-8 ${darkMode ? "text-red-400" : "text-red-600"}`}>
                  Failed to load PDF
                </div>
              }
            >
              <Page pageNumber={1} scale={scale} />
            </Document>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default PDFPreviewCard;
