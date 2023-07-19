import Input from '@/atoms/Input'
import { Check, Warning, RightArrow, Spinner } from '@/atoms/Icon'
import { useState, useRef } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

const Login = ({}) => {
  const router = useRouter()
  const inputRef = useRef()
  const [value, setValue] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const logIn = async event => {
    event.preventDefault()
    setLoading(true)
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
      setLoading(false)
      setSuccess(true)
      window.setTimeout(() => {
        router.push('/?welcome=true')
      }, 200)
    }
    const { error } = await r.json()
    if (error) {
      setLoading(false)
      setError(error)
    }
  }

  const handleKeyUp = event => {
    const eventValue = event.target.value
    if (eventValue !== value) {
      setLoading(false)
      setError(null)
      setSuccess(false)
    }
    setValue(eventValue)
  }

  let inputIcon = <RightArrow />
  if (error) {
    inputIcon = <Warning />
  }
  if (loading) {
    inputIcon = <Spinner className='animate-spin' />
  }
  if (success) {
    inputIcon = <Check />
  }

  return (
    <section className='flex justify-center min-h-full py-10'>
      <Head>
        <title>Portfolio Sign In</title>
        <meta name='description' content='This site is password protected.' />
      </Head>
      <div className='text-center'>
        <h1 className='font-inter font-semibold text-flamingo text-h1 mb-4'>
          Private Portfolio
        </h1>
        <p className='font-inter text-body mb-6'>
          Please enter the password you received with this link.
        </p>
        <form onSubmit={logIn} className={` ${error ? 'error-shake' : ''}`}>
          <Input
            placeholder='Enter Key'
            suffixIcon={inputIcon}
            iconClickFn={logIn}
            ref={inputRef}
            error={!!error}
            success={success}
            onKeyUp={handleKeyUp}
            autoFocus
            fullWidth
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
