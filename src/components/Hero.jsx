import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="vh-100 d-flex flex-column justify-content-center align-items-center text-center text-white"
  style={{ 
    background: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)"}} >
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="display-3 fw-bold mb-3"
      >
        Hi, I'm Fahim
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.5, duration: 1 }}
        className="lead mb-4"
      >
        Computer Science Student | React Developer
      </motion.p>
      <motion.a 
        href="#projects" 
        whileHover={{ scale: 1.1 }} 
        className="btn btn-light btn-lg shadow"
      >
        View My Work
      </motion.a>
    </section>
  );
}