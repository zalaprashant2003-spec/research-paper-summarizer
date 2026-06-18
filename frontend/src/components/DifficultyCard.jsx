import { motion } from "framer-motion";

function DifficultyCard({ score, reason, darkMode, delay = 0 }) {
  const numScore = parseInt(score) || 0;
  const percentage = (numScore / 10) * 100;

  const getDifficultyColor = (score) => {
    if (score <= 3) return { badge: "bg-green-100 text-green-700", bar: "bg-gradient-to-r from-green-400 to-green-500", label: "Easy" };
    if (score <= 6) return { badge: "bg-yellow-100 text-yellow-700", bar: "bg-gradient-to-r from-yellow-400 to-yellow-500", label: "Medium" };
    return { badge: "bg-red-100 text-red-700", bar: "bg-gradient-to-r from-red-400 to-red-500", label: "Hard" };
  };

  const difficulty = getDifficultyColor(numScore);

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
        <div className={`p-3 rounded-xl ${darkMode ? "bg-purple-500/20" : "bg-purple-100"}`}>
          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7H5v12h12V9m0-2h6m0 0v6m0-6L9 17" />
          </svg>
        </div>
        <h3 className={`text-xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>
          Difficulty Level
        </h3>
      </div>

      {/* Circular Progress */}
      <div className="flex items-center justify-center mb-8">
        <motion.div
          className="relative w-32 h-32"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: delay + 0.2, duration: 0.5 }}
        >
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="64"
              cy="64"
              r="56"
              fill="none"
              className={`${darkMode ? "stroke-slate-700" : "stroke-slate-200"}`}
              strokeWidth="8"
            />
            <motion.circle
              cx="64"
              cy="64"
              r="56"
              fill="none"
              strokeWidth="8"
              className={`${difficulty.bar} stroke-linecap-round`}
              strokeDasharray="351.86"
              initial={{ strokeDashoffset: 351.86 }}
              animate={{ strokeDashoffset: 351.86 - (351.86 * percentage) / 100 }}
              transition={{ delay: delay + 0.3, duration: 1, ease: "easeOut" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.span
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: delay + 0.5, duration: 0.5 }}
            >
              {score}
            </motion.span>
            <span className="text-xs text-slate-500">/10</span>
          </div>
        </motion.div>
      </div>

      {/* Badge */}
      <div className="flex justify-center mb-6">
        <span className={`px-4 py-2 rounded-full text-sm font-semibold ${difficulty.badge}`}>
          {difficulty.label}
        </span>
      </div>

      {/* Reason */}
      <div className={`text-sm leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
        <p className={`mb-2 text-xs font-semibold uppercase tracking-wide ${darkMode ? "text-slate-500" : "text-slate-500"}`}>
          Why
        </p>
        {reason}
      </div>
    </motion.div>
  );
}

export default DifficultyCard;
