import {
  ShieldCheck,
  Building2,
  Layers,
  Dumbbell,
  Container,
  Van,
  Bolt,
  GanttChart,
} from "lucide-react";

import ResourcesSection from "./ResourcesSection";

const ServiceCardForServicePage = ({
  icon: Icon,
  image,
  title,
  description,
}) => {
  return (
    <div className=" group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full">
      {/* Image Section with Zoom and Overlay */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          onError={(e) => {
            e.target.src =
              "https://images.wallpaperscraft.com/image/single/building_construction_frame_223639_3840x2160.jpg";
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
      </div>

      {/* Subtle Bottom Accent Line */}
      <div className="h-1.5 w-0 bg-[#ee9f26] group-hover:w-full transition-all duration-700 absolute bottom-0 left-0" />
    </div>
  );
};

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      icon: Building2,
      title: "Road Construction",
      description: "Major highways and inner-city infrastructure networks.",
      image: "https://i.ibb.co/NgTXPq91/Road-Construction.jpg",
    },
    {
      id: 2,
      icon: Layers,
      title: "Residential Buildings",
      description: "Modern apartment complexes with high-end finishing.",
      image: "https://cgmood.com/storage/previews/09-2020/30011/30011.jpg",
    },
    {
      id: 3,
      icon: ShieldCheck,
      title: "Villa Construction",
      description: "Bespoke private luxury villas designed for Omani comfort.",
      image:
        "https://media.istockphoto.com/id/471393887/photo/residential-house-under-construction.jpg?s=612x612&w=0&k=20&c=9UIjjlAyusNvyRYnoXA4s5UoAYvHr_zOdLK6llZrhnA=",
    },
    {
      id: 4,
      icon: Dumbbell,
      title: "Asphalt Works",
      description: "Rigid pavement and professional asphalt laying services.",
      image:
        "https://media.istockphoto.com/id/496119890/photo/new-road-construction.jpg?s=612x612&w=0&k=20&c=yyBsEAcd07RME72Dlykh5x018xvv7dG3lQ55y_wrvlA=",
    },
    {
      id: 5,
      icon: Container,
      title: "Concrete Supply",
      description: "High-grade ready-mix concrete supply for massive pours.",
      image:
        "https://concreteshopper.com.au/wp-content/uploads/2024/10/construction-worker-guiding-large-concrete-5656.jpg",
    },
    {
      id: 6,
      icon: GanttChart,
      title: "Crusher Products",
      description: "Bespoke private luxury villas designed for Omani comfort.",
      image: "https://i.ibb.co/cSD6T2jS/crash-product.jpg",
    },
    {
      id: 7,
      icon: Van,
      title: "Material Transport",
      description: "Heavy-duty fleet for logistics and site delivery.",
      image:
        "https://cdn-blog.zameen.com/blog/wp-content/uploads/2021/06/1440x625-23.jpg",
    },
    {
      id: 8,
      icon: Bolt,
      title: "Equipment Rental",
      description: "Graders, Dozers, and Loaders for external contracting.",
      image: "https://www.fezgulf.com/assets/03.jpg",
    },
  ];
  return (
    <>
      <div className=" min-h-screen bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 ">
            <span className="text-[#ee9f26] font-bold tracking-widest uppercase text-sm">
              Capabilities
            </span>
            <h2 className="text-4xl font-heading font-bold text-brand-dark mt-2">
              Comprehensive Solutions
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service) => (
              <ServiceCardForServicePage key={service.id} {...service} />
            ))}
          </div>
        </div>
      </div>

      {/* <!-- Equipment & Manpower Stats --> */}

      <ResourcesSection />
    </>
  );
}
