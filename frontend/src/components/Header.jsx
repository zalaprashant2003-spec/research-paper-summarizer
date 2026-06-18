import { motion } from "framer-motion";

function Header({ darkMode, setDarkMode }) {
  return (
    <motion.header
      className={`${
        darkMode
          ? "bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-slate-700"
          : "bg-gradient-to-r from-white via-slate-50 to-white border-slate-200"
      } border-b sticky top-0 z-50 backdrop-blur-lg bg-opacity-80`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div
            className={`p-2.5 rounded-xl ${
              darkMode ? "bg-blue-500/20" : "bg-blue-100"
            }`}
          >
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div>
            <h1 className={`text-xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>
              ResearchAI
            </h1>
            <p className={`text-xs ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
              Paper Analysis
            </p>
          </div>
        </motion.div>

        {/* Dark Mode Toggle */}
        <motion.button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2.5 rounded-lg transition-all duration-300 ${
            darkMode
              ? "bg-slate-800 hover:bg-slate-700 text-yellow-400"
              : "bg-slate-100 hover:bg-slate-200 text-slate-700"
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {darkMode ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 1.78a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zm2.828 2.828a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zm2.828 2.829a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM10 7a3 3 0 110 6 3 3 0 010-6zm-4.22 10.22a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zm2.828 2.828a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zm2.828 2.829a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM10 18a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-4.22-1.78a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM2.55 5.5a1 1 0 010-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414 0zm0 8.828a1 1 0 010 1.414l-.707.707a1 1 0 011.414 1.414l.707-.707a1 1 0 010-1.414zM2 10a1 1 0 01-1 1H0a1 1 0 110-2v1a1 1 0 011 1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </motion.button>
      </div>
    </motion.header>
  );
}

export default Header;
