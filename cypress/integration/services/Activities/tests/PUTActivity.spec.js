import * as activiy from '../requests/activities.request'
const HttpStatus = require('http-status-codes')
const payloadAddActivity = require('../payloads/add-activity.json')
const payloadUpdateActivity = require('../payloads/change-activity.json')

describe('GET Activity', () => {
    it('Update the activity with the specified identifier', () => {
        activiy.addActivity(payloadAddActivity).then((activityCreated) => {
            const id = activityCreated.body.ID

            activiy.updateActivity(id, payloadUpdateActivity).should((resUpdatedActivity) => {
                expect(resUpdatedActivity.status).to.be.equal(HttpStatus.OK)
                expect(resUpdatedActivity.body).to.have.property('ID', id)
                expect(resUpdatedActivity.body).to.have.property('Title', payloadUpdateActivity.Title)
                expect(resUpdatedActivity.body).to.have.property('DueDate', payloadUpdateActivity.DueDate)
                expect(resUpdatedActivity.body).to.have.property('Completed', payloadUpdateActivity.Completed)
            })
        })
    })
})