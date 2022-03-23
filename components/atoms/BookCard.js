const BookCard = ({ book }) => {
  return (
    <div className='rounded-lg border-ink border-2 p-4 max-w-sm'>
      <h3 className='font-outfit'>{book.title}</h3>
      <h4 className='mb-1 text-pink font-outfit'>{book.author}</h4>
      <p>{book.blurb}</p>
    </div>
  )
}

export default BookCard
