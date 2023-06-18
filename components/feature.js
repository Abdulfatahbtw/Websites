import Link from "next/link"
import { BsArrowRight } from "react-icons/bs"

const Feature = ({ children, title }) => (
  <div className="w-80 bg-blue-50 hover:bg-blue-100 transition-2 p-6 rounded-2xl flex flex-col justify-start gap-4 group">
    <div className="w-16 h-16 bg-blue-300 rounded-full flex justify-center items-center p-3">{children}</div>
    <h1 className="font-bold text-3xl">{title}</h1>
    <p className="font-light opacity-50">Lorem ipsum dolor sit amet consectetur. Consequat eget nunc consectetur amet hendrerit.</p>
    <Link href='/' className="w-12 h-12 bg-transparent transition-2 group-hover:bg-blue-600 rounded-full ml-auto p-3">
      <BsArrowRight className="w-full h-auto transition-2 fill-black group-hover:fill-white" />
    </Link>
  </div>
)

export default Feature