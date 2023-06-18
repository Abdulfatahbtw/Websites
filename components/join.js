import Link from "next/link"

const Join = () => (
  <section className="flex justify-center items-center h-[800px]">
    <div className="absolute w-full flex flex-col items-center overflow-hidden">
      <div className="w-[1606px] h-[696px] bg-svg2" />
    </div>
    <div className="relative flex-col gap-4 max-w-3xl flex justify-center items-center px-8">
      <h1 className="text-7xl font-semibold text-white">JOIN US</h1>
      <p className="text-white font-light opacity-70 text-center">Lorem ipsum dolor sit amet consectetur. Viverra aliquam congue aliquam ante ac.</p>
      <div className="flex flex-row gap-4 w-full">
        <input type="text" placeholder="first name" className="px-4 py-2 rounded-2xl w-full bg-blue-500 text-white placeholder:text-white placeholder:opacity-70" />
        <input type="text" placeholder="last name" className="px-4 py-2 rounded-2xl w-full bg-blue-500 text-white placeholder:text-white placeholder:opacity-70" />
      </div>
      <input type="email" placeholder="enter your email" className="px-4 py-2 rounded-2xl w-full bg-blue-500 text-white placeholder:text-white placeholder:opacity-70" />
      <Link href="/" className="bg-white text-blue-700 py-2 px-4 rounded-2xl hover:px-6 transition-3">Get Started</Link>
    </div>
  </section>
)

export default Join