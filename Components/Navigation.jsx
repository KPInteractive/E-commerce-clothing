import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '@/styles/navigation.scss'

const Navigation = () => {
  return (
    <div className='navigation'>
        <Link className='logo-container' href='/'>
            <Image className='logo' src='/crown.svg' width={70} height={70} />
        </Link>
        <div className='nav-links-container'>
            <Link className='nav-link' href='/shop'>
                SHOP
            </Link>
        </div>

    </div>
  )
}

export default Navigation