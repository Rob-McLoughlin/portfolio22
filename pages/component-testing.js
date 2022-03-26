import Card from '@/molecules/Card'
import Input from '@/atoms/Input'
import { Box, RightArrow } from '@/atoms/Icon'
const CompontentTesting = ({}) => {
  return (
    <section>
      <Card
        title='Card'
        subtitle='Card Subtitle'
        body='Card body'
        location='Side Project'
        icon={<Box />}
      />
      <Input
        placeholder='Enter Key'
        suffixIcon={<RightArrow />}
        iconClickFn={() => console.log('click')}
      />
    </section>
  )
}

export default CompontentTesting
