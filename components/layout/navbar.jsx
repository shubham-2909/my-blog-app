import Link from 'next/link'
import Logo from './logo'
import styled from './navbar.module.css'
export default function Navbar() {
  return (
    <header className={styled.header}>
      <Link href={`/`}>
        <Logo />
      </Link>

      <nav>
        <ul>
          <li>
            <Link href={`/posts`}>Posts</Link>
          </li>
          <li>
            <Link href={`/contact`}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
