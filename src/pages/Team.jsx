import { useState } from "react";
import { Linkedin, Twitter, Mail, Award, Users, Target } from "lucide-react";

const TeamSection = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      image: "SJ",
      imageUrl:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop&crop=faces",
      bio: "Visionary leader with 15+ years driving innovation in tech",
      linkedin: "#",
      twitter: "#",
      email: "sarah@company.com",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Chief Technology Officer",
      image: "MC",
      imageUrl:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop&crop=faces",
      bio: "Tech innovator passionate about scalable solutions",
      linkedin: "#",
      twitter: "#",
      email: "michael@company.com",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Head of Design",
      image: "ER",
      imageUrl:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=600&fit=crop&crop=faces",
      bio: "Award-winning designer crafting exceptional experiences",
      linkedin: "#",
      twitter: "#",
      email: "emily@company.com",
    },
    {
      id: 4,
      name: "David Kim",
      role: "VP of Marketing",
      image: "DK",
      imageUrl:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=600&fit=crop&crop=faces",
      bio: "Strategic marketer building powerful brand narratives",
      linkedin: "#",
      twitter: "#",
      email: "david@company.com",
    },
    {
      id: 5,
      name: "Jessica Taylor",
      role: "Head of Product",
      image: "JT",
      imageUrl:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=600&fit=crop&crop=faces",
      bio: "Product strategist focused on user-centric innovation",
      linkedin: "#",
      twitter: "#",
      email: "jessica@company.com",
    },
    {
      id: 6,
      name: "Alex Martinez",
      role: "Chief Operations Officer",
      image: "AM",
      imageUrl:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&h=600&fit=crop&crop=faces",
      bio: "Operations expert optimizing processes for excellence",
      linkedin: "#",
      twitter: "#",
      email: "alex@company.com",
    },
  ];

  const stats = [
    { icon: Users, value: "50+", label: "Team Members" },
    { icon: Award, value: "15+", label: "Industry Awards" },
    { icon: Target, value: "200+", label: "Projects Delivered" },
  ];

  return (
    <div className="w-full bg-linear-to-br from-slate-50 via-white to-slate-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-4">
            <span className="bg-linear-to-r from-[#ee9f26] to-[#f4b960] text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide shadow-lg">
              OUR TEAM
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-4 md:mb-6">
            Meet The Minds Behind
            <span className="block mt-2 bg-linear-to-r from-[#ee9f26] to-[#f4b960] bg-clip-text text-transparent">
              Our Success
            </span>
          </h2>
          <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            A diverse team of experts dedicated to transforming ideas into
            reality and pushing the boundaries of innovation
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 border border-slate-100"
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-linear-to-br from-[#ee9f26]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Content */}
              <div className="relative p-8 lg:p-10">
                {/* Avatar */}
                <div className="relative mb-6">
                  <div className="w-48 h-48 sm:w-52 sm:h-52 lg:w-56 lg:h-56 mx-auto rounded-3xl bg-linear-to-br from-[#ee9f26] to-[#f4b960] overflow-hidden shadow-2xl group-hover:scale-105 transition-all duration-700 ease-out ring-4 ring-white">
                    {member.imageUrl ? (
                      <img
                        src={member.imageUrl}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white text-4xl font-bold">
                        {member.image}
                      </div>
                    )}
                  </div>
                  {/* Online Indicator */}
                  <div className="absolute bottom-4 right-1/2 transform translate-x-24 sm:translate-x-28 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg"></div>
                </div>

                {/* Info */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-[#ee9f26] transition-colors duration-500">
                    {member.name}
                  </h3>
                  <p className="text-[#ee9f26] font-semibold mb-4 text-sm uppercase tracking-wider">
                    {member.role}
                  </p>
                  <p className="text-slate-600 text-base leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Social Links */}
                <div
                  className="flex justify-center gap-3 transition-all duration-500"
                  style={{
                    opacity: hoveredMember === member.id ? 1 : 0,
                    transform:
                      hoveredMember === member.id
                        ? "translateY(0)"
                        : "translateY(10px)",
                  }}
                >
                  <a
                    href={member.linkedin}
                    className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#ee9f26] flex items-center justify-center transition-all duration-300 group/icon"
                  >
                    <Linkedin className="w-5 h-5 text-slate-600 group-hover/icon:text-white transition-colors" />
                  </a>
                  <a
                    href={member.twitter}
                    className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#ee9f26] flex items-center justify-center transition-all duration-300 group/icon"
                  >
                    <Twitter className="w-5 h-5 text-slate-600 group-hover/icon:text-white transition-colors" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#ee9f26] flex items-center justify-center transition-all duration-300 group/icon"
                  >
                    <Mail className="w-5 h-5 text-slate-600 group-hover/icon:text-white transition-colors" />
                  </a>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-[#ee9f26] to-transparent rounded-bl-full opacity-10"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-linear-to-r from-[#ee9f26] to-[#f4b960] rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-white/90 font-medium text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
