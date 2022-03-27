import { forwardRef } from 'react'
const Input = forwardRef(
  (
    {
      placeholder,
      prefixIcon,
      suffixIcon,
      iconClickFn,
      error,
      success,
      onKeyUp
    },
    ref
  ) => {
    const iconClasses =
      'h-8 w-8 absolute top-2 bg-ink text-white p-1 rounded-lg transition'
    return (
      <div className='relative input-wrapper max-w-sm'>
        {prefixIcon && iconClickFn && (
          <button
            className={`${iconClasses} left-2 cursor-pointer ${error &&
              'bg-error'} ${success && 'bg-success'}`}
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
            'pr-2'} ${prefixIcon && 'pl-12'} ${error &&
            'border-error text-error'}`}
          type='text'
          placeholder={placeholder}
          ref={ref}
          onKeyUp={onKeyUp}
        />

        {suffixIcon && iconClickFn && (
          <button
            className={`${iconClasses} right-2 cursor-pointer transition hover:bg-flamingo ${error &&
              'bg-error'} ${success && 'bg-success'}`}
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
)

Input.displayName = 'Input'

export default Input
