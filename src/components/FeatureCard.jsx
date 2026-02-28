export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col items-center text-center group">
      <div className="mb-5 w-16 h-16 flex items-center justify-center rounded-full bg-purple-50 group-hover:bg-purple-100 transition-colors">
        {icon}
      </div>
      <h3 className="text-gray-800 font-semibold text-base mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  )
}
