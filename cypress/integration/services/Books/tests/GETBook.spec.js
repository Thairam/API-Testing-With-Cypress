import * as book from '../requests/books.request'
const HttpStatus = require('http-status-codes')
const payloadBook = require('../payloads/add-book.json')

describe('GET Book', () => {
    it('Gets the book with the specified identifier', () => {
        book.addBook(payloadBook).then((bookCreated) => {
            book.getBook(bookCreated.body.ID).should((resObtainedBook) => {
                expect(resObtainedBook.status).to.be.equal(HttpStatus.OK)
                expect(resObtainedBook.body).to.have.property('ID')
                expect(resObtainedBook.body).to.have.property('Title')
                expect(resObtainedBook.body).to.have.property('Description')
                expect(resObtainedBook.body).to.have.property('PageCount')
                expect(resObtainedBook.body).to.have.property('Excerpt')
                expect(resObtainedBook.body).to.have.property('PublishDate')
            })
        })
    })

    it('When the book is not found', () => {
        const ID = '121564'

        book.getBook(ID).should((response) => {
            expect(response.status).to.be.equal(HttpStatus.NOT_FOUND)
        })
    })
})