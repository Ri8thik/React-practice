import { useState, useMemo } from 'react';
import { Search, Code2, ExternalLink, Github, Sparkles, BookOpen, Filter } from 'lucide-react';
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample projects data - you'll replace this with your actual projects
  const projects = [
    {
      id: 1,
      title: 'Component Library',
      description: 'Custom reusable React components built from scratch',
      category: 'Components',
      tags: ['React', 'CSS', 'Reusable'],
      demoUrl: '#',
      codeUrl: '#',
      learned: ['Component composition', 'Props', 'State management']
    },
    {
      id: 2,
      title: 'Todo App with Hooks',
      description: 'Task management app using useState and useEffect',
      category: 'Projects',
      tags: ['Hooks', 'LocalStorage', 'CRUD'],
      demoUrl: '#',
      codeUrl: '#',
      learned: ['useState', 'useEffect', 'Event handling']
    },
    {
      id: 3,
      title: 'Context API Demo',
      description: 'State management without Redux using Context',
      category: 'Concepts',
      tags: ['Context API', 'State', 'Props drilling'],
      demoUrl: '#',
      codeUrl: '#',
      learned: ['Context API', 'useContext', 'Provider pattern']
    }
  ];

  const categories = ['all', ...new Set(projects.map(p => p.category))];

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJWMzZoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAgOHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>
      
      <div className="relative z-10">
        {/* Hero Section */}
        <header className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Code2 className="w-12 h-12 text-purple-400" />
              <h1 className="text-5xl font-bold text-white">React Learning Journey</h1>
            </div>
            <p className="text-xl text-purple-200 mb-2">Building, Learning & Growing</p>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Welcome to my React learning portfolio! Here you'll find all the projects, components, 
              and concepts I've learned while mastering React.js
            </p>
            
            <div className="flex items-center justify-center gap-4 mt-6">
              <a 
                href="https://github.com/Ri8thik/React-practice" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
              <button className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-all duration-300 hover:scale-105">
                <BookOpen className="w-5 h-5" />
                Learning Notes
              </button>
            </div>
          </div>

          {/* Search and Filter Section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search Bar */}
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search projects, tags, concepts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex items-center gap-2">
                  <Filter className="text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat} className="bg-slate-800">
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Projects Grid */}
        <main className="container mx-auto px-4 pb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
              <Sparkles className="text-yellow-400" />
              Projects & Learnings
            </h2>
            <p className="text-gray-400">
              {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'} found
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map(project => (
              <div
                key={project.id}
                className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-purple-500/20 rounded-xl group-hover:bg-purple-500/30 transition-colors">
                    <Code2 className="w-6 h-6 text-purple-400" />
                  </div>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-white/10 text-gray-300 rounded-lg text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="border-t border-white/10 pt-4 mb-4">
                  <p className="text-sm text-gray-400 mb-2 font-semibold">What I learned:</p>
                  <ul className="space-y-1">
                    {project.learned.map((item, idx) => (
                      <li key={idx} className="text-sm text-purple-300 flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.demoUrl}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                  <a
                    href={project.codeUrl}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No projects found</h3>
              <p className="text-gray-400">Try adjusting your search or filter</p>
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-8 border-t border-white/10">
          <p className="text-center text-gray-400">
            Built with React & Tailwind CSS • Last updated: {new Date().toLocaleDateString()}
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App
