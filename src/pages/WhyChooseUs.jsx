import {
  CheckCircle,
  Shield,
  Wrench,
  Users,
  TrendingUp,
  MessageSquare,
  Award,
  Globe,
} from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: "Proven Track Record",
      description:
        "Years of experience delivering complex civil infrastructure and real estate projects across Oman with consistent excellence.",
    },
    {
      icon: Wrench,
      title: "End-to-End Solutions",
      description:
        "Comprehensive civil contracting and trading services from planning to handover, ensuring seamless coordination at every phase.",
    },
    {
      icon: Shield,
      title: "Safety First Culture",
      description:
        "Stringent safety protocols exceeding industry standards, ensuring zero-compromise on health and safety measures.",
    },
    {
      icon: TrendingUp,
      title: "Cutting-Edge Technology",
      description:
        "Latest construction technologies and methodologies for enhanced efficiency, precision, and sustainability.",
    },
    {
      icon: MessageSquare,
      title: "Transparent Communication",
      description:
        "Direct access to our project management team with clear, honest communication and regular updates throughout your journey.",
    },
    {
      icon: CheckCircle,
      title: "Competitive Value",
      description:
        "Premium results with optimal cost efficiency through strategic resource management and efficient execution.",
    },
    {
      icon: Globe,
      title: "Local Expertise, International Standards",
      description:
        "Understanding of local regulations and culture while adhering to international quality benchmarks for world-class results.",
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      description:
        "Your satisfaction is our priority. We work closely with you to understand and exceed your expectations.",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className=" text-black py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-[#ee9f26]">
            Why Choose Us
          </h1>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Your Trusted Partner in Civil Construction Excellence
          </p>
          <p className="text-lg text-black mt-4 max-w-2xl mx-auto">
            When you choose Salman Al Askari SPC, you're selecting more than
            just a contractor – you're partnering with a company committed to
            transforming your vision into reality with precision and care.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 border border-slate-200"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[#eed7ae] rounded-lg p-3 flex-shrink-0">
                    <Icon className="w-8 h-8 text-[#ee9f26]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">
                      {reason.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
