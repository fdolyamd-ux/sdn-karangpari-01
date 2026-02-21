"use client"

import { useState } from "react"
import { supabase } from "../../../lib/supabaseClient"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = async (e) => {
    e.preventDefault()

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError("Login gagal. Periksa email dan password.")
    } else {
      router.push("/admin/dashboard")
    }
  }

  return (
    <div style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      height:"100vh",
      background:"#0f172a"
    }}>
      <form onSubmit={handleLogin} style={{
        background:"white",
        padding:"40px",
        borderRadius:"10px",
        width:"300px"
      }}>
        <h2 style={{textAlign:"center"}}>Login Admin</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
          style={{width:"100%", padding:"10px", margin:"10px 0"}}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
          style={{width:"100%", padding:"10px", margin:"10px 0"}}
        />

        <button type="submit" style={{
          width:"100%",
          padding:"10px",
          background:"#1e40af",
          color:"white",
          border:"none",
          cursor:"pointer"
        }}>
          Login
        </button>

        {error && <p style={{color:"red"}}>{error}</p>}
      </form>
    </div>
  )
}
