

const PartnerSlider = () => {
  // Replace these URLs with your actual partner logo image paths
  const partners = [
    {
      id: 1,
      name: "PDO",
      logo: "https://www.hint-global.com/wp-content/uploads/2022/03/PDO-Transparent.png",
      color: "hover:border-blue-500",
    },
    {
      id: 2,
      name: "Oman Oil",
      logo: "https://media.majarracdn.cloud/manhom/mgmt/images/77725/1730119706/%D8%B4%D8%B1%D9%83%D8%A9-%D8%A7%D9%84%D9%86%D9%81%D8%B7-%D8%A7%D9%84%D8%B9%D9%85%D8%A7%D9%86%D9%8A%D8%A9-%D9%84%D9%84%D8%AA%D8%B3%D9%88%D9%8A%D9%82.jpg",
      color: "hover:border-emerald-500",
    },
    {
      id: 3,
      name: "Shell",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e8/Shell_logo.svg/250px-Shell_logo.svg.png",
      color: "hover:border-amber-500",
    },
    {
      id: 4,
      name: "asianpaints",
      logo: "https://printwavesoman.com/wp-content/uploads/2024/10/cl-4.webp",
      color: "hover:border-purple-500",
    },
    {
      id: 5,
      name: "Monanoor",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0RA9sPr4oZf4y1v1fwteCJ32MZ2Nrvm9YSQ&s",
      color: "hover:border-cyan-500",
    },
    {
      id: 6,
      name: "Quantum",
      logo: "https://printwavesoman.com/wp-content/uploads/2024/10/cl-1.webp",
      color: "hover:border-rose-500",
    },
  ];

  // Doubling the array to create a seamless infinite loop
  const displayPartners = [...partners, ...partners];

  return (
    <div className="w-full bg-slate-50 py-20 px-4 font-sans">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
          Our Clients
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
          We provide specialized solutions tailored to your unique real estate
          needs.
        </p>
      </div>

      {/* The Slider Container */}
      <div className="relative group overflow-hidden py-10">
        {/* Decorative Gradients for "Fade In/Out" effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

        {/* Animated Track */}
        <div className="flex w-fit animate-infinite-scroll group-hover:pause-animation">
          {displayPartners.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex flex-col items-center justify-center min-w-[220px] md:min-w-[300px] px-6 transition-all duration-500"
            >
              <div
                className={`relative group/item bg-white p-6 md:p-10 h-32 md:h-40 rounded-2xl shadow-sm border border-slate-100 ${partner.color} hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer w-full flex items-center justify-center overflow-hidden`}
              >
                {/* Real Logo Image */}
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-h-full max-w-full object-contain transition-all duration-500  opacity-60 group-hover/item:grayscale-0 group-hover/item:opacity-100 group-hover/item:scale-110"
                />

                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-slate-100/10 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
              <p className="mt-4 text-xs font-bold text-slate-400 uppercase tracking-widest opacity-0 group-hover/item:opacity-100 transition-all duration-300">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind Custom Animation Injection */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 35s linear infinite;
        }
        .pause-animation {
          animation-play-state: paused;
        }
      `,
        }}
      />
    </div>
  );
};

export default PartnerSlider;
