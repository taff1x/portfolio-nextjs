import React from 'react'
import Image from 'next/image'
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo-softaff-trasparent.png" alt="logo" width={200} height={35} />
    </Link>
  )
}

export default Logo