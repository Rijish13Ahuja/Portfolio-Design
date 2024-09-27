import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-white overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-700 dark:to-gray-600"
    >
      
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-pink-300 opacity-30 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0], rotate: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} 
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400 opacity-30 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0], rotate: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }} 
      />

      <motion.h1
        className="text-6xl lg:text-8xl font-extrabold z-10 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }} 
      >
        Hi, I'm [Rijish Ahuja]
      </motion.h1>

      <motion.p
        className="text-2xl lg:text-4xl mt-4 z-10 max-w-3xl text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }} 
      >
        A passionate Software Developer ready to make an impact!
      </motion.p>

      <motion.button
        className="mt-8 bg-white text-indigo-600 hover:bg-gray-200 px-8 py-4 rounded-full font-semibold transition z-10 shadow-lg hover:shadow-xl focus:ring focus:ring-indigo-500"
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.95 }}
      >
        View My Projects
      </motion.button>

      <motion.div
        className="absolute bottom-6 text-white text-sm font-medium z-10 flex items-center gap-2 cursor-pointer"
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }} 
      >
        <span>Scroll Down</span>
        <motion.div
          className="w-6 h-6 border-2 border-white rounded-full flex justify-center items-center"
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }} 
        >
          <motion.div className="w-2 h-2 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
