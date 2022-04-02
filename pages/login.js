import Input from '@/atoms/Input'
import { Check, Warning, RightArrow } from '@/atoms/Icon'
import { useState, useRef } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

const Login = ({}) => {
  const router = useRouter()
  const inputRef = useRef()
  const [value, setValue] = useState('')
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const logIn = async event => {
    event.preventDefault()
    const { value } = inputRef.current

    const r = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        k: value
      })
    })
    if (r.status === 200) {
      setSuccess(true)
      window.setTimeout(() => {
        router.push('/?welcome=true')
      }, 200)
    }
    const { error } = await r.json()
    if (error) {
      setError(error)
    }
  }

  const handleKeyUp = event => {
    const eventValue = event.target.value
    if (eventValue !== value) {
      setError(null)
      setSuccess(false)
    }
    setValue(eventValue)
  }

  let inputIcon = <RightArrow />
  if (error) {
    inputIcon = <Warning />
  }
  if (success) {
    inputIcon = <Check />
  }

  return (
    <section className='flex justify-center min-h-full py-10'>
      <Head>
        <title>Portfolio Sign In</title>
        <meta
          name='description'
          content='This site is password protected. There should be a password in the URL
          parameters.'
        />
      </Head>
      <div className='max-w-xs text-center'>
        <h1 className='font-outfit text-h1 mb-4'>
          This is a private portfolio
        </h1>
        <p className='font-inter text-body mb-6'>
          This site is password protected. There should be a password in the URL
          parameters.
        </p>
        <form onSubmit={logIn} className={error && 'error-shake'}>
          <Input
            placeholder='Enter Key'
            suffixIcon={inputIcon}
            iconClickFn={logIn}
            ref={inputRef}
            error={!!error}
            success={success}
            onKeyUp={handleKeyUp}
          />
          {error && <p className='mt-4 text-error'>{error}</p>}
        </form>
      </div>
    </section>
  )
}

export default Login

// export const getServerSideProps = async context => {
//   const password = context.query.k
//   const session = await signIn('credentials', {
//     redirect: false,
//     password: 'password'
//   })
//   return {
//     props: {}
//   }
// }
