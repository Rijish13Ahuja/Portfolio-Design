import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: 'Project 1',
    description: 'A frontend project built with React and Next.js',
    link: 'https://github.com/your-profile/project1',
  },
  {
    title: 'Project 2',
    description: 'A web app using JavaScript and CSS',
    link: 'https://github.com/your-profile/project2',
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: (index) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.1, 
      type: 'spring',
      stiffness: 100,
    },
  }),
};

export default function Projects() {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, ease: 'easeOut' },
      });
    }
  }, [controls, inView]);

  return (
    <motion.section
      id="projects"
      className="py-16 bg-gray-100 dark:bg-gray-900 text-black dark:text-white"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
    >
      <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="border p-4 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 transform"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={idx}
            whileHover={{
              scale: 1.05,
              rotate: 2,
              boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.3)",
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
