"use client"

import Navbar from '@/Components/Navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/Components/Footer/Footer'
import { ToggleTheme } from '@/Contexts/ToggleTheme'
import AuthProvider from '@/Components/AuthProvider/AuthProvider'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const [mode, setmode] = useState("dark");

  const toggle = () => {
    setmode(prev => (prev === "dark" ? "light" : "dark"))
  }

  return (
    <html lang="en">
      <body className={`${inter.className} theme ${mode}`}>
        <ToggleTheme.Provider value={{mode, toggle}}>
            <AuthProvider>
              <div className='flex flex-col justify-center gap-[100px]'>
                <Navbar />
                {children}
                <Footer />
              </div>
            </AuthProvider>
        </ToggleTheme.Provider>
      </body>
    </html>
  )
}
