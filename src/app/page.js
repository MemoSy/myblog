import Image from 'next/image'
import Hero from "public/hero.png";

export default function Home() {
  return (
    <>
      <div className="flex justify-around px-56">
        <div className="flex flex-col justify-around">
          <h1 className="text-[60px] w-[450px] font-[800]">
            <span className='bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent'>Next JS Blog </span>My Next JS first Blog.
          </h1>
          <p className="text-[20px] w-[480px] text-slate-300 font-[500]">
            Here You Can See Some Page I Create Using Next JS Libary.
          </p>
          <button className='p-2 rounded-md bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800' > See Our Works </button>
        </div>
        <div className="">
          <img src="https://img.freepik.com/free-photo/businessman-with-thumb-up_1368-8838.jpg?w=826&t=st=1692199410~exp=1692200010~hmac=f65528e167cb2d289dd86108d82a1778aada7aa09a97fc8ee1525703ace0d0c4" style={{borderRadius:"25px"}}  alt="" height={500} width={500} className="imageAnim" />
        </div>
      </div>
    </>
  )
}
