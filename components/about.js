import Link from "next/link"

const About = () => (
  <section className="flex flex-row items-center justify-center gap-8 px-12">
    <div className="bg-about xl:h-[32rem] h-[40rem] w-full flex flex-row xl:items-center items-start xl:justify-end justify-center max-w-6xl">
      <div className="flex flex-col gap-4 max-w-xl">
        <h1 className="text-black sm:text-5xl text-3xl font-bold">We are a digital agency</h1>
        <p className="text-black font-light mb-8 px-4 opacity-50">Lorem ipsum dolor sit amet consectetur. Iaculis netus sollicitudin aliquam eget nunc sit et nunc. Ipsum cursus vel ut pharetra non iaculis nunc.</p>
        <div className="px-8">
          <Link className="text-white px-7 hover:px-11 transition-3 py-3 bg-blue-700 font-medium text-lg rounded-3xl" href='/'>Learn More</Link>
        </div>
      </div>
    </div>
  </section>
)

export default About