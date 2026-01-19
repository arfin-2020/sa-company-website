import { useEffect } from "react";
import image2 from "../assets/construction-building.jpeg";
export default function Home() {
  useEffect(() => {
    const slides = document.querySelectorAll(".hero-slide");
    let currentSlide = 0;

    const nextSlide = () => {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
    };

    // Change slide every 5 seconds
    const slideInterval = setInterval(nextSlide, 5000);

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
            background-color: #d4af37;
        }
        .btn-primary:hover {
            background-color: #b8941f;
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
          <span style={{ color: "#d4af37" }}>Developing the Future.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto reveal">
          Delivering Civil Contracting & Real Estate Development Excellence
          across the Sultanate of Oman with precision and safety.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 reveal">
          <a
            href="#projects"
            className="px-8 py-4 btn-primary text-white font-bold rounded-sm transition-all text-lg shadow-xl"
          >
            Our Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-sm hover:bg-white/20 transition-all text-lg"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
