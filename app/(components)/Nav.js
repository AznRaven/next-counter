import Link from 'next/link'

const Nav = () => {
  return (
    <header>
        <nav className='flex justify-end p-4 gap-4'>
            <Link href={'/'}>Home</Link>
            <Link href={'/counter'}>Counter</Link>
        </nav>
    </header>
  )
}

export default Nav