import { Link } from 'react-router-dom'
import shoeLogo from '../../../assets/logo_header.jpg'

export default function RegisterHeader() {
  return (
    <header className='py-3'>
      <div className='max-w-7xl mx-auto px-4'>
        <nav className='flex items-center'>
          <Link to='/' className='w-[120px] h-[120px]'>
            <img src={shoeLogo} alt='Shoe Store Logo' className='w-full h-full ' />
          </Link>
          <div className='ml-7 text-3xl lg:text-4xl font-bold text-blue-600'>Đăng ký</div>
        </nav>
      </div>
    </header>
  )
}
