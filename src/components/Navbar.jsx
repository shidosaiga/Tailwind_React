export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 border-b border-white/[0.06] bg-[#0a0a0f] sticky top-0 z-50">
      <div className="text-lg font-bold text-white tracking-tight">
        dev<span className="text-indigo-500">.</span>port
      </div>

      <div className="hidden md:flex gap-7">
        {['เกี่ยวกับ', 'ทักษะ', 'ผลงาน', 'ติดต่อ'].map((item, i) => (
          <a
            key={i}
            href={`#${['about', 'skills', 'projects', 'contact'][i]}`}
            className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
          >
            {item}
          </a>
        ))}
      </div>

      <button className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200">
        Resume ↗
      </button>
    </nav>
  )
}
