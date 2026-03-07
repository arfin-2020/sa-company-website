import WhyChooseUs from "./WhyChooseUs";
import TeamSection from "./Team";
import CharmanMessage from "./CharmanMessage";

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
              <p className="text-gray-600 leading-relaxed mb-6 text-justify">
                Salman Al Askari Group is one of the leading Excellent Grade
                registered company in Sultanate of Oman since 2017. It has come
                a long way to symbolize commitment, distinction and professional
                Excellence by meeting the stringent, demanding and extra
                ordinary work requirements of high engineering, Building works,
                Industrial projects, Project Management Services, Earthworks,
                Survey works, Building design services & Waterproofing works
                etc. Salman Al Askari Group maintains excellent construction
                standard, dedicated team of Executives, Coordinators, Site
                Engineers and Supervisors with full safety norms. This firm has
                enough infrastructural facilities to mobilize skilled,
                semiskilled work force with qualified supervisors.
              </p>

              <p className="text-gray-600 leading-relaxed mb-8 text-justify">
                Our reputation is built on the pillars of{" "}
                <strong>Quality, Accuracy, and Safety</strong>. Whether it's
                government infrastructure or private residential complexes, our
                site teams ensure every project meets international standards of
                durability and aesthetics.
              </p>
              {/* <div className="grid grid-cols-2 gap-4">
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
              </div> */}
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
          <CharmanMessage />
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
              <p className="mb-2 text-justify">
                The mission of Salman Al Askari Group is to build on our
                reputation for integrity, excellence, experience,
                professionalism and leadership as the nation’s finest
                construction organization by strict adherence to our core values
                and by:
              </p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <span className="text-[#d4af37] mr-2">▹</span> Continuously
                  improving the quality of our work and services.
                </li>
                <li className="flex items-center">
                  <span className="text-[#d4af37] mr-2">▹</span> Constantly
                  striving to exceed each client's expectations.
                </li>
                <li className="flex items-center">
                  <span className="text-[#d4af37] mr-2">▹</span> Maintaining our
                  dedication to the highest moral principles.
                </li>
                <li className="flex items-center">
                  <span className="text-[#d4af37] mr-2">▹</span> Providing our
                  people with a challenging, secure and safe environment in
                  which to achieve personal career goals.
                </li>
                <li className="flex items-center">
                  <span className="text-[#d4af37] mr-2">▹</span> Contributing to
                  the community by researching and developing new and more
                  efficient and eco-friendly methods and solutions for our work
                  and services.
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
              <p className="mb-2 text-justify">
                The SLI vision enhances the internal culture, and maintains
                Salman Al Askari Group reputation as a construction leader, an
                employer of choice, a trustworthy and respected contractor and
                an active community member. Salman Al Askari Group aspires to be
                the most respected builder, renowned for:
              </p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <span className="text-[#d4af37] mr-2">▹</span> Excellence
                </li>
                <li className="flex items-center">
                  <span className="text-[#d4af37] mr-2">▹</span> Leadership
                </li>
                <li className="flex items-center">
                  <span className="text-[#d4af37] mr-2">▹</span> Unsurpassed
                  value
                </li>
                <li className="flex items-center">
                  <span className="text-[#d4af37] mr-2">▹</span> Quality
                </li>
                <li className="flex items-center">
                  <span className="text-[#d4af37] mr-2">▹</span> Professionalism
                </li>
                <li className="flex items-center">
                  <span className="text-[#d4af37] mr-2">▹</span> Corporate
                  Social Responsibility
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <WhyChooseUs /> */}
      <TeamSection />
    </>
  );
}
