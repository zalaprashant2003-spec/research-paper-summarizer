import { motion } from "framer-motion";

function LoadingCard({ darkMode }) {
  const skeletonVariants = {
    animate: {
      opacity: [0.5, 1, 0.5],
      transition: { duration: 2, repeat: Infinity },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className={`${
        darkMode
          ? "bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700"
          : "bg-gradient-to-br from-white to-slate-50 border-slate-200"
      } rounded-2xl border p-8 overflow-hidden`}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <motion.div
          className={`p-2.5 rounded-xl ${
            darkMode ? "bg-blue-500/20" : "bg-blue-100"
          }`}
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.504 1.132a1 1 0 01.992 0l1.745 1.009a1 1 0 00.868.025l1.951-1.025a1 1 0 011.161 1.441L14.41 4.901a1 1 0 00.142.97l1.511 2.351a1 1 0 01-1.285 1.371L13.08 7.537a1 1 0 00-.97.138l-1.901 1.393a1 1 0 01-1.416-1.416l1.393-1.901a1 1 0 00.138-.97L8.226 2.28a1 1 0 01.3-1.148zm-.752 9.256a1 1 0 01.752-.752l2.472-.356a1 1 0 00.888-.888l.356-2.472a1 1 0 011.504 0l.356 2.472a1 1 0 00.888.888l2.472.356a1 1 0 010 1.504l-2.472.356a1 1 0 00-.888.888l-.356 2.472a1 1 0 01-1.504 0l-.356-2.472a1 1 0 00-.888-.888l-2.472-.356a1 1 0 010-1.504z" />
          </svg>
        </motion.div>
        <h3 className={`text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
          AI is analyzing your paper
        </h3>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div
          className={`h-2 rounded-full overflow-hidden ${
            darkMode ? "bg-slate-700" : "bg-slate-200"
          }`}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 bg-size-200"
            initial={{ backgroundPosition: "0%" }}
            animate={{ backgroundPosition: "200%" }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </div>
      </div>

      {/* Skeleton Loaders */}
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            variants={skeletonVariants}
            animate="animate"
            className={`${
              darkMode ? "bg-slate-700/50" : "bg-slate-200"
            } h-20 rounded-lg`}
          />
        ))}
      </div>

      {/* Loading Text */}
      <motion.div
        className={`mt-6 text-sm ${darkMode ? "text-slate-400" : "text-slate-500"}`}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        This typically takes 10-30 seconds...
      </motion.div>
    </motion.div>
  );
}

export default LoadingCard;
