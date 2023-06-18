import About from "@/components/about"
import Clients from "@/components/clients"
import Features from "@/components/features"
import Hero from "@/components/hero"
import Join from "@/components/join"
import Pricing from "@/components/pricing"
import Strategy from "@/components/strategy"
import Link from "next/link"
import { BsFacebook, BsInstagram, BsTiktok, BsTwitter, BsYoutube } from "react-icons/bs"

export default function Home() {
  return (
    <>
      <header className="w-full flex flex-col items-center overflow-hidden">
        <div className="absolute w-full flex flex-col items-center overflow-hidden">
          <div className="w-[2126px] h-[800px] bg-svg1" />
        </div>
        <Hero />
      </header>
      <main>
        <About />
        <Features />
        <Strategy />
        <Pricing />
        <Clients />
        <Join />
      </main>
      <footer className="w-full flex flex-col justify-center items-center gap-4">
        <h1 className="mx-8 text-2xl font-semibold text-blue-700">DIGITAL AGENCY</h1>
        <p className="mx-8 font-light opacity-50">Lorem ipsum dolor sit amet consectetur. Viverra aliquam congue aliquam ante ac.</p>
        <div className="flex flex-row gap-8">
          <Link href="/"><BsInstagram className="text-4xl fill-blue-700" /></Link>
          <Link href="/"><BsTiktok className="text-4xl fill-blue-700" /></Link>
          <Link href="/"><BsTwitter className="text-4xl fill-blue-700" /></Link>
          <Link href="/"><BsYoutube className="text-4xl fill-blue-700" /></Link>
          <Link href="/"><BsFacebook className="text-4xl fill-blue-700" /></Link>
        </div>
        <span className="bg-blue-500 w-full sm:text-sm text-xs text-center text-opacity-90 text-white py-2 mt-4">@2023 all rights reserved- by ABDULFATAH AZIZI & NMROOD</span>
      </footer>
    </>
  )
}
