import { BoxCheck, BoxMinus } from '@/atoms/Icon'

const RoleRow = ({ label, hadRole }) => {
  return (
    <div className='flex gap-x-2 items-center mb-2'>
      {hadRole && <BoxCheck className='text-flamingo h-4 w-4' />}
      {!hadRole && <BoxMinus className='text-ink_grey h-4 w-4' />}
      <span className='text-ink text-body leading-none'>{label}</span>
    </div>
  )
}

export default RoleRow
