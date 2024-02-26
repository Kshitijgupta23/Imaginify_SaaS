import React from 'react';
import Image from "next/image";
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className='sidebar'>
        <div className='flex size-full flex-col gap-4'>
            <Link className='sidebar-logo' href="/">
                <Image src="/assets/images/logo-text.svg" alt="Logo" width={180} height={28}/>
            </Link>
        </div>
    </aside>
  )
}

export default Sidebar;