import * as book from '../requests/books.request'
const HttpStatus = require('http-status-codes')

describe('GET Books', () => {
    it('Get All Books', () => {
        book.allBooks().should((response) => {
            expect(response.status).to.eq(HttpStatus.OK)
            expect(response.body).to.be.not.null
        })
    })
})