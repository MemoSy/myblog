"use client"

import { useState } from 'react';
import './page.css'
import { useRouter } from 'next/navigation';

const Page = () => {

  const [err, setErr] = useState(false);
  const router = useRouter()
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch('/api/auth/register',{
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      })
      console.log(res.status)
      res.status == 201 && router.push("/dashboard/login?success=AccountCreated")
    } catch (error) {
      setErr(true)
    }

  }

  return (
    <div className='flex justify-center items-center'>
      <form class="form">
        <span class="title">Register</span>
        <label for="username" class="label">Username</label>
        <input value={name} onChange={(e) => setname(e.target.value)} type="text" id="username" class="input" />
        <label for="email" class="label">Email</label>
        <input value={email} onChange={(e) => setemail(e.target.value)} type="email" id="email" class="input" />
        <label for="password" class="label">Password</label>
        <input value={password} onChange={(e) => setpassword(e.target.value)} type="password" id="password" name="password" required="" class="input" />
        <button onClick={handleSubmit} type="submit" class="submit">Register</button>
      </form>
      {err && "something error"}
    </div>
  )
}

export default Page
