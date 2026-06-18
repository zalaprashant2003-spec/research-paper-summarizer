import { useState, useRef } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Header from "./components/Header";
import UploadZone from "./components/UploadZone";
import LoadingCard from "./components/LoadingCard";
import ResultCard from "./components/ResultCard";
import DifficultyCard from "./components/DifficultyCard";
import KeywordsCard from "./components/KeywordsCard";
import QuestionsCard from "./components/QuestionsCard";
import PDFPreviewCard from "./components/PDFPreviewCard";
import { exportReport } from "./utils/pdfExport";

// Icon components
const BookOpenIcon = () => (
  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v2.605A7.969 7.969 0 015.5 6c1.255 0 2.443.291 3.5.804V4.804z" />
    <path d="M9 15.675V9.375c-1.057-.464-2.306-.764-3.5-.764-1.312 0-2.573.187-3.5.57V15.67c1.07.5 2.3.796 3.5.796 1.255 0 2.443-.291 3.5-.804z" />
    <path d="M9 12.5v-3c1.046.464 2.301.766 3.5.766 1.256 0 2.443-.291 3.5-.804v3.31c-1.07.5-2.3.796-3.5.796-1.255 0-2.443-.291-3.5-.804z" />
    <path d="M15.5 6c1.255 0 2.443-.291 3.5-.804v2.605A7.969 7.969 0 0015.5 8c-1.312 0-2.573.187-3.5.57V4.804C12.57 4.292 13.815 6 15.5 6z" />
  </svg>
);

const LightbulbIcon = () => (
  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.343a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM16.657 15.657a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM11 17v-1a1 1 0 10-2 0v1a1 1 0 102 0zM5.343 15.657a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707zM4 10a1 1 0 01-1 1H2a1 1 0 110-2h1a1 1 0 011 1zM4.343 5.343a1 1 0 000-1.414L3.636 3.636a1 1 0 10-1.414 1.414l.707.707z" />
  </svg>
);

const TargetIcon = () => (
  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fileInputRef = useRef(null);

  const clearFile = () => {
    setFile(null);
    setResult(null);
    setError("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const uploadPDF = async () => {
    if (!file) {
      alert("Please select a PDF");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setResult(null);

      const formData = new FormData();
      formData.append("file", file);

      console.log("Sending PDF...");

      const response = await axios.post(
        "http://127.0.0.1:8000/summarize",
        formData
      );

      console.log("Response:", response.data);

      setResult(response.data);

    } catch (err) {
      console.error("UPLOAD ERROR:", err);

      if (err.response) {
        console.log("Backend Error:", err.response.data);
      }

      setError("Failed to analyze paper.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white"
          : "bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900"
      }`}
    >
      {/* Header */}
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-3 ${
            darkMode ? "text-white" : "text-slate-900"
          }`}>
            Transform Your Research
          </h2>
          <p className={`text-lg ${
            darkMode ? "text-slate-300" : "text-slate-600"
          } max-w-2xl mx-auto`}>
            Upload any PDF research paper and get AI-powered insights instantly. Get summaries, key findings, difficulty scores, and interview questions.
          </p>
        </motion.div>

        {/* Upload Zone */}
        <div className="mb-12">
          <UploadZone
            file={file}
            setFile={setFile}
            onUpload={uploadPDF}
            loading={loading}
            fileInputRef={fileInputRef}
            darkMode={darkMode}
          />
        </div>

        {/* PDF Preview - when file is selected */}
        {file && !result && (
          <div className="mb-12">
            <PDFPreviewCard file={file} darkMode={darkMode} delay={0.3} />
          </div>
        )}

        {/* Loading State */}
        {loading && <LoadingCard darkMode={darkMode} />}

        {/* Error State */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`rounded-2xl border p-6 mb-12 flex items-start gap-4 ${
              darkMode
                ? "bg-red-500/10 border-red-500/30 text-red-300"
                : "bg-red-50 border-red-200 text-red-700"
            }`}
          >
            <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div>
              <h3 className="font-semibold mb-1">Analysis Failed</h3>
              <p className="text-sm">{error}</p>
            </div>
          </motion.div>
        )}

        {/* Results Grid */}
        {result && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Download Report Button */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <motion.button
                onClick={() => exportReport(result)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all shadow-lg ${
                  darkMode
                    ? "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white shadow-green-500/30"
                    : "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white shadow-green-500/20"
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Report
              </motion.button>
            </motion.div>

            {/* Summary Card */}
            <ResultCard
              title="Executive Summary"
              content={result.summary}
              icon={BookOpenIcon}
              darkMode={darkMode}
              delay={0.2}
            />

            {/* Findings Card */}
            <ResultCard
              title="Key Findings"
              content={result.findings}
              icon={LightbulbIcon}
              darkMode={darkMode}
              delay={0.3}
            />

            {/* Future Work Card */}
            <ResultCard
              title="Future Work"
              content={result.future_work}
              icon={TargetIcon}
              darkMode={darkMode}
              delay={0.4}
            />

            {/* Two Column Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Difficulty Card */}
              <DifficultyCard
                score={result.difficulty_score}
                reason={result.difficulty_reason}
                darkMode={darkMode}
                delay={0.5}
              />

              {/* Keywords Card */}
              <KeywordsCard
                keywords={result.keywords}
                darkMode={darkMode}
                delay={0.5}
              />
            </div>

            {/* Questions Card */}
            <QuestionsCard
              questions={result.questions}
              darkMode={darkMode}
              delay={0.6}
            />

            {/* PDF Preview - after results */}
            <PDFPreviewCard file={file} darkMode={darkMode} delay={0.7} />
          </motion.div>
        )}
      </main>
    </div>
  );
}

export default App;
