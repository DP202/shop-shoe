export default function Input({
  errorMessage,
  name,
  register,
  rules,
  className = 'mt-2',
  classNameInput = 'p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm',
  classNameError = 'mt-1 text-red-600 min-h-[1rem] text-sm',
  ...rest
}) {
  const registerResult = register && name ? register(name, rules) : {}

  return (
    <div className={className}>
      <input className={classNameInput} {...registerResult} {...rest} />

      <div className={classNameError}>{errorMessage}</div>
    </div>
  )
}
