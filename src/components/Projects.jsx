const projects = [
  {
    icon: '🛒',
    name: 'ShopNext — E-Commerce Platform',
    desc: 'ระบบร้านค้าออนไลน์ครบวงจร รองรับ payment, inventory และ admin dashboard ด้วย Next.js + Tailwind',
    tags: ['Next.js', 'Tailwind', 'Stripe', 'MongoDB'],
    live: '#',
    github: '#',
    badge: 'Live',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  },
  {
    icon: '📊',
    name: 'Analytics Dashboard',
    desc: 'Dashboard วิเคราะห์ข้อมูล Real-time ด้วย Chart.js และ WebSocket พร้อม dark mode สวยๆ',
    tags: ['React', 'Tailwind', 'Chart.js', 'Node.js'],
    live: '#',
    github: '#',
    badge: 'Demo',
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  },
  {
    icon: '💬',
    name: 'ChatApp — Real-time Messaging',
    desc: 'แอปแชทเรียลไทม์ รองรับ rooms, file sharing และ notifications ด้วย Socket.io',
    tags: ['React', 'Socket.io', 'Tailwind', 'PostgreSQL'],
    live: '#',
    github: '#',
    badge: 'Live',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="max-w-3xl mx-auto px-8 pb-16">
      <p className="text-xs text-indigo-500 font-semibold uppercase tracking-widest mb-2">ผลงาน</p>
      <h2 className="text-2xl font-bold text-white mb-8 tracking-tight">โปรเจกต์ที่ภูมิใจ</h2>

      <div className="flex flex-col gap-3">
        {projects.map((p) => (
          <div
            key={p.name}
            className="bg-[#111118] border border-white/[0.07] hover:border-indigo-500/35 rounded-2xl p-5 grid grid-cols-[1fr_auto] gap-4 items-center transition-all duration-300 hover:translate-x-1"
          >
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 bg-indigo-500/10 rounded-lg flex items-center justify-center text-lg shrink-0">
                  {p.icon}
                </div>
                <span className="font-semibold text-white text-sm">{p.name}</span>
                <span className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${p.badgeColor}`}>
                  {p.badge}
                </span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed mb-3">{p.desc}</p>
              <div className="flex gap-1.5 flex-wrap">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-400 font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <a href={p.live}>
                <button className="w-full bg-white/[0.04] hover:bg-indigo-500/15 border border-white/[0.08] hover:border-indigo-500 text-slate-400 hover:text-indigo-400 text-xs px-4 py-2 rounded-lg transition-all duration-200 whitespace-nowrap">
                  Live ↗
                </button>
              </a>
              <a href={p.github}>
                <button className="w-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-400 hover:text-white text-xs px-4 py-2 rounded-lg transition-all duration-200 whitespace-nowrap">
                  GitHub
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
