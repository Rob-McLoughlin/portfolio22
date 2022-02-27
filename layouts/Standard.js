import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const Standard = ({ children }) => (
  <div>
    <Nav />
    <main className='standard'>{children}</main>
    <Footer />
  </div>
)

export default Standard
