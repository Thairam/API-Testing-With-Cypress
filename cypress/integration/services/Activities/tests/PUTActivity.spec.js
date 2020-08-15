import * as activiy from '../requests/activities.request'
const HttpStatus = require('http-status-codes')
const payloadActivity = require('../payloads/add-activity.json')

describe('GET Activity', () => {
    it('Update the activity with the specified identifier', () => {
        activiy.addActivity(payloadActivity).then((activityCreated) => {
            activiy.updateActivity(activityCreated.body).should((resUpdatedActivity) => {
                expect(resUpdatedActivity.status).to.be.equal(HttpStatus.OK)
                expect(resUpdatedActivity.body).to.have.property('ID')
                expect(resUpdatedActivity.body).to.have.property('Title')
                expect(resUpdatedActivity.body).to.have.property('DueDate')
                expect(resUpdatedActivity.body).to.have.property('Completed')
            })
        })
    })
})