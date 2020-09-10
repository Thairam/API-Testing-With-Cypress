import * as book from '../requests/books.request'
const HttpStatus = require('http-status-codes')
const payloadBook = require('../payloads/add-book.json')

context('POST Books', () => {
    it('Add new book', () => {
        book.addBook(payloadBook).should((response) => {
            expect(response.status).to.eq(HttpStatus.OK)
            expect(response.body).to.have.property('ID', payloadBook.ID)
            expect(response.body).to.have.property('Title', payloadBook.Title)
            expect(response.body).to.have.property('Description', payloadBook.Description)
            expect(response.body).to.have.property('PageCount', payloadBook.PageCount)
            expect(response.body).to.have.property('Excerpt', payloadBook.Excerpt)
            expect(response.body).to.have.property('PublishDate', payloadBook.PublishDate)
        })
    })
})