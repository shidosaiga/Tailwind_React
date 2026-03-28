const skills = [
  { icon: '⚛️', name: 'React',       level: 'Advanced',     pct: 90 },
  { icon: '🎨', name: 'Tailwind',    level: 'Expert',       pct: 95 },
  { icon: '🟨', name: 'JavaScript',  level: 'Advanced',     pct: 88 },
  { icon: '🟦', name: 'TypeScript',  level: 'Intermediate', pct: 72 },
  { icon: '🗄️', name: 'Node.js',     level: 'Advanced',     pct: 82 },
  { icon: '🍃', name: 'MongoDB',     level: 'Intermediate', pct: 68 },
  { icon: '🐘', name: 'PostgreSQL',  level: 'Intermediate', pct: 65 },
  { icon: '🐳', name: 'Docker',      level: 'Basic',        pct: 45 },
]

export default function Skills() {
  return (
    <section id="skills" className="max-w-3xl mx-auto px-8 pb-16">
      <p className="text-xs text-indigo-500 font-semibold uppercase tracking-widest mb-2">ความสามารถ</p>
      <h2 className="text-2xl font-bold text-white mb-8 tracking-tight">ทักษะและเทคโนโลยี</h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {skills.map((s) => (
          <div
            key={s.name}
            className="bg-[#111118] border border-white/[0.07] hover:border-indigo-500/40 rounded-xl p-4 text-center transition-all duration-300 hover:-translate-y-1 group"
          >
            <span className="text-2xl mb-2 block">{s.icon}</span>
            <div className="text-sm font-semibold text-slate-200">{s.name}</div>
            <div className="text-xs text-slate-500 mt-0.5">{s.level}</div>
            <div className="h-0.5 bg-white/[0.06] rounded-full mt-3 overflow-hidden">
              <div
                className="h-full bg-indigo-500 rounded-full transition-all duration-1000 group-hover:bg-indigo-400"
                style={{ width: `${s.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
