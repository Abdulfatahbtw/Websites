import Link from "next/link"
import Feature from "./feature"

import { BsPalette, BsCodeSlash, BsGear } from "react-icons/bs"

const Features = () => (
  <section className="flex flex-col items-center justify-center px-12 sm:px-4 mt-16">
    <h1 className="text-black sm:text-5xl text-3xl font-bold">What we  can do</h1>
    <p className="text-black font-light mb-8 max-w-[30rem] text-center px-4 opacity-50">Lorem ipsum dolor sit amet consectetur. Consequat eget nunc consectetur amet hendrerit.</p>
    <div className="flex flex-wrap gap-8 justify-center items-center">
      <Feature title='Design'><BsPalette className="w-full h-auto" /></Feature>
      <Feature title='Design'><BsCodeSlash className="w-full h-auto" /></Feature>
      <Feature title='Design'><BsGear className="w-full h-auto" /></Feature>
    </div>
  </section>
)

export default Features