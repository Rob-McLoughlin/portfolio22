const NavButton = ({ active, openFunction }) => {
  return (
    <button
      className={`hamburger-btn z-20 ${active && 'active'}`}
      onClick={openFunction}
    >
      <div className='hamburger-btn__line' />
      <div className='hamburger-btn__line' />
    </button>
  )
}

export default NavButton
