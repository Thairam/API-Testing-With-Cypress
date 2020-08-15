import * as activiy from '../requests/activities.request'
const HttpStatus = require('http-status-codes')
const payloadActivity = require('../payloads/add-activity.json')

describe('GET Activity', () => {
    it('Gets the activity with the specified identifier', () => {
        activiy.addActivity(payloadActivity).then((activityCreated) => {
            activiy.getActivity(activityCreated.body.ID).should((resObtainedActivity) => {
                expect(resObtainedActivity.status).to.be.equal(HttpStatus.OK)
                expect(resObtainedActivity.body).to.have.property('ID')
                expect(resObtainedActivity.body).to.have.property('Title')
                expect(resObtainedActivity.body).to.have.property('DueDate')
                expect(resObtainedActivity.body).to.have.property('Completed')
            })
        })
    })

    it('When the activity is not found', () => {
        const ID = '121564'
        
        activiy.getActivity(ID).should((response) => {
            expect(response.status).to.be.equal(HttpStatus.NOT_FOUND)
        })
    })
})