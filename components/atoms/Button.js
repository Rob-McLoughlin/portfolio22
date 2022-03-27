import Link from 'next/link'
const Input = ({ label, prefixIcon, suffixIcon, onClick, ghost, href }) => {
  const inner = (
    <button
      type='button'
      onClick={onClick}
      className={`flex group gap-2 px-4 py-3 border border-ink rounded-lg transition ${
        ghost
          ? 'bg-white text-ink hover:border-flamingo hover:text-flamingo'
          : 'bg-ink text-white hover:border-flamingo hover:bg-flamingo'
      }`}
    >
      {prefixIcon && (
        <div
          className={`-ml-2 transition ${ghost && 'group-hover:text-flamingo'}`}
        >
          {prefixIcon}
        </div>
      )}
      {label}
      {suffixIcon && (
        <div
          className={`-mr-2 transition ${ghost && 'group-hover:text-flamingo'}`}
        >
          {suffixIcon}
        </div>
      )}
    </button>
  )

  if (href) {
    return <Link href={href}>{inner}</Link>
  } else {
    return inner
  }
}

export default Input
