const OverlayBackdrop = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className='fixed z-20 inset-0 bg-black bg-opacity-80 backdrop-blur-sm'
    />
  )
}
export default OverlayBackdrop
