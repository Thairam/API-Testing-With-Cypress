import * as activiy from '../requests/activities.request'
const HttpStatus = require('http-status-codes')
const payloadActivity = require('../payloads/add-activity.json')

describe('DELETE Activity', () => {
    it('Delete the specified activity', () => {
        activiy.addActivity(payloadActivity).then((activityCreated) => {
            activiy.deleteActivity(activityCreated.body.ID).should((resDeleteActivity) => {
                expect(resDeleteActivity.status).to.be.equal(HttpStatus.OK)
            })
        })
    })
})