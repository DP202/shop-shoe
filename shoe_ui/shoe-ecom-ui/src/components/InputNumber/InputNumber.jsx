// import React from 'react'

// const InputNumber = React.forwardRef((props, ref) => {
//   const {
//     errorMessage,
//     className = 'mb-5',
//     classNameInput = 'p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm',
//     classNameError = 'mt-1 text-red-600 min-h-[1.25rem] text-sm',
//     onChange,
//     value = '',
//     ...rest
//   } = props

//   const [displayValue, setDisplayValue] = React.useState('')

//   const formatVND = (numStr) => {
//     if (!numStr) return ''
//     const number = numStr.replace(/\D/g, '') // chỉ giữ số
//     return number.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
//   }

//   React.useEffect(() => {
//     setDisplayValue(formatVND(String(value)))
//   }, [value])

//   const handleChange = (event) => {
//     const value = event.target.value

//     if ((/^\d*$/.test(value) || value === '') && onChange) {
//       onChange(event)
//     }
//   }

//   return (
//     <div className={className}>
//       <input className={classNameInput} onChange={handleChange} value={value} ref={ref} {...rest} />
//       {errorMessage && <div className={classNameError}>{errorMessage}</div>}
//     </div>
//   )
// })

// export default InputNumber
// InputNumber.jsx (chỉ thay thế nội dung file hiện tại của bạn)
import React from 'react'

const InputNumber = React.forwardRef((props, ref) => {
  const {
    errorMessage,
    className = 'mb-5',
    classNameInput = 'p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm',
    classNameError = 'mt-1 text-red-600 min-h-[1.25rem] text-sm',
    onChange,
    value = '', // giá trị thô từ React Hook Form: "1000000"
    ...rest
  } = props

  // State để hiển thị giá trị đã format (có dấu chấm)
  const [displayValue, setDisplayValue] = React.useState('')

  // Hàm format: 1000000 → "1.000.000"
  const formatVND = (numStr) => {
    if (!numStr) return ''
    const number = numStr.replace(/\D/g, '') // chỉ giữ số
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }

  // Khi value từ RHF thay đổi (load từ URL, reset, submit...) → format lại để hiển thị
  React.useEffect(() => {
    setDisplayValue(formatVND(String(value)))
  }, [value])

  const handleChange = (e) => {
    const inputVal = e.target.value // ví dụ: "1.234.567" hoặc "abc123"

    // Loại bỏ tất cả dấu chấm → chỉ còn số
    const rawValue = inputVal.replace(/\./g, '')

    // Nếu không phải số → bỏ qua (không cho gõ chữ)
    if (!/^\d*$/.test(rawValue)) return

    // Cập nhật hiển thị (có dấu chấm)
    setDisplayValue(formatVND(rawValue))

    // Gửi giá trị sạch (không có dấu chấm) lên React Hook Form
    if (onChange) {
      onChange({
        target: { value: rawValue || '' },
        type: 'change'
      })
    }
  }

  // Khi focus → chọn hết cho dễ sửa
  const handleFocus = (e) => e.target.select()

  return (
    <div className={className}>
      <input
        type='text'
        className={classNameInput}
        value={displayValue} // hiển thị có dấu chấm
        onChange={handleChange}
        onFocus={handleFocus}
        ref={ref}
        {...rest}
      />
      {errorMessage && <div className={classNameError}>{errorMessage}</div>}
    </div>
  )
})

InputNumber.displayName = 'InputNumber'
export default InputNumber
