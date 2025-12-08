import { forwardRef } from 'react'

const Input = forwardRef(function Input(
  {
    errorMessage,
    name,
    register,
    rules,
    className = 'mt-2',
    classNameInput = 'p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm',
    classNameError = 'mt-1 text-red-600 min-h-[1rem] text-sm',
    ...rest
  },
  ref
) {
  const registerResult = register && name ? register(name, rules) : null

  return (
    <div className={className}>
      <input className={classNameInput} ref={ref} {...registerResult} {...rest} />
      <div className={classNameError}>{errorMessage}</div>
    </div>
  )
})

Input.displayName = 'Input' // tránh warning React

export default Input
