import Link from 'next/link'
import React from 'react'

const header = () => {
    return (
        <div className='w-full absolute text-white z-10'>
            <nav className='container relative flex flex-wrap items-center justify-between mx-auto p-8'>
                <Link href='/' className='text-3xl'>Home</Link>
                <div className='text-1xl space-x-4'>
                    <Link href='performance'>performance</Link>
                    <Link href='reliability'>reliability</Link>
                    <Link href='scale'>scale</Link>
                </div>
            </nav>
        </div>
    )
}

export default header