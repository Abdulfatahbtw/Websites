import Link from "next/link"
import Step from "./step"

const Strategy = () => (
  <section className="flex flex-col justify-center items-center mt-32 sm:px-16 px-8">
    <h1 className="text-black sm:text-5xl text-3xl font-bold">Our strategy</h1>
    <p className="text-black font-light mb-8 max-w-md text-center px-4 opacity-50">Lorem ipsum dolor sit amet consectetur. Urna commodo nunc sodales pulvinar etiam sit faucibus id faucibus. Vulputate ac leo suspendisse sit nibh velit adipiscing. Sit convallis sit et ut est at cursus fames libero.</p>
    <div className="px-8">
      <Link className="text-white px-7 hover:px-11 transition-3 py-3 bg-blue-700 font-medium text-lg rounded-3xl" href='/'>Learn More</Link>
    </div>
    <Step pos='start' num={1} title='Researching' desc='Lorem ipsum dolor sit amet consectetur. Urna commodo nunc sodales pulvinar etiam sit faucibus id faucibus.' />
    <Step pos='center' num={2} title='Analysing' desc='Lorem ipsum dolor sit amet consectetur. Urna commodo nunc sodales pulvinar etiam sit faucibus id faucibus.' />
    <Step pos='end' num={3} title='Performing' desc='Lorem ipsum dolor sit amet consectetur. Urna commodo nunc sodales pulvinar etiam sit faucibus id faucibus.' />
  </section>
)

export default Strategy