import Link from "next/link"
import Nav from "./nav"

const Hero = () => (
  <div className="relative w-full flex flex-col items-center h-[760px]">
    <Nav />
    <div className="flex flex-row justify-start items-center gap-8 w-full max-w-7xl sm:px-16 px-8 h-2/3 bg-hero">
      <div className="flex flex-col items-start gap-4 max-w-xl relative">
        <h1 className="text-white text-3xl sm:text-5xl font-bold">Lorem ipsum dolor sit amet consectetur. Elit amet sed nunc eget.</h1>
        <p className="text-white text-lg font-light mb-8">Lorem ipsum dolor sit amet consectetur.</p>
        <div className="flex sm:flex-row flex-col justify-center items-center sm:gap-8 gap-4">
          <Link className="text-black px-4 py-2 bg-white font-medium text-lg rounded-2xl" href='/'>Our Services</Link>
          <Link className="text-white px-4 py-2 font-medium text-lg rounded-2xl" href='/'>Learn More</Link>
        </div>
      </div>
    </div>
  </div>
)

export default Hero