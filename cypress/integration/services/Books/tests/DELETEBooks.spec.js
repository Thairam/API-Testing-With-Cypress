import * as book from '../requests/books.request'
const HttpStatus = require('http-status-codes')
const payloadBook = require('../payloads/add-book.json')


describe('DELETE Books', () => {
    it('Delete the specified book', () => {
        book.allBooks().then((resAllBooks) => {
            book.deleteBook(resAllBooks.body[0].ID).should((resDeleteBook) => {
                expect(resDeleteBook.status).to.eq(HttpStatus.OK)
            })
        })
    })

    it('Create and Delete a book', () => {
        book.addBook(payloadBook).then((resAddBook) => {
            book.deleteBook(resAddBook.body.ID).should((resDeleteBook) => {
                expect(resDeleteBook.status).to.eq(HttpStatus.OK)
            })
        })
    })
})