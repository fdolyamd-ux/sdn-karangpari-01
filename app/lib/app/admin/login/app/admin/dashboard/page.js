"use client"

import { useEffect } from "react"
import { supabase } from "../../../lib/supabaseClient"
import { useRouter } from "next/navigation"

export default function Dashboard() {
  const router = useRouter()

  useEffect(() => {
    checkUser()
  }, [])

  const checkUser = async () => {
    const { data } = await supabase.auth.getUser()
    if (!data.user) {
      router.push("/admin/login")
    }
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/admin/login")
  }

  return (
    <div style={{padding:"40px"}}>
      <h1>Dashboard Admin</h1>
      <p>Selamat datang Admin SDN Karangpari 01</p>

      <button 
        onClick={handleLogout}
        style={{
          padding:"10px 20px",
          background:"#dc2626",
          color:"white",
          border:"none",
          cursor:"pointer",
          marginTop:"20px"
        }}
      >
        Logout
      </button>
    </div>
  )
}
