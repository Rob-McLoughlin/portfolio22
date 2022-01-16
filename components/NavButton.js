const NavButton = ({ active, openFunction }) => {
  return (
    <button
      className={`hamburger-btn ${active && 'active'}`}
      onClick={openFunction}
    >
      <div className='hamburger-btn__line' />
      <div className='hamburger-btn__line' />
    </button>
  )
}

export default NavButton
