import React, { useEffect, useState } from 'react';

const ResourcesSection = () => {
  // Logic for the counting animation
  const [counts, setCounts] = useState({ engineers: 0, workforce: 0, equipment: 0, compliance: 0 });

  useEffect(() => {
    const targets = { engineers: 25, workforce: 150, equipment: 40, compliance: 100 };
    const duration = 2000; // 2 seconds
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);

    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      
      setCounts({
        engineers: Math.floor(targets.engineers * progress),
        workforce: Math.floor(targets.workforce * progress),
        equipment: Math.floor(targets.equipment * progress),
        compliance: Math.floor(targets.compliance * progress),
      });

      if (frame === totalFrames) clearInterval(timer);
    }, frameDuration);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Equipment Table */}
          <div>
            <h3 className="text-2xl font-bold text-[#0f172a] mb-8 flex items-center">
              <span className="w-8 h-1 bg-[#ee9f26] mr-3"></span> Plant & Machinery
            </h3>
            <div className="bg-slate-50 border border-slate-100 rounded-lg overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#0f172a] text-white">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Category</th>
                    <th className="px-6 py-4 font-semibold">Machinery Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-6 py-4 font-bold text-[#ee9f26]">Earthmoving</td>
                    <td className="px-6 py-4">Dozers, Excavators, Loaders</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold text-[#ee9f26]">Road Works</td>
                    <td className="px-6 py-4">Graders, Rollers, Asphalt Pavers</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold text-[#ee9f26]">Logistics</td>
                    <td className="px-6 py-4">Tippers, Water Tankers, Vehicles</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold text-[#ee9f26]">Power</td>
                    <td className="px-6 py-4">Heavy Duty Generators</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Manpower Stats */}
          <div style={{ transitionDelay: "200ms" }}>
            <h3 className="text-2xl font-bold text-[#0f172a] mb-8 flex items-center">
              <span className="w-8 h-1 bg-[#ee9f26] mr-3"></span> Professional Strength
            </h3>
            <div className="grid grid-cols-2 gap-6">
              
              {/* Stat Card 1 */}
              <div className="p-6 bg-[#f8fafc] rounded-lg text-center border border-slate-100">
                <div className="text-4xl font-black text-[#0f172a] mb-1">
                  {counts.engineers}
                </div>
                <div className="text-xs uppercase font-bold text-gray-500 tracking-wider">
                  Engineers
                </div>
              </div>

              {/* Stat Card 2 */}
              <div className="p-6 bg-[#f8fafc] rounded-lg text-center border border-slate-100">
                <div className="text-4xl font-black text-[#0f172a] mb-1">
                  {counts.workforce}
                </div>
                <div className="text-xs uppercase font-bold text-gray-500 tracking-wider">
                  Skilled Workforce
                </div>
              </div>

              {/* Stat Card 3 */}
              <div className="p-6 bg-[#f8fafc] rounded-lg text-center border border-slate-100">
                <div className="text-4xl font-black text-[#0f172a] mb-1">
                  {counts.equipment}
                </div>
                <div className="text-xs uppercase font-bold text-gray-500 tracking-wider">
                  Heavy Equipment
                </div>
              </div>

              {/* Stat Card 4 */}
              <div className="p-6 bg-[#f8fafc] rounded-lg text-center border border-slate-100">
                <div className="text-4xl font-black text-[#0f172a] mb-1">
                  {counts.compliance}%
                </div>
                <div className="text-xs uppercase font-bold text-gray-500 tracking-wider">
                  Quality Compliance
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
