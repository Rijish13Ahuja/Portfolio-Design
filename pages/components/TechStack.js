import { motion } from 'framer-motion';

const techStack = [
  { name: 'JavaScript', icon: '🟨' },
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '🔧' },
  { name: 'Tailwind CSS', icon: '💨' },
  { name: 'C++', icon: '💻' },
  { name: 'Java', icon: '☕' },
  { name: 'Python', icon: '🐍' },
  { name: 'Flutter', icon: '🐦' },
  { name: 'Dart', icon: '🟠' },
  { name: 'TypeScript', icon: '🔷' },
];

const itemVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 20 },
  visible: (index) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.1,
      type: 'spring',
      stiffness: 100,
    },
  }),
  hover: {
    scale: 1.2,
    rotate: 10,
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 10,
    },
  },
  tap: {
    scale: 0.95,
  },
};

export default function TechStackCarousel() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 text-black dark:text-white text-center overflow-hidden">
      <h2 className="text-4xl font-bold mb-8">Tech Stack</h2>
      <div className="relative">
        <motion.div
          className="flex space-x-8 animate-scroll"
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          {techStack.map((tech, idx) => (
            <motion.div
              key={idx}
              className="p-4 text-xl border-2 border-transparent rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              custom={idx}
              whileHover="hover"
              whileTap="tap"
            >
              <div className="text-5xl">{tech.icon}</div>
              <p className="mt-2 text-lg">{tech.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
