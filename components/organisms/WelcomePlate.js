import Button from '@/atoms/Button'
import { Close } from '@/atoms/Icon'
import OverlayBackdrop from '@/atoms/OverlayBackdrop'

const WelcomePlate = ({ invite, closeFn }) => {
  const introText = invite.text || 'Thank you for checking out my portfolio.'

  const { ctas } = invite
  return (
    <>
      <OverlayBackdrop onClick={closeFn} />
      <div className='fixed px-6 py-8 border border-ink rounded max-w-xs md:max-w-lg bg-white z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <button
          type='button'
          className='absolute top-8 right-6'
          onClick={closeFn}
        >
          <Close />
        </button>
        <h3 className='mb-6 font-inter font-semibold text-h2'>
          Hi {invite ? invite.name : 'there'}!
        </h3>
        <p className='text-body mb-6'>
          {introText} If you have any questions you can email me at:{' '}
          <a
            className='underline'
            target='_blank'
            rel='noreferrer'
            href='mailto:robbiemcloughlin@gmail.com'
          >
            robbiemcloughlin@gmail.com
          </a>
        </p>
        {ctas && (
          <ul className='flex gap-x-2'>
            {ctas.map(({ text, url }, index) => (
              <li key={text}>
                <Button
                  label={text}
                  onClick={closeFn}
                  href={url}
                  ghost={index > 0}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}

export default WelcomePlate
