import { useState } from 'react'

export default function LoginForm() {
  const [form, setForm] = useState({
    email: '', password: ''
  })
  const [errors, setErrors] = useState({})

  return (
    
    <div className=' px-4 py-10'>
    <div className="bg-white rounded-2xl p-7
        border border-slate-200 w-full
        max-w-sm mx-auto ">

      <h2 className="text-xl font-bold
        text-slate-900 mb-1" >
        เข้าสู่ระบบ
      </h2>


     
      <div className="mb-4">
        <label className="text-xs font-semibold
          text-slate-700 mb-1 block">Email</label>
        <input
          className="w-full border-[1.5px]
            border-slate-200
            focus:border-indigo-500
            rounded-lg px-3 py-2
            text-sm outline-none
            transition-colors"
        />
      </div>


        <div className="mb-6">
        <label className="text-xs font-semibold
            text-slate-700 mb-1 block">Password</label>
        <input
          type="password"
          className="w-full border-[1.5px]
            border-slate-200
            focus:border-indigo-500
            rounded-lg px-3 py-2
            text-sm outline-none
            transition-colors"
        />
      </div>
    
      <button className="w-full bg-indigo-600
        hover:bg-indigo-500
        active:scale-95
        text-white font-semibold
        py-2.5 rounded-lg
        transition-all text-sm">
        เข้าสู่ระบบ
      </button>
    </div>
    </div>
  )
  
}