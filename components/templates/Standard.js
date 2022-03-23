import Nav from '@/organisms/Nav'
import Footer from '@/organisms/Footer'

const Standard = ({ children }) => (
  <div>
    <Nav />
    <main className='standard'>{children}</main>
    <Footer />
  </div>
)

export default Standard
