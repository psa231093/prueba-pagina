export default function HeroSection() {
  return (
    <section className="relative hero-gradient min-h-[68vh] overflow-hidden pt-24 pb-8">
      {/* Background blob decorations */}
      <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-blue-900/30 blur-3xl translate-x-1/3 translate-y-1/3" />
      <div className="absolute right-32 top-12 w-64 h-64 rounded-full bg-blue-800/15 blur-2xl" />

      <div className="relative max-w-7xl mx-auto px-8 flex items-center justify-between gap-12 min-h-[52vh]">
        {/* Left — Copy */}
        <div className="flex-1 max-w-lg">
          <h1 className="text-5xl font-bold text-white leading-tight mb-4">
            Focus on smart care
          </h1>
          <p className="text-gray-400 text-xs tracking-[0.25em] uppercase font-medium mb-8">
            Specialized in smart care service
          </p>
          <button className="flex items-center gap-3 px-6 py-3 border border-white/50 text-white text-sm font-medium rounded-full hover:bg-white/10 transition-all group">
            <span className="w-7 h-7 rounded-full border border-white/60 flex items-center justify-center group-hover:border-white transition-colors">
              <svg className="w-3 h-3 fill-white ml-0.5" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </span>
            Watch the video
          </button>
        </div>

        {/* Right — Laptop Illustration */}
        <div className="flex-1 relative flex items-center justify-center hidden md:flex">
          {/* Floating chart card 1 */}
          <div className="absolute -left-4 top-8 bg-white rounded-xl shadow-2xl p-3 float-animation z-10 w-32">
            <div className="flex items-end gap-1 h-12">
              {[40, 65, 45, 80, 55, 70, 60].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{
                    height: `${h}%`,
                    backgroundColor: ['#7C3AED','#10B981','#7C3AED','#F59E0B','#7C3AED','#10B981','#7C3AED'][i]
                  }}
                />
              ))}
            </div>
            <div className="mt-1.5 flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500"/>
              <span className="text-[9px] text-gray-500">Analytics</span>
            </div>
          </div>

          {/* Floating chart card 2 */}
          <div className="absolute right-0 top-2 bg-white rounded-xl shadow-2xl p-3 float-animation-delayed z-10 w-28">
            {/* Mini donut-like ring */}
            <svg viewBox="0 0 40 40" className="w-10 h-10 mx-auto">
              <circle cx="20" cy="20" r="15" fill="none" stroke="#E9D5FF" strokeWidth="4"/>
              <circle cx="20" cy="20" r="15" fill="none" stroke="#7C3AED" strokeWidth="4"
                strokeDasharray="60 35" strokeLinecap="round" strokeDashoffset="10"/>
              <circle cx="20" cy="20" r="15" fill="none" stroke="#10B981" strokeWidth="4"
                strokeDasharray="25 70" strokeLinecap="round" strokeDashoffset="-50"/>
            </svg>
            <div className="mt-1 flex justify-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-0.5"/>
              <span className="text-[9px] text-gray-500">Report</span>
            </div>
          </div>

          {/* Line chart card */}
          <div className="absolute -right-6 bottom-12 bg-white rounded-xl shadow-2xl p-3 float-animation z-10 w-36" style={{animationDelay: '0.8s'}}>
            <svg viewBox="0 0 80 30" className="w-full h-8">
              <polyline
                points="0,28 10,20 20,24 30,10 40,18 50,8 60,14 70,4 80,10"
                fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              />
              <polyline
                points="0,24 10,26 20,20 30,22 40,14 50,18 60,10 70,16 80,12"
                fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              />
            </svg>
            <div className="mt-1 flex items-center gap-1.5">
              <div className="flex items-center gap-0.5">
                <div className="w-2 h-0.5 bg-purple-500 rounded"/>
                <span className="text-[8px] text-gray-400">2024</span>
              </div>
              <div className="flex items-center gap-0.5">
                <div className="w-2 h-0.5 bg-emerald-500 rounded"/>
                <span className="text-[8px] text-gray-400">2025</span>
              </div>
            </div>
          </div>

          {/* Laptop body */}
          <div className="relative mt-8 z-0">
            <svg viewBox="0 0 340 220" className="w-80" xmlns="http://www.w3.org/2000/svg">
              {/* Screen */}
              <rect x="20" y="10" width="300" height="190" rx="10" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="1.5"/>
              <rect x="30" y="20" width="280" height="170" rx="6" fill="white"/>
              {/* Screen content — mini chart */}
              <rect x="40" y="35" width="260" height="10" rx="3" fill="#E9D5FF" opacity="0.8"/>
              <rect x="40" y="52" width="180" height="6" rx="3" fill="#E9D5FF" opacity="0.5"/>
              <polyline points="40,130 65,110 90,120 115,90 140,105 165,80 190,95 215,70 240,85 265,60 290,75"
                fill="none" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="40,140 65,130 90,135 115,118 140,128 165,110 190,120 215,100 240,112 265,95 290,105"
                fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              {/* Screen border line */}
              <line x1="30" y1="178" x2="310" y2="178" stroke="#E5E7EB" strokeWidth="1"/>
              {/* Keyboard base */}
              <rect x="0" y="200" width="340" height="16" rx="4" fill="#D1D5DB"/>
              <rect x="120" y="202" width="100" height="8" rx="3" fill="#B0B5BE"/>
              {/* Screen hinge */}
              <rect x="160" y="200" width="20" height="4" rx="2" fill="#9CA3AF"/>
            </svg>

            {/* Mouse */}
            <div className="absolute -bottom-4 right-4 w-8 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex flex-col items-center pt-1.5">
              <div className="w-px h-3 bg-gray-300 rounded"/>
            </div>

            {/* Search/magnifier accent */}
            <div className="absolute -top-6 -right-2 w-10 h-10 bg-red-400 rounded-full flex items-center justify-center shadow-lg float-animation" style={{animationDelay:'1.2s'}}>
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="6" stroke="white" strokeWidth="2"/>
                <path d="M16 16l4 4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
