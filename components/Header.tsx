import  Link from 'next/link';

function Header() {
  return (
        <header className='flex justify-between p-5'>
            <div className='flex items-center space-x-5'>
                <Link href='/'>
                    <img 
                    className='w-64 object-contain cursor-pointer' 
                    src='/cxc.png'
                    alt='The official Created By Chi logo'
                    />
                </Link>
            </div>

            <div className='flex items-center space-x-5 text-black'>
                <div className='hidden md:inline-flex items-center space-x-5'>
                    <h3>About</h3>
                    <h3>Contact</h3>
                </div>
                <h3>Sign In</h3>
                <h3 className='text-white bg-black border px-4 py-1 rounded-full border-black'>
                    Get Started
                </h3>
            </div>
    </header>

  );
}

export default Header;
