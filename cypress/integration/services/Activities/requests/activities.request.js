function allActivities() {
    return cy.request({
        method: 'GET',
        url: '/Activities',
        headers: {
            'Accept': 'application/json'
        },
        failOnStatusCode: false
    })
}

function addActivity(activity) {
    return cy.request({
        method: 'POST',
        url: '/Activities',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        failOnStatusCode: false,
        body: activity
    })
}

function deleteActivity(activityId) {
    return cy.request({
        method: 'DELETE',
        url: `/Activities/${activityId}`,
        headers: {
            'Accept': 'application/json'
        },
        failOnStatusCode: false,
    })
}

function getActivity(activityId) {
    return cy.request({
        method: 'GET',
        url: `/Activities/${activityId}`,
        headers: {
            'Accept': 'application/json'
        },
        failOnStatusCode: false,
    })
}

function updateActivity(activity) {
    return cy.request({
        method: 'PUT',
        url: `/Activities/${activity.ID}`,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        failOnStatusCode: false,
        body: activity
    })
}

export { allActivities, addActivity, deleteActivity, getActivity, updateActivity }