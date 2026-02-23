import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, Linkedin, ExternalLink, Code2, GraduationCap, 
  Mail, Menu, X, Download, ArrowDown, Monitor, Database, 
  Settings, Wrench, ChevronRight, Briefcase, Award, Send, 
  Phone, MapPin, Terminal 
} from 'lucide-react';

// --- MAGNETIC INTERACTION ---
const Magnetic = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouse = (e) => {
    if (window.innerWidth < 768) return;
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.35;
    const y = (clientY - (top + height / 2)) * 0.35;
    setPosition({ x, y });
  };
  return (
    <motion.div 
      onMouseMove={handleMouse} 
      onMouseLeave={() => setPosition({ x: 0, y: 0 })} 
      animate={{ x: position.x, y: position.y }} 
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="relative z-20"
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    { title: "Hire a Helper", desc: "On-demand helper hiring platform where users can post tasks and connect with helpers in real time", tech: ["React", "Node.js", "Express", "MongoDB"]},
    { title: "Urban Waste Management", desc: "IoT-based system designed to improve waste collection efficiency through smart monitoring and optimized routing using real-time data from ultrasonic sensors.", tech: ["IoT", "Sensors", "Web Dashboard", "Node.js"] },
  ];

  const education = [
    { degree: "B.E Computer Science Engineering", school: "Panimalar Engineering College", year: "2023 – 2027", score: "7.6 CGPA" },
    { degree: "Class XII (State Board)", school: "St.Mary's Anglo Indian Higher Secondary School", year: "2023", score: "74.6%" },
    { degree: "Class X (CBSE)", school: "St.Mary's Anglo Indian Higher Secondary School", year: "2021", score: "First Class" }
  ];

  const skillGroups = [
    { title: "Programming", icon: <Code2 strokeWidth={2.5} size={24} />, skills: ["Java", "Python", "C", "Kotlin"] },
    { title: "Web Development", icon: <Monitor strokeWidth={2.5} size={24} />, skills: ["HTML", "CSS", "MERN Stack"] },
    { title: "Databases", icon: <Database strokeWidth={2.5} size={24} />, skills: ["MySQL", "MongoDB"] },
    { title: "Tools", icon: <Wrench strokeWidth={2.5} size={24} />, skills: ["Git", "VS Code", "Android Studio", "MS Excel"] },
    { title: "Operating System", icon: <Settings strokeWidth={2.5} size={24} />, skills: ["Windows", "Linux", "MacOS"] },
    { title: "Soft Skills", icon: <Award strokeWidth={2.5} size={24} />, skills: ["Problem Solving", "Team Work", "Communication"] }
  ];

  const experience = [
    { role: "Artificial Intelligence", company: "Novitech R&D Private Limited", points: ["Implemented basic machine learning models and data preprocessing techniques.", "Worked on AI-based problem solving and experimentation.", "Learned practical AI workflow from data preparation to model evaluation."] },
    { role: "Angular Full Stack", company: "Infosys SpringBoard", points: ["8-week internship on Full Stack Development", "Built a full-stack task marketplace web app using React, Node.js, Express, and MongoDB.", "Implemented JWT authentication, OTP verification, task posting, and request management."] }
  ];

  const certifications = [
    { title: "UiPath Developer", issuer: "UiPath", year: "2025" },
    { title: "Angular Full Stack", issuer: "Infosys", year: "2024" },
    { title: "Cybersecurity Essentials", issuer: "Futureskills Prime", year: "2024" }
  ];

  const glideTo = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) { window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' }); }
  };

  return (
    <div className="bg-white min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div key="loader" exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-white flex items-center justify-center">
            <motion.h1 initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-4xl font-black tracking-tighter text-apple-text">AB<span className="text-apple-primary">.</span></motion.h1>
          </motion.div>
        ) : (
          <motion.main key="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-sans overflow-x-hidden">
            
            <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-apple-border px-6 md:px-24 py-4">
              <div className="max-w-6xl mx-auto flex justify-between items-center relative">
                <span className="font-bold tracking-tighter text-xl text-apple-text cursor-pointer" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>AB</span>
                <div className="hidden md:flex gap-10 text-[12px] font-semibold text-apple-secondary tracking-tight uppercase">
                  <a href="#about" onClick={(e) => glideTo(e, 'about')} className="hover:text-apple-primary transition-colors">About</a>
                  <a href="#education" onClick={(e) => glideTo(e, 'education')} className="hover:text-apple-primary transition-colors">Education</a>
                  <a href="#skills" onClick={(e) => glideTo(e, 'skills')} className="hover:text-apple-primary transition-colors">Skills</a>
                  <a href="#projects" onClick={(e) => glideTo(e, 'projects')} className="hover:text-apple-primary transition-colors">Projects</a>
                  <a href="#contact" onClick={(e) => glideTo(e, 'contact')} className="hover:text-apple-primary transition-colors">Contact</a>
                </div>
                <button className="md:hidden relative z-50 p-2" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={24} /> : <Menu size={24} />}</button>
              </div>
            </nav>

            {/* 1. HERO */}
            <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center pt-10">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                <span className="text-apple-primary font-bold tracking-[0.2em] uppercase text-[10px] mb-6 block">Software Developer | AI & Mobile Enthusiast</span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none mb-8 text-apple-text">Arunbalaji M <br /> <span className="text-apple-secondary/20 hover:text-apple-primary transition-colors duration-700 uppercase">  </span></h1>
                <p className="max-w-lg mx-auto text-apple-secondary text-base md:text-lg mb-10 font-medium">Interested in building impactful products that combine intelligent systems with modern applications.</p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                  <Magnetic><button className="bg-apple-text text-white px-8 py-3.5 rounded-full font-bold shadow-xl transition-all hover:bg-apple-primary">Download Resume</button></Magnetic>
                  <a href="#projects" onClick={(e) => glideTo(e, 'projects')} className="text-apple-text font-bold text-sm flex items-center gap-2 group">Explore Projects <ArrowDown size={18} strokeWidth={2.5} className="group-hover:translate-y-1 transition-transform" /></a>
                </div>
              </motion.div>
            </section>

            {/* 2. ABOUT ME */}
            <section id="about" className="py-24 px-6 md:px-24 bg-white relative z-10 text-left">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold tracking-tight text-apple-text mb-4 uppercase">About Me</h2><div className="h-1 w-12 bg-apple-primary mx-auto rounded-full"></div></div>
                <div className="grid lg:grid-cols-12 gap-8">
                  <motion.div whileHover={{ y: -8, scale: 1.01, boxShadow: "0 20px 40px rgba(0,0,0,0.05)" }} className="lg:col-span-8 bg-[#FBFBFD] border border-apple-border rounded-[28px] p-8 md:p-10 transition-all duration-500">
                    <div className="flex items-center gap-5 mb-8">
                      <div className="p-3.5 bg-white rounded-2xl shadow-sm border border-apple-border"><Briefcase className="text-apple-primary" size={24} strokeWidth={2.5} /></div>
                      <h3 className="text-xl md:text-2xl font-bold text-apple-text tracking-tight uppercase">Software Developer | AI & Mobile Enthusiast</h3>
                    </div>
                    <div className="space-y-5 text-apple-secondary text-base leading-relaxed font-medium">
                      <p>Pre-final-year CSE student with strong <span className="text-apple-text font-bold">DSA</span> knowledge and hands-on experience in AI/ML, full-stack web development, and Android app development.</p>
                      <p>Interested in building impactful products that combine intelligent systems with modern applications.</p>
                    </div>
                  </motion.div>
                  <div className="lg:col-span-4 grid gap-4">
                    {[ { l: "Projects", v: "10+", i: <Code2 /> }, { l: "Skills", v: "15+", i: <Settings /> }, { l: "Experience", v: "1+", i: <Briefcase /> } ].map((stat, i) => (
                      <motion.div key={i} whileHover={{ x: 8, scale: 1.02, backgroundColor: "#0071E3", color: "#FFF" }} className="bg-white border border-apple-border rounded-[22px] p-6 flex justify-between items-center shadow-sm transition-all duration-300 group">
                        <div className="flex items-center gap-4"><div className="p-2.5 bg-apple-section text-apple-primary rounded-xl group-hover:bg-white/20 transition-colors">{stat.i}</div><span className="font-bold text-sm">{stat.l}</span></div>
                        <span className="text-xl font-black">{stat.v}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 3. EDUCATION */}
            <section id="education" className="py-24 px-6 md:px-24 bg-[#FBFBFD] relative z-10 text-left">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase">Academic Journey</h2><div className="h-1 w-12 bg-apple-primary mx-auto mt-4 rounded-full"></div></div>
                <div className="grid gap-6">
                  {education.map((edu, i) => (
                    <motion.div key={i} whileHover={{ y: -5, scale: 1.01, borderColor: "#0071E3" }} className="bg-white p-8 rounded-[28px] border border-apple-border flex flex-col md:flex-row md:items-center justify-between transition-all duration-500 shadow-sm relative group">
                      <div className="flex items-start gap-6">
                        <div className="p-4 bg-apple-section rounded-2xl group-hover:bg-white group-hover:shadow-md transition-all duration-500"><GraduationCap className="text-apple-primary" size={28} strokeWidth={2.5}/></div>
                        <div><h3 className="text-lg md:text-xl font-bold text-apple-text mb-1">{edu.degree}</h3><p className="text-apple-secondary text-sm font-medium">{edu.school}</p><span className="text-apple-primary font-bold text-[10px] uppercase tracking-widest block mt-2">{edu.year}</span></div>
                      </div>
                      <div className="mt-4 md:mt-0 text-3xl font-black text-apple-text/10 group-hover:text-apple-primary/20 transition-colors italic uppercase">{edu.score}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* 4. SKILLS */}
            <section id="skills" className="py-24 px-6 md:px-24 bg-white relative z-10 text-left">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold border-b-2 border-apple-primary inline-block pb-2 uppercase tracking-tighter">Technical Skills</h2></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {skillGroups.map((group, i) => (
                    <motion.div key={i} whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.05)" }} className="bg-[#FBFBFD] p-7 rounded-[26px] border border-apple-border transition-all duration-500 relative group">
                      <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-white text-apple-primary rounded-xl shadow-sm border border-apple-border group-hover:bg-apple-primary group-hover:text-white transition-all duration-500">{group.icon}</div>
                        <ChevronRight size={18} strokeWidth={3} className="text-apple-secondary group-hover:translate-x-1.5 transition-transform" />
                      </div>
                      <h3 className="text-lg font-bold mb-5 tracking-tight text-apple-text">{group.title}</h3>
                      <div className="flex flex-wrap gap-2">{group.skills.map(skill => (<span key={skill} className="px-3.5 py-1.5 bg-white text-apple-text border border-apple-border rounded-full text-[10px] font-bold uppercase group-hover:border-apple-primary transition-all">{skill}</span>))}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* 5. PROJECTS */}
            <section id="projects" className="py-24 px-6 md:px-24 bg-[#FBFBFD] relative z-10 text-left">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase tracking-widest">Selected Works</h2><div className="h-1 w-12 bg-apple-primary mx-auto mt-4 rounded-full"></div></div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {projects.map((project, index) => (
                    <motion.div key={index} whileHover={{ y: -10, scale: 1.01 }} className="group bg-white p-9 rounded-[36px] border border-apple-border transition-all duration-700 relative z-20 overflow-hidden shadow-sm hover:shadow-xl">
                      <div className="flex justify-between items-start mb-8 text-apple-secondary">
                        <div className="p-4 bg-apple-section rounded-2xl group-hover:bg-apple-primary group-hover:text-white transition-colors shadow-md border border-apple-border"><Code2 size={28} strokeWidth={2.5}/></div>
                        <div className="flex gap-4 relative z-30"><Github size={22} className="hover:text-apple-primary transition-colors" /><ExternalLink size={22} className="hover:text-apple-primary transition-colors" /></div>
                      </div>
                      <h4 className="text-xl font-bold mb-3 tracking-tight text-apple-text">{project.title}</h4>
                      <p className="text-apple-secondary text-sm leading-relaxed mb-8 h-20 overflow-hidden font-medium">{project.desc}</p>
                      <div className="flex flex-wrap gap-2">{project.tech.map(t => (<span key={t} className="px-3.5 py-1.5 bg-apple-section text-[9px] font-black uppercase tracking-widest rounded-full group-hover:bg-apple-primary group-hover:text-white transition-all">{t}</span>))}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* 6. EXPERIENCE */}
            <section id="experience" className="py-24 px-6 md:px-24 bg-white relative z-10 text-left">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase">Professional Internships</h2><div className="h-1 w-12 bg-apple-primary mx-auto mt-4 rounded-full"></div></div>
                <div className="space-y-6">
                  {experience.map((exp, i) => (
                    <motion.div key={i} whileHover={{ y: -6, boxShadow: "0 15px 30px rgba(0,0,0,0.05)" }} className="p-7 md:p-9 rounded-[28px] border border-apple-border bg-[#FBFBFD] transition-all duration-500 shadow-sm">
                      <div className="flex items-center gap-5 mb-8">
                        <div className="p-3.5 bg-white rounded-2xl shadow-md border border-apple-border"><Briefcase className="text-apple-primary" size={24} strokeWidth={2.5}/></div>
                        <div><h3 className="text-xl font-bold text-apple-text tracking-tight uppercase">{exp.role}</h3><h4 className="text-apple-primary font-bold text-sm italic">{exp.company}</h4></div>
                      </div>
                      <ul className="grid gap-4">{exp.points.map((p, j) => (<li key={j} className="text-apple-secondary flex items-start gap-4 leading-relaxed text-sm font-medium"><ChevronRight size={18} strokeWidth={3} className="text-apple-primary shrink-0 mt-0.5" />{p}</li>))}</ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* 7. CERTIFICATIONS */}
            <section id="certifications" className="py-24 px-6 md:px-24 bg-[#FBFBFD] relative z-10 text-center">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight uppercase mb-16">Certifications</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {certifications.map((cert, i) => (
                    <motion.div key={i} whileHover={{ scale: 1.04, borderColor: "#0071E3" }} className="bg-white p-7 rounded-[26px] border border-apple-border shadow-sm transition-all duration-500 min-h-[160px] flex flex-col justify-center">
                      <Award className="text-apple-primary mx-auto mb-5" size={28} strokeWidth={2.5} />
                      <h3 className="font-bold text-[10px] leading-tight mb-3 uppercase">{cert.title}</h3>
                      <p className="text-[8px] font-black tracking-widest text-apple-secondary uppercase">{cert.issuer} • {cert.year}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* 8. PROFILES */}
            <section id="profiles" className="py-24 bg-white border-t border-apple-border relative z-30 text-center">
              <h4 className="text-apple-secondary text-[10px] font-black uppercase tracking-[0.6em] mb-12">Connect Everywhere</h4>
              <div className="flex justify-center gap-8">
                <Magnetic><motion.a whileHover={{ y: -10, scale: 1.1 }} href="https://github.com/arunbalaji-10" target="_blank" className="p-7 bg-[#FBFBFD] border border-apple-border rounded-full shadow-lg text-apple-text hover:text-apple-primary transition-all flex items-center justify-center"><Github size={36} strokeWidth={1.5}/></motion.a></Magnetic>
                <Magnetic><motion.a whileHover={{ y: -10, scale: 1.1 }} href="https://www.linkedin.com/in/arunbalaji-meyyappan-02b50b320/" target="_blank" className="p-7 bg-[#FBFBFD] border border-apple-border rounded-full shadow-lg text-apple-text hover:text-apple-primary transition-all flex items-center justify-center"><Linkedin size={36} strokeWidth={1.5}/></motion.a></Magnetic>
                <Magnetic><motion.a whileHover={{ y: -10, scale: 1.1 }} href="https://leetcode.com/u/techknight10/" target="_blank" className="p-7 bg-[#FBFBFD] border border-apple-border rounded-full shadow-lg text-apple-text hover:text-apple-primary transition-all flex items-center justify-center"><Terminal size={36} strokeWidth={1.5}/></motion.a></Magnetic>
              </div>
            </section>

            {/* 9. CONTACT */}
            <section id="contact" className="py-24 px-6 md:px-24 bg-[#FBFBFD] relative z-20 text-left">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">Get In Touch</h2><div className="h-1 w-12 bg-apple-primary mx-auto mt-4 rounded-full"></div></div>
                <div className="grid lg:grid-cols-2 gap-16">
                  <div>
                    <h3 className="text-2xl font-bold mb-8 text-apple-primary uppercase tracking-tighter">Let's build.</h3>
                    <div className="space-y-6">
                      <div className="flex items-center gap-5"><div className="p-3 bg-white rounded-xl shadow-sm border border-apple-border"><Mail className="text-apple-primary" size={20} strokeWidth={2.5}/></div><span className="font-bold text-sm">arunbalajimeyyappan@gmail.com</span></div>
                      <div className="flex items-center gap-5"><div className="p-3 bg-white rounded-xl shadow-sm border border-apple-border"><MapPin className="text-apple-primary" size={20} strokeWidth={2.5}/></div><span className="font-bold text-sm">Chennai, Tamil Nadu</span></div>
                    </div>
                  </div>
                  <form className="space-y-5 relative z-20">
                    <input type="text" placeholder="Full Name" className="w-full p-5 bg-white border border-apple-border rounded-2xl focus:border-apple-primary outline-none transition-all shadow-sm font-bold text-base" />
                    <input type="email" placeholder="Email Address" className="w-full p-5 bg-white border border-apple-border rounded-2xl focus:border-apple-primary outline-none transition-all shadow-sm font-bold text-base" />
                    <textarea placeholder="Your message here..." rows="4" className="w-full p-5 bg-white border border-apple-border rounded-2xl focus:border-apple-primary outline-none transition-all shadow-sm font-bold text-base"></textarea>
                    <button className="w-full py-5 bg-apple-text text-white rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-apple-primary transition-all duration-500 shadow-xl text-lg uppercase tracking-widest active:scale-95"><Send size={20} strokeWidth={2.5}/> Send Message</button>
                  </form>
                </div>
              </div>
            </section>

            <footer className="py-12 bg-[#FBFBFD] border-t border-apple-border text-center text-apple-secondary text-[10px] font-black uppercase tracking-[0.6em]">
              © 2026 Arunbalaji M • Built for Excellence
            </footer>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}