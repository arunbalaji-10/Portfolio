import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export const ProjectCard = ({ title, description, tech }) => {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="bg-white p-8 rounded-[var(--radius-apple)] border border-apple-border shadow-sm hover:shadow-xl transition-all duration-500"
    >
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-apple-secondary mb-6 leading-relaxed">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {tech.map((item) => (
          <span key={item} className="px-3 py-1 bg-apple-section text-xs font-medium rounded-full">
            {item}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <button className="flex items-center gap-2 text-sm font-semibold text-apple-primary hover:underline">
          <Github size={18} /> Code
        </button>
        <button className="flex items-center gap-2 text-sm font-semibold text-apple-primary hover:underline">
          <ExternalLink size={18} /> Demo
        </button>
      </div>
    </motion.div>
  );
};