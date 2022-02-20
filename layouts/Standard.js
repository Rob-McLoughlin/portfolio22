import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const Standard = ({ children }) => (
  <main className=''>
    <Nav />
    {children}
    <Footer />
  </main>
)

export default Standard
