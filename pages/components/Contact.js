
export default function Contact() {
    return (
      <section id="contact" className="py-16 bg-white dark:bg-gray-800 text-black dark:text-white text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
        <p className="text-lg mb-4">Feel free to reach out to me via email or social media.</p>
        <div className="flex justify-center space-x-4">
          <a href="rhythm00ahuja@gmail.com" className="text-blue-500 hover:underline">Email</a>
          <a href="https://www.linkedin.com/in/rijish-ahuja-5b42751a1/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn</a>
          <a href="https://github.com/Rijish13Ahuja" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>
        </div>
      </section>
    );
  }
  