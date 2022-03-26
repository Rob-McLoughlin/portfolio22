const Input = ({ placeholder, prefixIcon, suffixIcon, iconClickFn }) => {
  const iconClasses = 'h-8 w-8 absolute top-2 bg-ink text-white p-1 rounded-lg'
  return (
    <div className='relative input-wrapper max-w-sm'>
      {prefixIcon && iconClickFn && (
        <button
          className={`${iconClasses} left-2 cursor-pointer`}
          type='button'
          onClick={iconClickFn}
        >
          {prefixIcon}
        </button>
      )}
      {prefixIcon && !iconClickFn && (
        <div className={`${iconClasses} left-2`}>{prefixIcon}</div>
      )}

      <input
        className={`w-full px-4 py-3 border border-ink rounded-lg font-inter ${suffixIcon &&
          'pr-2'} ${prefixIcon && 'pl-12'}`}
        type='text'
        placeholder={placeholder}
      />

      {suffixIcon && iconClickFn && (
        <button
          className={`${iconClasses} right-2 cursor-pointer transition hover:bg-flamingo`}
          type='button'
          onClick={iconClickFn}
        >
          {suffixIcon}
        </button>
      )}

      {suffixIcon && !iconClickFn && (
        <div className={`${iconClasses} right-2`}>{suffixIcon}</div>
      )}
    </div>
  )
}

export default Input
