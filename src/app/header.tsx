import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header>
      <nav className="p-2">
        <ul className="flex items-center space-x-4">
          <li>
            <Image src="/vercel.svg" className="w-22" alt={'vercel logo'} width={100} height={50} />
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/test">Test</Link>
          </li>
          <li>
            <Link href="/home">Next Demo</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
