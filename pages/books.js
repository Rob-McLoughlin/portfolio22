import BookCard from '@/components/BookCard'
import { getReadBooks } from '@/lib/notion'

const Books = ({ books }) => {
  return (
    <main className='mx-auto relative mt-24 px-4 max-w-3xl'>
      <section id='intro'>
        <div className='mb-4 flex justify-between'>
          <div>
            <h1 className='font-outfit text-h1 text-ink'>Books</h1>
          </div>
        </div>
        <p>
          I have learned a huge amount from reading books on a variety of
          topics. I track the books I read in Notion. Here are the most recent
          books I’ve read, pulled from my personal Notion via their API.
        </p>
      </section>

      <section className='mt-6'>
        <ul className='flex flex-col gap-6 md:grid md:grid-cols-2'>
          {books.map(book => {
            const titleKey = book.title
              .toLowerCase()
              .split(' ')
              .join('-')
            return (
              <li key={titleKey}>
                <BookCard book={book} />
              </li>
            )
          })}
        </ul>
      </section>
    </main>
  )
}

export const getStaticProps = async () => {
  const books = await getReadBooks(6)
  return {
    props: {
      books: books
    },
    revalidate: 60 * 60 // 1 hour
  }
}

export default Books
