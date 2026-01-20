import React, { useState } from 'react';


export default function ProjectPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  
    const projects = [
       {
      id: 1,
      category: "road",
      image:
        "https://i.ibb.co/ksrFxPsk/Strabag.jpg",
      tag: "Infrastructure",
      title: "Design, Build, Repairs of infrastructure at Monsoon affected Areas North Al Sharqiyah Region",
      client: "STRABAG",
      description:
        "Construction of Cut off wall, Subgrade, ABC and Rip Rap",
    },
    {
      id: 2,
      category: "civil",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
      tag: "Commercial",
      title: "Construction of Internal roads at wilayat dima & Al Tayeen North Sharqiyah",
      client: "M/S GULF ISLAND INTERNATIONAL LLC STRABAG",
      description:
        "Hill Cutting, Embankment Filling, Sub Base, ABC, Kerbstone and Interlock",
    },
    {
      id: 3,
      category: "govt",
      image:
        "https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&q=80",
      tag: "Water Infrastructure",
      title: "Civil Work at Al02 surge feed tank with compound wall for Reinforcement of Al Sharqiyah Water Transmission System.",
      client: "CHINA GEO- ENGINEERING CORPORATION INTERNATIONAL LTD.",
      description:
        "Construction of Surge feed Tank, Chlorination Building, Boundary wall, Hill Cutting, Embankment Filling, Sub Base, ABC, Asphalt, Kerbstone, Interlock, Road Signboards and Road Marking.",
    },
      {
        id: 4,
        category: 'road',
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80',
        tag: 'Infrastructure',
        title: '(NJC,NFR,NLR,BR3) For Reinforcement of AL Sharqiyah Water Transmission System',
        client: 'CHINA GEO- ENGINEERING CORPORATION INTERNATIONAL LTD.',
        description: 'Cutting, Embankment Filling, Sub Base, ABC, Asphalt',
      },
      {
        id: 5,
        category: 'civil',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80',
        tag: 'Residential',
        title: '(DESIGN AND CONSTRUCTION OF LINK ROADS IN WILAYAT SHINAS, NORTH AL BATINAH  GOVERNORATE )',
        client: 'ROAD LINE L.L.C',
        description: 'Structure Works, Road Works',
      },
      {
        id: 6,
        category: 'govt',
        image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80',
        tag: 'Public Works',
        title: '(REHABILITATION AND TREATMENT OF ROAD DAMAGE IN OQ   COMPANY IN RAYSUT AREA)',
        client: 'MOTC',
        description: 'Structure Works, Road Works',
      }
    ];
  
    const filteredProjects = activeFilter === 'all' 
      ? projects 
      : projects.filter(project => project.category === activeFilter);
  
      return (
        <>
         <section id="projects" className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-orange-500 font-bold tracking-widest uppercase text-sm">
              Portfolio
            </span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2">
              Landmark Projects
            </h2>
          </div>
          <div className="flex gap-2 mt-6 md:mt-0 overflow-x-auto pb-2 w-full md:w-auto">
            <button
              className={`px-4 py-2 text-sm font-bold border border-slate-300 transition-all duration-300 rounded whitespace-nowrap ${
                activeFilter === 'all' 
                  ? 'bg-slate-900 text-white border-slate-900' 
                  : 'bg-white text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900'
              }`}
              onClick={() => setActiveFilter('all')}
            >
              All
            </button>
            <button
              className={`px-4 py-2 text-sm font-bold border border-slate-300 transition-all duration-300 rounded whitespace-nowrap ${
                activeFilter === 'road' 
                  ? 'bg-slate-900 text-white border-slate-900' 
                  : 'bg-white text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900'
              }`}
              onClick={() => setActiveFilter('road')}
            >
              Roads
            </button>
            <button
              className={`px-4 py-2 text-sm font-bold border border-slate-300 transition-all duration-300 rounded whitespace-nowrap ${
                activeFilter === 'civil' 
                  ? 'bg-slate-900 text-white border-slate-900' 
                  : 'bg-white text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900'
              }`}
              onClick={() => setActiveFilter('civil')}
            >
              Civil
            </button>
            <button
              className={`px-4 py-2 text-sm font-bold border border-slate-300 transition-all duration-300 rounded whitespace-nowrap ${
                activeFilter === 'govt' 
                  ? 'bg-slate-900 text-white border-slate-900' 
                  : 'bg-white text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900'
              }`}
              onClick={() => setActiveFilter('govt')}
            >
              Govt
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white overflow-hidden shadow-lg group rounded-lg transition-all duration-300 hover:shadow-2xl animate-fadeIn"
              style={{ 
                animationDelay: `${index * 100}ms`,
                opacity: 0,
                animation: `fadeIn 0.5s ease-out ${index * 100}ms forwards`
              }}
            >
              <div className="relative h-64 bg-slate-300 overflow-hidden">
                <img
                  src={project.image}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center p-6 text-white text-center">
                  <p className="text-sm">{project.description}</p>
                </div>
              </div>
              <div className="p-6">
                <span className="text-orange-500 text-xs font-bold uppercase">
                  {project.tag}
                </span>
                <h4 className="text-xl font-bold text-slate-900 mt-1">
                  {project.title}
                </h4>
                <p className="text-gray-500 text-sm mt-2">
                  Client: {project.client}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>

      <style jsx="true">{`
        @keyframes fadeIn {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
        </>
      )
}