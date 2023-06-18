import PricingCard from "./pricingcard"

const Pricing = () => (
  <section className="flex flex-col justify-center items-center gap-8 px-4 py-8 bg-blue-50">
    <h1 className="font-bold sm:text-5xl text-3xl"><span className="text-blue-700">Pricing</span> Plans</h1>
    <p className="font-light opacity-50 max-w-lg text-center">Lorem ipsum dolor sit amet consectetur. Urna commodo nunc sodales pulvinar etiam sit faucibus id faucibus.</p>
    <div className="flex flex-row justify-center items-center flex-wrap gap-8">
      <PricingCard title='Basic' features={[false, false, false, false, true]} price={30} z={false} />
      <PricingCard title='Standart' features={[false, true, true, false, true]} price={50} z={true} />
      <PricingCard title='Pro' features={[true, true, true, true, true]} price={70} z={false} />
    </div>
  </section>
)

export default Pricing