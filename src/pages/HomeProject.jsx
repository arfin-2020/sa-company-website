import { ArrowRight } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const HomeProject = () => {
  const [activeFilter, setActiveFilter] = useState("all");

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
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-[#ee9f26] font-bold tracking-widest uppercase text-sm">
              Portfolio
            </span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2">
              Landmark Projects
            </h2>
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
                animation: `fadeIn 0.5s ease-out ${index * 100}ms forwards`,
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
                <span className="text-[#ee9f26] text-xs font-bold uppercase">
                  {project.tag}
                </span>
                <h4 className="text-xl font-bold text-slate-900 mt-1">
                  {project.title}
                </h4>
                <p className="text-gray-500 text-sm mt-2">
                  Client: {project.client}
                </p>

                {/* Button with Arrow Animation */}
                <div className="mt-5">
                  <Link
                    to="/projects"
                    onClick={() => (window.location.href = "#")}
                    className="group/btn inline-flex items-center gap-2 text-[#ee9f26] font-bold text-sm uppercase tracking-wider hover:text-[#ee9f26] transition-all"
                  >
                    <span>See More</span>

                    <div className="p-2 bg-orange-50 rounded-full group-hover/btn:bg-[#ee9f26] group-hover/btn:text-white transition-all duration-300 transform group-hover/btn:translate-x-1">
                      <ArrowRight size={18} />
                    </div>
                  </Link>
                  {/* Subtle Bottom Accent Line */}
                  <div className="h-1.5 w-0 bg-[#ee9f26] group-hover:w-full transition-all duration-700 absolute bottom-0 left-0" />
                </div>
              </div>
            </div>
          ))}
       
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No projects found in this category.
            </p>
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
  );
};

export default HomeProject;
