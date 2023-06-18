const Step = ({ pos, num, title, desc }) => (
  <div className={`w-full max-w-5xl flex flex-row justify-${pos}`}>
    <div className="w-64 m-2 p-4 rounded-2xl flex flex-row justify-end">
      <h1 className="absolute text-9xl font-black text-blue-300">{num}</h1>
      <div className="w-full relative">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="font-light opacity-50">{desc}</p>
      </div>
    </div>
  </div>
)

export default Step