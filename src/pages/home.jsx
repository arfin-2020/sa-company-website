import { useEffect } from "react";
import image2 from "../assets/construction-building.jpeg";
import { Link } from "react-router-dom";
import ServicesCard from "./ServiceCard";
import HomeProject from "./HomeProject";
import PartnerLogos from "./PartnerLogos";

export default function Home() {
  useEffect(() => {
    const slides = document.querySelectorAll(".hero-slide");
    let currentSlide = 0;

    const nextSlide = () => {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
    };

    // Change slide every 4 seconds
    const slideInterval = setInterval(nextSlide, 4000);

    // Reveal animations on mount
    const reveals = document.querySelectorAll(".reveal");
    setTimeout(() => {
      reveals.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add("active");
        }, index * 200);
      });
    }, 300);

    // Cleanup
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <>
      <section
        id="home"
        className="relative h-screen flex items-center justify-center text-white pt-20"
      >
        <style>{`
        .hero-slider-container {
            position: absolute;
            inset: 0;
            overflow: hidden;
            z-index: -1;
        }
        .hero-slide {
            position: absolute;
            inset: 0;
            opacity: 0;
            transition: opacity 1.5s ease-in-out;
            background-size: cover;
            background-position: center;
        }
        .hero-slide.active {
            opacity: 1;
        }
        .hero-slide::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(to bottom, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.6));
        }
        .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease-out;
        }
        .reveal.active {
            opacity: 1;
            transform: translateY(0);
        }
        .btn-primary {
            background-color: #ee9f26;
        }
        .btn-primary:hover {
            background-color: #d1ab40;
        }
      `}</style>

        {/* Slider Background */}
        <div className="hero-slider-container">
          {/* Slide 1 (Requested Image) */}
          <div
            className="hero-slide active"
            style={{
              backgroundImage:
                "url('https://images.wallpaperscraft.com/image/single/building_construction_frame_223639_3840x2160.jpg')",
            }}
          ></div>
          {/* Slide 2 */}
          <div
            className="hero-slide"
            style={{
              backgroundImage: `url(${image2})`,
            }}
          ></div>
          {/* Slide 3 */}
          <div
            className="hero-slide"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80')",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center z-10">
          <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight reveal">
            Building Infrastructure.
            <br />
            <span style={{ color: "#ee9f26" }}>Developing the Future.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto reveal">
            Delivering Civil Contracting & Real Estate Development Excellence
            across the Sultanate of Oman with precision and safety.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 reveal">
            <Link
              to="/projects"
              className="px-8 py-4 btn-primary text-white font-bold rounded-sm transition-all text-lg shadow-xl"
            >
              Our Projects
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-sm hover:bg-white/20 transition-all text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <span className="text-brand-accent font-bold tracking-widest uppercase text-sm">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mt-4 mb-6">
                Salman Al Askari SPC
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Salman Al Askari SPC is a civil contracting & Real estate
                Development Company that offers all services related to civil
                contracting and trading for all types of civil infrastructure
                projects. We deliver the projects with the highest levels of
                accuracy, quality, and safety along with customer satisfaction.
              </p>
              <Link
                to="/about"
                className="bg-[#ee9f26]/10 border-2 border-[#ee9f26] text-[#ee9f26] font-semibold py-2 px-6 rounded-lg backdrop-blur-md hover:bg-[#ee9f26] hover:text-white transition-colors duration-400"
              >
                About us
              </Link>
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
      {/* <ServicesCard /> */}
      <HomeProject />
      <PartnerLogos />
    </>
  );
}
