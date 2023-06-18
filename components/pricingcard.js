import Link from "next/link"
import { BsCheckLg, BsXLg } from "react-icons/bs"

const PricingCard = ({ title, features, price, z }) => {
  const allFeatures = [
    'Lorem ipsum dolor sit amet consectetur.',
    'Lorem ipsum dolor sit amet consectetur.',
    'Lorem ipsum dolor sit amet consectetur.',
    'Lorem ipsum dolor sit amet consectetur.',
    'Lorem ipsum dolor sit amet consectetur.'
  ]
  return (
  <div className={`flex flex-col justify-center items-center max-w-sm rounded-3xl px-8 py-12 gap-8 shadow-2xl ${z?"bg-blue-600 text-white":"bg-white"}`}>
    <h1 className="text-6xl font-medium">{title}</h1>
    <ul className="flex flex-col justify-center items-center gap-4">
      {
        allFeatures.map((x, i) => (
          features[i] ? (
            <li className="flex flex-row justify-center items-center gap-2 text-sm"><BsCheckLg className="text-3xl" />{x}</li>
          ):(
            <li className="flex flex-row justify-center items-center gap-2 text-sm opacity-50"><BsXLg className="text-3xl" />{x}</li>
          )
        ))
      }
    </ul>
    <div className="w-full">
      <h2 className="text-2xl font-semibold">{`$${price}/MO`}</h2>
    </div>
    <Link className={`bg-white text-blue-800 py-4 px-12 rounded-2xl font-medium ${z?"":"border-blue-700 border-2"}`} href='/'>Purchase</Link>
  </div>
)}

export default PricingCard