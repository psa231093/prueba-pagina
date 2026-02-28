import FeatureCard from './FeatureCard'

const WatchIcon = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
    <rect x="16" y="8" width="16" height="32" rx="6" stroke="#7C3AED" strokeWidth="2"/>
    <circle cx="24" cy="24" r="7" stroke="#7C3AED" strokeWidth="2"/>
    <path d="M24 20v4l2.5 2.5" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round"/>
    <rect x="20" y="4" width="8" height="6" rx="1.5" fill="#E9D5FF"/>
    <rect x="20" y="38" width="8" height="6" rx="1.5" fill="#E9D5FF"/>
    {/* Pulse arc */}
    <path d="M10 24 h4 l2-5 l3 10 l2-8 l2 5 h4" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
  </svg>
)

const ShieldIcon = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
    <path d="M24 6L8 12v12c0 8.837 6.716 17.1 16 19 9.284-1.9 16-10.163 16-19V12L24 6z"
      stroke="#F59E0B" strokeWidth="2" fill="#FEF3C7"/>
    <path d="M24 6L8 12v12c0 8.837 6.716 17.1 16 19 9.284-1.9 16-10.163 16-19V12L24 6z"
      stroke="#F59E0B" strokeWidth="2"/>
    {/* Warning lines */}
    <circle cx="24" cy="26" r="1.5" fill="#F59E0B"/>
    <path d="M24 18v6" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
    {/* Little stars */}
    <circle cx="12" cy="10" r="1" fill="#FCA5A5"/>
    <circle cx="36" cy="10" r="1" fill="#93C5FD"/>
    <circle cx="8" cy="24" r="1" fill="#A7F3D0"/>
  </svg>
)

const ClipboardIcon = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
    <rect x="12" y="10" width="24" height="30" rx="3" stroke="#06B6D4" strokeWidth="2" fill="#ECFEFF"/>
    <rect x="18" y="6" width="12" height="7" rx="2" fill="#A5F3FC" stroke="#06B6D4" strokeWidth="1.5"/>
    <path d="M18 22h12M18 28h9M18 34h6" stroke="#06B6D4" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="15" cy="22" r="1.5" fill="#06B6D4"/>
    <circle cx="15" cy="28" r="1.5" fill="#06B6D4"/>
    <circle cx="15" cy="34" r="1.5" fill="#06B6D4"/>
  </svg>
)

const RecordsIcon = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
    <rect x="10" y="8" width="22" height="28" rx="3" stroke="#EF4444" strokeWidth="2" fill="#FEF2F2" transform="rotate(-5 10 8)"/>
    <rect x="14" y="12" width="22" height="28" rx="3" stroke="#F97316" strokeWidth="2" fill="#FFF7ED" transform="rotate(2 14 12)"/>
    <rect x="18" y="14" width="22" height="28" rx="3" stroke="#EC4899" strokeWidth="2" fill="white"/>
    <path d="M24 22h10M24 28h7M24 34h5" stroke="#EC4899" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="21" cy="22" r="1.5" fill="#EC4899"/>
    <circle cx="21" cy="28" r="1.5" fill="#EC4899"/>
    <circle cx="21" cy="34" r="1.5" fill="#EC4899"/>
  </svg>
)

const FaceIcon = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
    <circle cx="24" cy="24" r="16" stroke="#8B5CF6" strokeWidth="2" fill="#EDE9FE"/>
    {/* Eyes */}
    <circle cx="19" cy="21" r="2.5" fill="#7C3AED"/>
    <circle cx="29" cy="21" r="2.5" fill="#7C3AED"/>
    {/* Smile */}
    <path d="M18 28c1.5 3 10.5 3 12 0" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Cheeks */}
    <circle cx="15" cy="27" r="3" fill="#FCA5A5" opacity="0.5"/>
    <circle cx="33" cy="27" r="3" fill="#FCA5A5" opacity="0.5"/>
    {/* Signal waves */}
    <path d="M38 14 C40 16, 40 18, 38 20" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M41 11 C44 14, 44 20, 41 23" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const features = [
  {
    icon: <WatchIcon />,
    title: 'Call service',
    description: 'Take the initiative to call',
  },
  {
    icon: <ShieldIcon />,
    title: 'Active warning',
    description: 'Timely detection of accidents',
  },
  {
    icon: <ClipboardIcon />,
    title: 'Care plan',
    description: 'The care content is pushed',
  },
]

const featuresRow2 = [
  {
    icon: <RecordsIcon />,
    title: 'Health records',
    description: 'Intelligent collection of elderly body data',
  },
  {
    icon: <FaceIcon />,
    title: "Children's interaction",
    description: 'Health data is received in real time',
  },
]

export default function FeaturesGrid() {
  return (
    <div className="relative z-10 -mt-48 pt-14 pb-20 bg-gray-50 rounded-t-3xl">
      <div className="max-w-5xl mx-auto px-8">
        {/* Row 1 — 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {features.map((f) => (
            <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.description} />
          ))}
        </div>
        {/* Row 2 — 2 cards, same width as row 1, centered via 6-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          <div className="md:col-start-2 md:col-span-2">
            <FeatureCard icon={featuresRow2[0].icon} title={featuresRow2[0].title} description={featuresRow2[0].description} />
          </div>
          <div className="md:col-start-4 md:col-span-2">
            <FeatureCard icon={featuresRow2[1].icon} title={featuresRow2[1].title} description={featuresRow2[1].description} />
          </div>
        </div>
      </div>
    </div>
  )
}
