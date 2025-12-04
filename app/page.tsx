export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-x-hidden">
      {/* Animated background grid */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-30"></div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center z-10">
          <div className="mb-6">
            <div className="inline-block px-4 py-2 mb-8 border border-yellow-400/30 rounded-full bg-yellow-400/10 backdrop-blur-sm">
              <span className="text-yellow-400 text-sm font-mono tracking-wider">PORTFOLIO v2.0</span>
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent animate-pulse">
              EDMUND
            </span>
            <span className="block text-white mt-2">DEVELOPER</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto font-light">
            Crafting digital experiences with code
            <span className="text-yellow-400 animate-pulse">_</span>
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(250,204,21,0.5)]"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400/10 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
          
          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce">
            <div className="w-6 h-10 border-2 border-yellow-400/50 rounded-full mx-auto flex items-start justify-center p-2">
              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
            </div>
          </div>
        </div>
        
        {/* Glowing orb effects */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
            <span className="text-yellow-400">ABOUT</span> ME
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Welcome to my coding space. I'm a passionate developer who loves building 
                innovative solutions and bringing ideas to life through code.
              </p>
              <p>
                I specialize in creating modern, responsive web applications with a focus on 
                user experience and performance. Every project is an opportunity to learn, 
                grow, and push the boundaries of what's possible.
              </p>
            </div>
            <div className="relative">
              <div className="border-2 border-yellow-400/30 rounded-lg p-8 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                    <span className="font-mono text-yellow-400">Status: Available</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                    <span className="font-mono text-yellow-400">Location: Remote</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                    <span className="font-mono text-yellow-400">Focus: Full Stack</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
            <span className="text-yellow-400">TECH</span> STACK
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'JavaScript',
              'Tailwind', 'Git', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker'
            ].map((skill, index) => (
              <div
                key={skill}
                className="group relative p-6 border border-yellow-400/20 rounded-lg bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm hover:border-yellow-400/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(250,204,21,0.3)]"
              >
                <div className="text-center">
                  <div className="text-2xl mb-2">⚡</div>
                  <div className="font-mono text-sm text-gray-300 group-hover:text-yellow-400 transition-colors">
                    {skill}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
            <span className="text-yellow-400">PROJECTS</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div
                key={project}
                className="group relative border border-yellow-400/20 rounded-lg overflow-hidden bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm hover:border-yellow-400/50 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="w-full h-48 bg-gradient-to-br from-yellow-400/20 to-yellow-600/10 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-4xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-yellow-400">Project {project}</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    A cutting-edge application built with modern technologies and best practices.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 text-xs bg-yellow-400/20 text-yellow-400 rounded-full border border-yellow-400/30">
                      React
                    </span>
                    <span className="px-3 py-1 text-xs bg-yellow-400/20 text-yellow-400 rounded-full border border-yellow-400/30">
                      TypeScript
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12">
            <span className="text-yellow-400">GET</span> IN TOUCH
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Let's collaborate and build something amazing together.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <a
              href="mailto:your.email@example.com"
              className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400/10 transition-all duration-300 flex items-center gap-2"
            >
              <span>📧</span> Email
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400/10 transition-all duration-300 flex items-center gap-2"
            >
              <span>💻</span> GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400/10 transition-all duration-300 flex items-center gap-2"
            >
              <span>🔗</span> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-yellow-400/10">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p className="font-mono text-sm">
            © {new Date().getFullYear()} Built with <span className="text-yellow-400">Next.js</span> & <span className="text-yellow-400">Tailwind CSS</span>
          </p>
        </div>
      </footer>
    </main>
  );
}
