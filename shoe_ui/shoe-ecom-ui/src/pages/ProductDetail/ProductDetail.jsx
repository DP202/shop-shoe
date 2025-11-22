export default function ProductDetail() {
  return (
    <div className='bg-gray-200 py-6'>
      <div className='container mx-auto'>
        <div className='bg-white p-4 shadow'>
          <div className='grid grid-cols-12 gap-9'>
            <div className='col-span-5'>
              <div
                className='relative w-full pt-[100%] shadow overflow-hidden cursor-zoom-in'
                // onMouseMove={handleZoom}
                // onMouseLeave={resetZoom}
              >
                <img
                  className='absolute top-0 left-0 bg-white w-full h-full object-cover  pointer-events-none '
                  src='https://down-vn.img.susercontent.com/file/vn-11134207-7ra0g-ma3yxxl8jyu202@resize_w164_nl.webp'
                  alt='###'
                />
              </div>
              {/* slider */}
              <div className='relative mt-4 grid grid-cols-5 gap-1'>
                <button
                  //   onClick={prevSlide}
                  className='absolute left-0 top-1/2 z-10 h-9 w-5 -translate-y-1/2 bg-black/20 text-white'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='h-5 w-5 cursor-pointer'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
                  </svg>
                </button>
                {/* render 4 hình */}
                <div className='relative w-full pt-[100%]'>
                  <img
                    className='cursor-pointer absolute top-0 left-0 bg-white w-full h-full object-cover'
                    src='https://down-vn.img.susercontent.com/file/vn-11134207-7ra0g-ma3yxxl8jyu202@resize_w164_nl.webp'
                    alt='###'
                  />
                </div>
                <div className='relative w-full pt-[100%]'>
                  <img
                    className='cursor-pointer absolute top-0 left-0 bg-white w-full h-full object-cover'
                    src='https://down-vn.img.susercontent.com/file/vn-11134207-7ra0g-ma3yxxl8jyu202@resize_w164_nl.webp'
                    alt='###'
                  />
                </div>
                <div className='relative w-full pt-[100%]'>
                  <img
                    className='cursor-pointer absolute top-0 left-0 bg-white w-full h-full object-cover'
                    src='https://down-vn.img.susercontent.com/file/vn-11134207-7ra0g-ma3yxxl8jyu202@resize_w164_nl.webp'
                    alt='###'
                  />
                </div>{' '}
                <div className='relative w-full pt-[100%]'>
                  <img
                    className='cursor-pointer absolute top-0 left-0 bg-white w-full h-full object-cover'
                    src='https://down-vn.img.susercontent.com/file/vn-11134207-7ra0g-ma3yxxl8jyu202@resize_w164_nl.webp'
                    alt='###'
                  />
                </div>
                <div className='relative w-full pt-[100%]'>
                  <img
                    className='cursor-pointer absolute top-0 left-0 bg-white w-full h-full object-cover'
                    src='https://down-vn.img.susercontent.com/file/vn-11134207-7ra0g-ma3yxxl8jyu202@resize_w164_nl.webp'
                    alt='###'
                  />
                </div>
                <button className='absolute right-0 top-1/2 z-10 h-9 w-5 -translate-y-1/2 bg-black/20 text-white'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='h-5 w-5 cursor-pointer'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                  </svg>
                </button>
              </div>
            </div>
            <div className='col-span-7'>
              <h1 className='text-xl font-medium uppercase'>
                Dây đai chữ y, Dây yếm quần chữ y-Suspender TINY KING dành cho nam | Phụ kiện thời trang cho bê quả chụp
                ảnh cưới M01
              </h1>
              <div className='mt-8 flex items-center bg-gray-50 px-5 py-4'>
                <div className='text-gray-500 line-through'>₫ 34567</div>
                <div className='ml-3 text-3xl font-medium text-orange-500'>12345</div>
                <div className='text-white ml-4 rounded-sm bg-orange-500 px-1 py-[2px] text-xs font-semibold '>
                  10 GIẢM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container mx-auto'>
        <div className='mt-8 bg-white p-4 shadow'>
          <div className='rounded bg-gray-50 p-4 text-lg capitalize text-slate-700'>Mô tả sản phẩm</div>
          <div className='mx-4 mt-12 mb-4 text-sm leading-loose'>
            <div>
              Bộ Quần Sịp Nam Boxer Cao Cấp ✨ Hộp 4 Quần Sịp Nam Boxer, thiết kế dành riêng cho nam giới. Chất liệu
              cotton cao cấp, mang lại cảm giác mềm mại và thoải mái. Quần có khả năng co giãn 4 chiều, phù hợp với mọi
              kích cỡ cơ thể. 💯 Tính Năng Tiện Ích Thoáng mát: Vải thoáng khí giúp bạn luôn cảm thấy dễ chịu trong mọi
              điều kiện thời tiết. Thấm hút mồ hôi: Hỗ trợ giảm thiểu mồ hôi, giữ cho làn da luôn khô ráo và sạch sẽ. 🌞
              Sản Phẩm Lý Tưởng Hộp 4 quần sịp nam boxer là lựa chọn hoàn hảo cho những ai yêu thích sự tiện lợi và
              thoải mái. Sản phẩm không chỉ đẹp mà còn rất thực dụng. 💪- Màu quần sịp nam: Đen, Xanh Than, Ghi - Quần
              có 3 size: XL , XXL , 3XL + SIZE XL: khoảng Cân nặng 45 - 55kg + SIZE XXL: khoảng Cân nặng 56 - 69kg +
              SIZE 3XL: khoảng Cân nặng 70 - 85kg - Cam kết chất lượng và mẫu mã sản phẩm giống với hình ảnh. -Cam kết
              được đổi trả hàng trong vòng 7 ngày nếu sản phẩm sai, lỗi - Hàng có sẵn, giao hàng ngay khi nhận được đơn
              - Shop chỉ bán sản phẩm có chất lượng, tốt nhất trong tầm giá ** Với phương châm UY TÍN - CHẤT LƯỢNG - GIÁ
              TỐT NHẤT. đặc biệt quan tâm đến sự hài lòng của khách hàng, Shop luôn tận tâm phục vụ với tinh thần trách
              nhiệm uy tín hàng đầu. + ĐỔI TRẢ THEO ĐÚNG QUY ĐỊNH CỦA SHOPEE *Điều kiện áp dụng: - Trong vòng 7 ngày kể
              từ khi nhận sản phẩm - Hàng hóa vẫn còn mới, chưa qua sử dụng - Hàng hóa hư hỏng do vận chuyển hoặc do sản
              xuất *Trường hợp được chấp nhận: - Hàng không đúng size, kiểu dáng như quý khách đặt hàng - Không đủ số
              lượng, không đủ bộ như trong đơn hàng *Trường hợp không đủ điều kiện đổi trả hàng: - Quá 7 ngày kể từ khi
              quý khách nhận hàng - Đặt nhầm sản phẩm, chủng loại, không thích, không hợp,…
              #boxerzone#quansipnamtamgiac,#Quansipnamdui,#Quanlotnamdui,#sipnam,#quansipduinam,#sipduinam,#quanboxernam,#quansipnamtamgiac
              #quansip #quanxi #quansipnam #sipdui #siptamgiac #sipnam #quanlotnam #quanlot #dolot #quanlotnamdep
              #quanlotcotton #quanxinam #quansipnam #quanlotdui #quansipdui #quanlotboxer #quanboxernam #quansipthonghoi
              #quansipcaocap
              #quansipnamtamgiac,#Quansipnamdui,#Quanlotnamdui,#sipnam,#quansipduinam,#sipduinam,#quanboxernam,#quansipnamtamgiac
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
