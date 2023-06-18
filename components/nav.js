import { BsList, BsXLg } from "react-icons/bs"
import Link from "next/link"

const Nav = () => (
    <nav className="flex flex-row justify-between items-center px-8 py-6 w-full max-w-6xl">
      <Link className="text-3xl font-bold text-white" href='/'>UME TV</Link>
      <div className="hidden flex-row justify-center items-center gap-32 md:flex">
        <ul className="flex flex-row justify-center items-center gap-8">
          <li><Link className="text-black hover:text-white transition-1" href='/'>Home</Link></li>
          <li><Link className="text-black hover:text-white transition-1" href='/'>About US</Link></li>
          <li><Link className="text-black hover:text-white transition-1" href='/'>Services</Link></li>
          <li><Link className="text-black hover:text-white transition-1" href='/'>Blog</Link></li>
        </ul>
        <Link className="bg-white text-black px-6 py-3 rounded-2xl" href='/'>Contact US</Link>
      </div>
      <div className="flex md:hidden">
        <details>
          <summary className="list-none">
            <BsList className="text-center text-4xl fill-white" />
          </summary>
          <ul className="absolute z-10 left-0 backdrop-blur-xl w-full py-8 flex flex-col justify-center items-end px-8 gap-8 shadow-xl">
            <li><Link className="text-white" href='/'>Home</Link></li>
            <li><Link className="text-white" href='/'>About US</Link></li>
            <li><Link className="text-white" href='/'>Services</Link></li>
            <li><Link className="text-white" href='/'>Blog</Link></li>
          </ul>
        </details>
      </div>
    </nav>
)

export default Nav