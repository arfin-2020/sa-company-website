import WhyChooseUs from "./WhyChooseUs";
import TeamSection from "./Team";

export default function About() {
  return (
    <>
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <span className="text-brand-accent font-bold tracking-widest uppercase text-sm">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mt-4 mb-6">
                SALMAN AL ASKARI GROUP
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                SALMAN AL ASKARI GROUP is a civil contracting and real estate
                development company delivering reliable construction solutions
                across Oman. We provide a full range of services related to
                civil infrastructure, contracting, and trading, serving both
                government and private sector clients.
              </p>

              <p className="text-gray-600 leading-relaxed mb-8">
                Our reputation is built on the pillars of{" "}
                <strong>Quality, Accuracy, and Safety</strong>. Whether it's
                government infrastructure or private residential complexes, our
                site teams ensure every project meets international standards of
                durability and aesthetics.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 border-l-4 border-brand-accent">
                  <h4 className="font-bold text-brand-dark">
                    Unmatched Quality
                  </h4>
                  <p className="text-xs text-gray-500">
                    Rigorous inspection at every stage.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 border-l-4 border-brand-accent">
                  <h4 className="font-bold text-brand-dark">Client Centric</h4>
                  <p className="text-xs text-gray-500">
                    Focus on absolute satisfaction.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative reveal transition delay-300">
              <img
                src="https://images.wallpaperscraft.com/image/single/building_construction_frame_223639_3840x2160.jpg"
                alt="Construction Site"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-brand-dark text-white p-8 rounded-lg hidden lg:block">
                <span className="text-4xl font-bold block text-brand-accent">
                  Oman
                </span>
                <span className="text-sm uppercase tracking-widest">
                  Engineering Leader
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-20 bg-[#0f172a]  text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}

            <div className="bg-white/5 p-10 rounded-lg border border-white/10 transition-all hover:border-[#d4af37]">
              <div className="w-12 h-12 bg-[#ee9f26] rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-[#0f172a]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3
                className="text-2xl font-bold mb-4 text-white"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Our Mission
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <span className="text-[#d4af37] mr-2">▹</span> Highest quality
                  standards alongside cost efficiency
                </li>
                <li className="flex items-center">
                  <span className="text-[#d4af37] mr-2">▹</span> High quality
                  standards in all phases
                </li>
                <li className="flex items-center">
                  <span className="text-[#d4af37] mr-2">▹</span> Optimal cost
                  efficiency for clients
                </li>
                <li className="flex items-center">
                  <span className="text-[#d4af37] mr-2">▹</span> Implementation
                  of innovative technology
                </li>
                <li className="flex items-center">
                  <span className="text-[#d4af37] mr-2">▹</span> Strong project
                  management protocols
                </li>
              </ul>
            </div>

            {/* Vision Card */}
            <div
              className="bg-white/5 p-10 rounded-lg border border-white/10 transition-all hover:border-[#ee9f26]"
              style={{ transitionDelay: "200ms" }}
            >
              <div className="w-12 h-12 bg-[#ee9f26] rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-[#0f172a]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3
                className="text-2xl font-bold mb-4 text-white"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Our Vision
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Our vision is to reach a level of excellence that ensures us an
                excellent grade contracting company in the Oman through
                professionalism and executing the best quality in our projects.
              </p>
            </div>
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <TeamSection />
    </>
  );
}
