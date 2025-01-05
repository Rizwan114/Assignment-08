import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div>
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center border border-b-yellow-500">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      <span className="ml-3 text-xl text-yellow-500">LATEST BLOG WEBSITE</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 hover:text-blue-500">Home</Link>
      <Link href={"blog"} className="mr-5  hover:text-blue-500">About</Link>
      <Link href={"blog"}  className="mr-5 hover:text-blue-500\\\\\\\">Blog</Link>
    </nav>
    
  </div>
</header>

    </div>
  )
}

export default Header
