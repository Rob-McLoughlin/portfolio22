import { checkInvite, createToken } from '@/lib/auth'

export default async function handler (req, res) {
  const { k } = req.body
  if (!k) {
    return res.status(400).json({ error: 'Missing invite key' })
  }
  const invite = await checkInvite(k)
  if (!invite) {
    return res.status(400).json({
      error:
        "There's no invite with that key. Please email robbiemcloughlin@gmail.com if you think that's a mistake."
    })
  }
  const token = await createToken(invite)
  res.setHeader('set-cookie', [
    `access-token=${token}; HttpOnly; Max-Age=86400; Path=/`
  ])
  res.status(200).json({ message: 'Success' })
}
