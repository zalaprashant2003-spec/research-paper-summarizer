import { motion } from "framer-motion";

function KeywordsCard({ keywords, darkMode, delay = 0 }) {
  const colors = [
    { bg: "bg-blue-100", text: "text-blue-700", dark_bg: "dark:bg-blue-500/20", dark_text: "dark:text-blue-300" },
    { bg: "bg-purple-100", text: "text-purple-700", dark_bg: "dark:bg-purple-500/20", dark_text: "dark:text-purple-300" },
    { bg: "bg-green-100", text: "text-green-700", dark_bg: "dark:bg-green-500/20", dark_text: "dark:text-green-300" },
    { bg: "bg-pink-100", text: "text-pink-700", dark_bg: "dark:bg-pink-500/20", dark_text: "dark:text-pink-300" },
    { bg: "bg-cyan-100", text: "text-cyan-700", dark_bg: "dark:bg-cyan-500/20", dark_text: "dark:text-cyan-300" },
  ];

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
        <div className={`p-3 rounded-xl ${darkMode ? "bg-cyan-500/20" : "bg-cyan-100"}`}>
          <svg className="w-6 h-6 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
            <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className={`text-xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>
          Key Topics
        </h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {keywords?.map((keyword, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: delay + (index * 0.05), duration: 0.3 }}
            whileHover={{ scale: 1.05, y: -2 }}
            className={`${
              darkMode
                ? index % 5 === 0
                  ? "bg-blue-500/20 text-blue-300"
                  : index % 5 === 1
                  ? "bg-purple-500/20 text-purple-300"
                  : index % 5 === 2
                  ? "bg-green-500/20 text-green-300"
                  : index % 5 === 3
                  ? "bg-pink-500/20 text-pink-300"
                  : "bg-cyan-500/20 text-cyan-300"
                : colors[index % colors.length].bg + " " + colors[index % colors.length].text
            } px-4 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer border-0 shadow-sm hover:shadow-md`}
          >
            {keyword}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default KeywordsCard;
