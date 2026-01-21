import { ArrowRight, ShieldCheck, Building2, Layers } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceCard = ({ icon: Icon, image, title, description }) => {
  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full">
      {/* Image Section with Zoom and Overlay */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          onError={(e) => {
            e.target.src =
              "https://www.climatech-inc.ca/wp-content/uploads/2021/06/3d-render-3-buildings-exterior-view-picture-id1172567061.jpg";
          }}
        />
        {/* Modern Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

        {/* Floating Icon Badge */}
        <div className="absolute -bottom-6 right-8 bg-[#ee9f26] p-4 rounded-2xl shadow-lg text-white transform group-hover:-translate-y-2 transition-transform duration-500">
          <Icon size={24} />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8 pt-10 flex flex-col grow">
        <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-[#ee9f26] transition-colors duration-300">
          {title}
        </h3>

        <p className="text-slate-500 text-base leading-relaxed mb-8 grow">
          {description}
        </p>

        {/* Button with Arrow Animation */}
        <div className="mt-auto">
          <Link
            to="/services"
            onClick={() => (window.location.href = "#")}
            className="group/btn inline-flex items-center gap-2 text-[#ee9f26] font-bold text-sm uppercase tracking-wider hover:text-[#ee9f26] transition-all"
          >
            <span>See More</span>

            <div className="p-2 bg-orange-50 rounded-full group-hover/btn:bg-[#ee9f26] group-hover/btn:text-white transition-all duration-300 transform group-hover/btn:translate-x-1">
              <ArrowRight size={18} />
            </div>
          </Link>
        </div>
      </div>

      {/* Subtle Bottom Accent Line */}
      <div className="h-1.5 w-0 bg-[#ee9f26] group-hover:w-full transition-all duration-700 absolute bottom-0 left-0" />
    </div>
  );
};

export default function ServicesCard() {
  const services = [
    {
      id: 1,
      icon: Building2,
      title: "Road Construction",
      description: "Major highways and inner-city infrastructure networks.",
      image:
        "https://media.istockphoto.com/id/526298880/photo/road-rollers-working-on-the-construction-site.jpg?s=612x612&w=0&k=20&c=C7CM-81xFktkVKcJMmC-CgYuE5D2zomncwTv7kZ5h4o=",
    },
    {
      id: 2,
      icon: Layers,
      title: "Residential Buildings",
      description: "Modern apartment complexes with high-end finishing.",
      image:
        "https://www.climatech-inc.ca/wp-content/uploads/2021/06/3d-render-3-buildings-exterior-view-picture-id1172567061.jpg",
    },
    {
      id: 3,
      icon: ShieldCheck,
      title: "Villa Construction",
      description: "Bespoke private luxury villas designed for Omani comfort.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2022/11/HI/TQ/HS/7822679/vila-building-construction-service.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 ">
          <span className="text-brand-accent font-bold tracking-widest uppercase text-sm">
            Capabilities
          </span>
          <h2 className="text-4xl font-heading font-bold text-brand-dark mt-2">
            Comprehensive Solutions
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}
