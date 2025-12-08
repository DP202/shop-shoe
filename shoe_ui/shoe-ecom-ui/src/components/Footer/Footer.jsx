// src/components/Footer.tsx
import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='bg-gradient-to-b from-blue-500 to-blue-600 text-white py-10 mt-16'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 text-sm'>
          <div className='col-span-1 md:col-span-1'>
            <Link to='/' className='inline-block mb-4'>
              <h2 className='text-2xl font-bold'>ĐÔNG TUẤN STORE</h2>
            </Link>
            <p className='text-white/80 leading-relaxed'>
              Chuyên giày thể thao, sneaker chính hãng & local brand chất lượng cao.
              <br />
              Freeship nội thành – Đổi trả dễ dàng trong 7 ngày.
            </p>
          </div>

          <div>
            <h3 className='font-semibold text-lg mb-4'>Hỗ trợ khách hàng</h3>
            <ul className='space-y-2 text-white/80'>
              <li>
                <Link to='/faq' className='hover:text-white'>
                  Câu hỏi thường gặp
                </Link>
              </li>
              <li>
                <Link to='/contact' className='hover:text-white'>
                  Liên hệ & góp ý
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='font-semibold text-lg mb-4'>Liên hệ với chúng tôi</h3>
            <ul className='space-y-3 text-white/80'>
              <li className='flex items-center gap-2'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' />
                </svg>
                Trường Đại Học Công Nghệ Sài Gòn
              </li>
              <li className='flex items-center gap-2'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.22 11.11 11.11 0 003.48.55 1 1 0 011 1v3.5a1 1 0 01-1 1A18 18 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.11 11.11 0 00.55 3.48 1 1 0 01-.22 1.11l-2.2 2.2z' />
                </svg>
                0366468307
              </li>
              <li className='flex items-center gap-2'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' />
                </svg>
                phamngocdong20072002@gmail.com
              </li>
            </ul>
          </div>

          <div>
            <h3 className='font-semibold text-lg mb-4'>Theo dõi chúng tôi</h3>
            <div className='flex gap-4 text-2xl'>
              <a
                href='https://facebook.com'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-white/70 transition'
              >
                <svg className='w-8 h-8' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.469h3.047v-2.637c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.512c-1.491 0-1.956.925-1.956 1.875v2.243h3.328l-.532 3.469h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z' />
                </svg>
              </a>
              <a
                href='https://instagram.com'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-white/70 transition'
              >
                <svg className='w-8 h-8' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.069-1.644-.069-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                </svg>
              </a>
              <a
                href='https://tiktok.com'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-white/70 transition'
              >
                <svg className='w-8 h-8' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M19.58 6.79c-1.3-1.03-2.03-2.47-1.95-4.02.02-.35.2-.68.5-.88.3-.2.67-.25 1-.15.33.1.6.35.73.67.63 1.37.94 2.84.94 4.33v.88h2.27v-3.75h-2.27c-.01.52-.06 1.03-.15 1.53-.3 1.63-1.27 3.07-2.72 3.95v3.47h4.14v-3.75h-2.27c.06-.42.1-.84.12-1.27.04-.73.35-1.42.88-1.95zM12.05 13.91c-1.03 0-1.87.84-1.87 1.87s.84 1.87 1.87 1.87 1.87-.84 1.87-1.87-.84-1.87-1.87-1.87zm0 5.61c-2.07 0-3.75-1.68-3.75-3.75s1.68-3.75 3.75-3.75 3.75 1.68 3.75 3.75-1.68 3.75-3.75 3.75zm4.69-9.37c0-2.58-2.1-4.68-4.68-4.68s-4.68 2.1-4.68 4.68c0 1.83 1.05 3.41 2.58 4.18.24.12.52.02.64-.22.12-.24.02-.52-.22-.64-1.18-.58-1.97-1.78-1.97-3.32 0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 .34-.05.67-.14.98-.1.34.11.69.46.69h.01c.26 0 .49-.18.54-.44.12-.58.18-1.18.18-1.79z' />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className='border-t border-white/20 mt-8 pt-6 text-center text-sm text-white'>
          Phạm Ngọc Đông - D20_TH03 - DH52001330
          <span className='block mt-1'>Lê Tuấn - D20_TH03 - DH52000682</span>
        </div>
      </div>
    </footer>
  )
}
