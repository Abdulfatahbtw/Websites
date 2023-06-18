const ClientCard = ({ name, msg, date }) => (
  <div className="min-w-[340px] px-8 py-6 rounded-2xl shadow-lg bg-blue-50">
    <h1 className="text-2xl font-bold">{name}</h1>
    <p className="font-light opacity-70">{msg}</p>
    <h3 className="text-base font-normal">{date}</h3>
  </div>
)

export default ClientCard