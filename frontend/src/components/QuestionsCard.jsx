import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function QuestionsCard({ questions, darkMode, delay = 0 }) {
  const [expanded, setExpanded] = useState(null);
  const [copied, setCopied] = useState(null);

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -4 }}
      className={`${
        darkMode
          ? "bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700"
          : "bg-gradient-to-br from-white to-slate-50 border-slate-200"
      } rounded-2xl border p-6 md:p-8 transition-all duration-300 shadow-lg hover:shadow-xl`}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className={`p-3 rounded-xl ${darkMode ? "bg-orange-500/20" : "bg-orange-100"}`}>
          <svg
            className="w-6 h-6 text-orange-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className={`text-xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>
          Interview Questions
        </h3>
      </div>

      <div className="space-y-3">
        {questions?.map((question, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + (index * 0.05), duration: 0.3 }}
            className={`rounded-lg border transition-all ${
              expanded === index
                ? darkMode
                  ? "bg-slate-700/50 border-slate-600"
                  : "bg-slate-100 border-slate-300"
                : darkMode
                ? "bg-slate-700/30 border-slate-700 hover:border-slate-600"
                : "bg-slate-50 border-slate-200 hover:border-slate-300"
            }`}
          >
            <button
              onClick={() => setExpanded(expanded === index ? null : index)}
              className="w-full px-4 py-3 flex items-center justify-between text-left"
            >
              <span className={`font-medium text-sm md:text-base ${darkMode ? "text-white" : "text-slate-900"}`}>
                Q{index + 1}: {question.substring(0, 60)}
                {question.length > 60 ? "..." : ""}
              </span>
              <svg
                className={`w-5 h-5 transition-transform ${
                  expanded === index ? "rotate-180" : ""
                } ${darkMode ? "text-slate-400" : "text-slate-500"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>

            <AnimatePresence>
              {expanded === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`px-4 pb-4 border-t ${
                    darkMode ? "border-slate-600" : "border-slate-200"
                  }`}
                >
                  <p className={`text-sm leading-relaxed mb-3 ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                    {question}
                  </p>
                  <motion.button
                    onClick={() => handleCopy(question, index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      copied === index
                        ? darkMode
                          ? "bg-green-500/20 text-green-300"
                          : "bg-green-100 text-green-700"
                        : darkMode
                        ? "bg-slate-600 hover:bg-slate-500 text-slate-200"
                        : "bg-slate-200 hover:bg-slate-300 text-slate-700"
                    }`}
                  >
                    {copied === index ? (
                      <>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Copied!
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                          <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0015.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                        </svg>
                        Copy
                      </>
                    )}
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default QuestionsCard;
