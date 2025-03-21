import React from 'react';
import { Database, Server, Github as Git, Terminal, Code2, Coffee, Github, Linkedin, Mail, ExternalLink, Layers } from 'lucide-react';
import profileImg from './Portfolio_pic.png';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-slate-900/20" />
        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-2/6">
          <div className="aspect-square rounded-2xl bg-gradient-to-br   border-2  p-2">
            <div className="w-full h-[105%] rounded-xlflex items-center justify-center ">
          {/* Uncomment the line below and ensure the profileImg import is correct */}
          <img
            src={profileImg}
            alt="Profile"
            className="w-full h-full object-cover rounded-xl "
          />
            </div>
          </div>
        </div>
        <div className="flex-1 max-w-3xl">
          <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 mb-6">
            Available for Freelance Projects
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
            MERN Stack Backend Developer
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            Specialized in building scalable applications with MongoDB, Express.js, React, and Node.js
          </p>
          <div className="flex gap-4">
            <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition">
          Get in Touch
            </a>
            <a href="#projects" className="border border-slate-600 hover:border-blue-500 px-6 py-3 rounded-lg font-medium transition">
          View Projects
            </a>
          </div>
        </div>
        
          </div>
        </div>
      </header>

      {/* MERN Stack Section */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">MERN Stack Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500 transition group">
              <div className="text-green-500 mb-4 group-hover:scale-110 transition">
                <Layers className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">MongoDB</h3>
              <p className="text-slate-300">Expert in NoSQL database design, aggregation pipelines, and performance optimization</p>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500 transition group">
              <div className="text-blue-500 mb-4 group-hover:scale-110 transition">
                <Server className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Express.js</h3>
              <p className="text-slate-300">Building robust APIs, middleware implementation, and request handling</p>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500 transition group">
              <div className="text-blue-400 mb-4 group-hover:scale-110 transition">
                <Code2 className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">React</h3>
              <p className="text-slate-300">Frontend integration expertise, state management, and component architecture</p>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500 transition group">
              <div className="text-green-400 mb-4 group-hover:scale-110 transition">
                <Terminal className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Node.js</h3>
              <p className="text-slate-300">Asynchronous programming, event-driven architecture, and server-side logic</p>
            </div>
          </div> 
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-slate-800" id="skills">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCard
              icon={<Database className="w-8 h-8" />}
              title="Database Design"
              description="Expertise in designing and optimizing database schemas, working with SQL and NoSQL databases"
            />
            <SkillCard
              icon={<Server className="w-8 h-8" />}
              title="Server Architecture"
              description="Building scalable server infrastructures and microservices"
            />
            <SkillCard
              icon={<Code2 className="w-8 h-8" />}
              title="API Development"
              description="RESTful and GraphQL API design and implementation"
            />
            <SkillCard
              icon={<Terminal className="w-8 h-8" />}
              title="DevOps"
              description="CI/CD pipelines, containerization, and cloud deployment"
            />
            <SkillCard
              icon={<Git className="w-8 h-8" />}
              title="Version Control"
              description="Git workflow, code review, and collaboration"
            />
            <SkillCard
              icon={<Coffee className="w-8 h-8" />}
              title="Problem Solving"
              description="Analytical thinking and efficient problem-solving skills"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24" id="projects">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="E-Commerce Backend"
              description="Scalable microservices architecture handling 10k+ transactions daily"
              tags={['Node.js', 'MongoDB', 'Express', 'Redis']}
              githubUrl="https://github.com/yourusername/ecommerce-backend"
              liveUrl="https://api.example.com/docs"
            />
            <ProjectCard
              title="Real-time Chat System"
              description="WebSocket-based messaging platform with message persistence"
              tags={['WebSocket', 'MongoDB', 'Express', 'Redis']}
              githubUrl="https://github.com/yourusername/realtime-chat"
              liveUrl="https://chat.example.com"
            />
            <ProjectCard
              title="API Gateway"
              description="Custom API gateway with rate limiting and authentication"
              tags={['Node.js', 'Express', 'JWT', 'Redis']}
              githubUrl="https://github.com/yourusername/api-gateway"
              liveUrl="https://gateway.example.com"
            />
            <ProjectCard
              title="Data Processing Pipeline"
              description="Distributed system processing 1TB+ data daily"
              tags={['Node.js', 'MongoDB', 'Express', 'Kafka']}
              githubUrl="https://github.com/yourusername/data-pipeline"
              liveUrl="https://pipeline.example.com"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-slate-800" id="contact">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-center space-x-8">
              <SocialLink href="https://github.com" icon={<Github className="w-8 h-8" />} label="GitHub" />
              <SocialLink href="https://linkedin.com" icon={<Linkedin className="w-8 h-8" />} label="LinkedIn" />
              <SocialLink href="mailto:your.email@example.com" icon={<Mail className="w-8 h-8" />} label="Email" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function SkillCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 bg-slate-700 rounded-lg hover:bg-slate-600 transition">
      <div className="text-blue-400 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-300">{description}</p>
    </div>
  );
}

function ProjectCard({ title, description, tags, githubUrl, liveUrl }: { title: string; description: string; tags: string[]; githubUrl: string; liveUrl?: string }) {
  return (
    <div className="p-6 bg-slate-800 border border-slate-700 rounded-lg hover:border-blue-500 transition">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="flex gap-2">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition"
            title="View on GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition"
              title="View Live Demo"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
      <p className="text-slate-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="px-3 py-1 bg-slate-700 rounded-full text-sm">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      className="text-slate-400 hover:text-blue-400 transition flex flex-col items-center gap-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
      <span className="text-sm">{label}</span>
    </a>
  );
}

export default App;