import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="max-w-3xl mx-auto px-8 pb-16">
      <p className="text-xs text-indigo-500 font-semibold uppercase tracking-widest mb-2">ติดต่อ</p>
      <h2 className="text-2xl font-bold text-white mb-8 tracking-tight">มาทำงานด้วยกัน</h2>

      <div className="bg-[#111118] border border-white/[0.07] rounded-2xl p-7">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              required
              type="text"
              placeholder="ชื่อของคุณ"
              className="bg-white/[0.04] border border-white/10 focus:border-indigo-500 text-slate-200 placeholder:text-slate-600 rounded-lg px-4 py-2.5 text-sm outline-none transition-colors duration-200"
            />
            <input
              required
              type="email"
              placeholder="อีเมล"
              className="bg-white/[0.04] border border-white/10 focus:border-indigo-500 text-slate-200 placeholder:text-slate-600 rounded-lg px-4 py-2.5 text-sm outline-none transition-colors duration-200"
            />
          </div>

          <input
            type="text"
            placeholder="หัวข้อ"
            className="bg-white/[0.04] border border-white/10 focus:border-indigo-500 text-slate-200 placeholder:text-slate-600 rounded-lg px-4 py-2.5 text-sm outline-none transition-colors duration-200"
          />

          <textarea
            required
            rows={4}
            placeholder="เล่าให้ฟังเกี่ยวกับโปรเจกต์ของคุณ..."
            className="bg-white/[0.04] border border-white/10 focus:border-indigo-500 text-slate-200 placeholder:text-slate-600 rounded-lg px-4 py-2.5 text-sm outline-none transition-colors duration-200 resize-none"
          />

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white font-semibold text-sm py-3 rounded-xl transition-all duration-200"
          >
            {sent ? '✓ ส่งแล้ว!' : 'ส่งข้อความ →'}
          </button>

        </form>
      </div>
    </section>
  )
}
