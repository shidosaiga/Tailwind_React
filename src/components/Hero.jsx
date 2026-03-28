import { useState, useEffect } from 'react'

const phrases = [
  'สร้าง Web App สวยๆ ด้วย React',
  'ออกแบบ UI ด้วย Tailwind CSS',
  'พัฒนา Full Stack ครบวงจร',
  'เปลี่ยนไอเดีย → โปรดักต์จริง',
]

const stats = [
  { num: '3+', label: 'ปีประสบการณ์' },
  { num: '24+', label: 'โปรเจกต์' },
  { num: '12+', label: 'ลูกค้า' },
  { num: '98%', label: 'ความพึงพอใจ' },
]

export default function Hero() {
  const [text, setText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const phrase = phrases[phraseIndex]
    let timeout

    if (!deleting) {
      if (charIndex < phrase.length) {
        timeout = setTimeout(() => setCharIndex((c) => c + 1), 60)
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800)
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => setCharIndex((c) => c - 1), 35)
      } else {
        setDeleting(false)
        setPhraseIndex((p) => (p + 1) % phrases.length)
        timeout = setTimeout(() => {}, 400)
      }
    }

    setText(phrase.slice(0, charIndex))
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, phraseIndex])

  return (
    <section id="about" className="max-w-3xl mx-auto px-8 pt-20 pb-16 text-center">

      {/* Badge */}
      <div className="animate-fade-up inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs px-4 py-1.5 rounded-full mb-7">
        <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-float" />
        กำลังรับงาน Freelance
      </div>

      {/* Heading */}
      <h1 className="animate-fade-up text-5xl font-bold text-white leading-tight tracking-tight mb-2">
        สวัสดี ผม<span className="text-indigo-500"> สมชาย</span>
      </h1>
      <p className="animate-fade-up-delay-1 text-slate-500 text-base mb-2">Full Stack Developer</p>

      {/* Typewriter */}
      <div className="animate-fade-up-delay-1 text-xl text-slate-400 font-medium mb-8 h-8">
        {text}
        <span className="inline-block w-0.5 h-5 bg-indigo-500 ml-0.5 align-middle animate-blink" />
      </div>

      {/* Buttons */}
      <div className="animate-fade-up-delay-2 flex gap-3 justify-center mb-12">
        <a href="#projects">
          <button className="bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white px-7 py-3 rounded-xl text-sm font-semibold transition-all duration-200">
            ดูผลงาน ↓
          </button>
        </a>
        <a href="#contact">
          <button className="border border-white/10 hover:border-white/30 text-slate-400 hover:text-white px-7 py-3 rounded-xl text-sm transition-all duration-200">
            ติดต่อฉัน
          </button>
        </a>
      </div>

      {/* Stats */}
      <div className="animate-fade-up-delay-3 flex border border-white/[0.07] rounded-2xl overflow-hidden">
        {stats.map((s, i) => (
          <div
            key={i}
            className={`flex-1 py-5 text-center ${i < stats.length - 1 ? 'border-r border-white/[0.07]' : ''}`}
          >
            <div className="text-2xl font-bold text-white">
              {s.num.replace(/\d+/, (n) => (
                `${n}`
              ))}
              <span className="text-indigo-500">
                {s.num.replace(/[0-9]/g, '')}
              </span>
            </div>
            <div className="text-xs text-slate-500 mt-1 uppercase tracking-widest">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
