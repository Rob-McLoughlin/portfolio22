const { Client } = require('@notionhq/client')

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN
})

export const getReadBooks = async limit => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_BOOKS_DB,
    filter: {
      property: 'Read',
      checkbox: {
        equals: true
      }
    }
  })
  const readBooks = response.results
  let books = readBooks.map(book => {
    const { Name, Author, Tags, Blurb } = book.properties
    const hasBlurb = Blurb && Blurb.rich_text.length > 0
    return {
      title: Name.title[0].text.content,
      author: Author.rich_text[0].text.content,
      blurb: hasBlurb ? Blurb.rich_text[0].text.content : '',
      tags: Tags.multi_select.map(t => t.name),
      last_updated: book.last_edited_time
    }
  })
  books = books.sort(i => i.last_updated)
  if (limit) {
    books = books.slice(0, limit)
  }
  return books
}
