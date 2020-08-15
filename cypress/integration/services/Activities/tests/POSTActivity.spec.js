import * as activiy from '../requests/activities.request'
const HttpStatus = require('http-status-codes')
const payloadActivity = require('../payloads/add-activity.json')

describe('POST Activity', () => {
    it('Add new Activity', () => {
        activiy.addActivity(payloadActivity).should((response) => {
            expect(response.status).to.be.equal(HttpStatus.OK)
            expect(response.body).to.have.property('ID', payloadActivity.ID)
            expect(response.body).to.have.property('Title', payloadActivity.Title)
            expect(response.body).to.have.property('DueDate', payloadActivity.DueDate)
            expect(response.body).to.have.property('Completed', payloadActivity.Completed)
        })
    })
})