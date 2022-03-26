import Input from '@/atoms/Input'
import { Box, RightArrow } from '@/atoms/Icon'
import { useEffect, useRef } from 'react'

const Login = ({}) => {
  const inputRef = useRef()

  const logIn = event => {
    event.preventDefault()
    console.log(inputRef.current.value)
  }

  return (
    <section className='flex justify-center min-h-full py-10'>
      <div className='max-w-xs text-center'>
        <h1 className='font-outfit text-h1 mb-4'>
          This is a Private Portfolio
        </h1>
        <p className='font-inter text-body mb-6'>
          This site is password protected. There should be a password in the URL
          parameters.
        </p>
        <form onSubmit={logIn}>
          <Input
            placeholder='Enter Key'
            suffixIcon={<RightArrow />}
            iconClickFn={logIn}
            ref={inputRef}
          />
        </form>
      </div>
    </section>
  )
}

export default Login
