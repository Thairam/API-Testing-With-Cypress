function allBooks() {
    return cy.request({
        method: 'GET',
        url: 'Books',
        headers: {
            'Accept': 'application/json'
        },
        failOnStatusCode: false,
    })
}

function getBook(idBook) {
    return cy.request({
        method: 'GET',
        url: `/Books/${idBook}`,
        headers: {
            'Accept': 'application/json'
        },
        failOnStatusCode: false,
    })
}

function addBook(book) {
    return cy.request({
        method: 'POST',
        url: 'Books',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        failOnStatusCode: false,
        body: book
    })
}

function updateBook(idbook, book) {
    return cy.request({
        method: 'PUT',
        url: `Books/${idbook}`,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        failOnStatusCode: false,
        body: book
    })
}

function deleteBook(idBook) {
    return cy.request({
        method: 'DELETE',
        url: `Books/${idBook}`,
        headers: {
            'Accept': 'application/json'
        },
        failOnStatusCode: false
    })
}

export { allBooks, getBook, addBook, updateBook, deleteBook }