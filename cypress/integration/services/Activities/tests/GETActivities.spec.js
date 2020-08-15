import * as activiy from '../requests/activities.request'
const HttpStatus = require('http-status-codes')

describe('GET Activities', () => {
    it('Get All Activities', () => {
        activiy.allActivities().should((response) => {
            expect(response.status).to.be.equal(HttpStatus.OK)
            expect(response.body).to.be.not.null
        })
    })
})