import * as book from '../requests/books.request'
const HttpStatus = require('http-status-codes')
const payloadAddBook = require('../payloads/add-book.json')
const payloadUpdateBook = require('../payloads/change-book.json')

describe('PUT Books', () => {
    it('Create and update a book', () => {
        book.addBook(payloadAddBook).then((resAddBook) => {
            const id = resAddBook.body.ID

            book.updateBook(id, payloadUpdateBook).should((resUpdateBook) => {
                expect(resUpdateBook.status).to.eq(HttpStatus.OK)
                expect(resUpdateBook.body).to.have.property('ID', id)
                expect(resUpdateBook.body).to.have.property('Title', payloadUpdateBook.Title)
                expect(resUpdateBook.body).to.have.property('Description', payloadUpdateBook.Description)
                expect(resUpdateBook.body).to.have.property('PageCount', payloadUpdateBook.PageCount)
                expect(resUpdateBook.body).to.have.property('Excerpt', payloadUpdateBook.Excerpt)
                expect(resUpdateBook.body).to.have.property('PublishDate', payloadUpdateBook.PublishDate)
            })
        })
    })
})