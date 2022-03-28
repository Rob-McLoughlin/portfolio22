import Card from '@/molecules/Card'
import Input from '@/atoms/Input'
import Button from '@/atoms/Button'
import OverlayBackdrop from '@/atoms/OverlayBackdrop'
import WelcomePlate from '@/organisms/WelcomePlate'
import { Box, RightArrow } from '@/atoms/Icon'
import { useState } from 'react'

const CompontentTesting = ({}) => {
  const [showWelcome, setShowWelcome] = useState(true)
  return (
    <section>
      {showWelcome && (
        <WelcomePlate invite={{}} closeFn={() => setShowWelcome(false)} />
      )}
      <Card
        title='Card'
        subtitle='Card Subtitle'
        body='Card body'
        location='Side Project'
        icon={<Box />}
        flat
      />
      <Input
        placeholder='Enter Key'
        suffixIcon={<RightArrow />}
        iconClickFn={() => console.log('click')}
      />
      <Button
        label='Button'
        ghost={true}
        prefixIcon={<Box />}
        onClick={() => console.log('click')}
      />
    </section>
  )
}

export default CompontentTesting
