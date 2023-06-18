import ClientCard from "./clientcard"

const Clients = () => (
  <section className="flex flex-col justify-center items-center gap-8 py-8">
    <h1 className="font-bold sm:text-5xl text-3xl mx-8 text-center">What <span className="text-blue-700">our clients</span> say</h1>
    <div className="flex flex-row gap-8 overflow-x-scroll justify-start items-center w-full max-w-7xl px-8 py-4 rounded-3xl">
      <ClientCard name="3bdeslam1" msg="Lorem ipsum dolor sit amet consectetur. Urna commodo nunc sodales pulvinar etiam sit faucibus id faucibus." date="11-07-2022" />
      <ClientCard name="3bdeslam2" msg="Lorem ipsum dolor sit amet consectetur. Urna commodo nunc sodales pulvinar etiam sit faucibus id faucibus." date="11-07-2022" />
      <ClientCard name="3bdeslam3" msg="Lorem ipsum dolor sit amet consectetur. Urna commodo nunc sodales pulvinar etiam sit faucibus id faucibus." date="11-07-2022" />
      <ClientCard name="3bdeslam4" msg="Lorem ipsum dolor sit amet consectetur. Urna commodo nunc sodales pulvinar etiam sit faucibus id faucibus." date="11-07-2022" />
      <ClientCard name="3bdeslam5" msg="Lorem ipsum dolor sit amet consectetur. Urna commodo nunc sodales pulvinar etiam sit faucibus id faucibus." date="11-07-2022" />
      <div className="absolute w-full h-56 pointer-events-none fdgr max-w-7xl -translate-x-8" />
    </div>
  </section>
)

export default Clients