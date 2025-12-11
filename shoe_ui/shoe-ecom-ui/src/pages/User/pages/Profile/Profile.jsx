function Profile() {
  return (
    <div className='rounded-sm bg-white px-7 pb-20 shadow'>
      <div className='border-b border-b-gray-200 py-6'>
        <h1 className='text-lg font-medium capitalize text-gray-900'>Hồ sơ của tôi</h1>
        <div className='mt-1 text-sm text-gray-700'>Quản lý thông tin hồ sơ để bảo mật tài khoản</div>
      </div>

      <div className='mt-8 flex flex-col-reverse md:flex-row md:items-start'>
        <form className='mt-6 flex-grow md:mt-0'>
          <div className='space-y-6'>
            <div className='flex flex-wrap items-center'>
              <div className='w-[20%] truncate text-right capitalize text-gray-700 pr-5'>Tên đăng nhập</div>
              <div className='w-[80%]'>
                <input
                  type='text'
                  value='abc'
                  readOnly
                  className='w-[80%] px-3 py-2 border border-gray-300 rounded-sm bg-gray-50 text-gray-900 cursor-not-allowed'
                />
              </div>
            </div>

            <div className='flex flex-wrap items-center'>
              <div className='w-[20%] truncate text-right capitalize text-gray-700 pr-5'>Họ</div>
              <div className='w-[80%]'>
                <input
                  type='text'
                  placeholder='Nhập họ'
                  className='w-[80%] rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm'
                />
              </div>
            </div>

            <div className='flex flex-wrap items-center'>
              <div className='w-[20%] truncate text-right capitalize text-gray-700 pr-5'>Tên</div>
              <div className='w-[80%]'>
                <input
                  type='text'
                  placeholder='Nhập tên'
                  className='w-[80%] rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm'
                />
              </div>
            </div>

            <div className='flex flex-wrap items-center'>
              <div className='w-[20%] truncate text-right capitalize text-gray-700 pr-5'>Ngày sinh</div>
              <div className='w-[80%]'>
                <input
                  type='date'
                  defaultValue='2025-11-18'
                  className='w-[80%] rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm'
                />
              </div>
            </div>

            <div className='flex justify-center items-center pt-4'>
              <button className='cursor-pointer px-8 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition'>
                Lưu
              </button>
            </div>
          </div>
        </form>

        <div className='flex justify-center md:w-72 md:border-l md:border-l-gray-200'>
          <div className='flex flex-col items-center'>
            <div className='my-5 h-24 w-24'>
              <img
                src='data:image/jpeg;base64,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'
                alt=''
                className='w-full h-full rounded-full object-cover'
              />
            </div>
            <input className='hidden' type='file' accept='.jpg,.jpeg,.png' />
            <button
              className='cursor-pointer flex h-10 items-center justify-end rounded-sm border bg-white px-6 text-sm text-gray-600 shadow-sm
            hover:bg-blue-500 hover:text-white
            '
            >
              Chọn ảnh
            </button>
            <div className='mt-3 text-gray-400 text-center'>
              <div>Dung lượng file tối đa 1MB</div>
              <div>Định dạng:.JPEG, .PNG</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
