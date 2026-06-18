import { motion } from "framer-motion";

function ResultCard({ title, content, icon: Icon, darkMode, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -4 }}
      className={`${
        darkMode
          ? "bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-slate-600"
          : "bg-gradient-to-br from-white to-slate-50 border-slate-200 hover:border-slate-300"
      } rounded-2xl border p-6 md:p-8 transition-all duration-300 shadow-lg hover:shadow-xl`}
    >
      <div className="flex items-start gap-4 mb-4">
        <div
          className={`p-3 rounded-xl ${
            darkMode ? "bg-blue-500/20" : "bg-blue-100"
          }`}
        >
          {Icon ? (
            <Icon />
          ) : (
            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v2.605A7.969 7.969 0 015.5 6c1.255 0 2.443.291 3.5.804V4.804z" />
              <path d="M9 15.675V9.375c-1.057-.464-2.306-.764-3.5-.764-1.312 0-2.573.187-3.5.57V15.67c1.07.5 2.3.796 3.5.796 1.255 0 2.443-.291 3.5-.804z" />
              <path d="M9 12.5v-3c1.046.464 2.301.766 3.5.766 1.256 0 2.443-.291 3.5-.804v3.31c-1.07.5-2.3.796-3.5.796-1.255 0-2.443-.291-3.5-.804z" />
              <path d="M15.5 6c1.255 0 2.443-.291 3.5-.804v2.605A7.969 7.969 0 0015.5 8c-1.312 0-2.573.187-3.5.57V4.804C12.57 4.292 13.815 6 15.5 6z" />
            </svg>
          )}
        </div>
        <h3 className={`text-xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>
          {title}
        </h3>
      </div>

      <div className={`text-base leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
        {content}
      </div>
    </motion.div>
  );
}

export default ResultCard;
