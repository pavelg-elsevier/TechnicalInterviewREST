var server = require('../src/Server');
var dataSource = require('./data');

const testServer = new server.Server(dataSource);

const requestGET = {
    payload: {},
    query: '?id=1',
    method: 'GET'
};

const book1 = {
    id: 1,
    year: 2015,
    author: 'Atul Kakar',
    title: 'Understanding Bone Health',
    isbn: '978-81-312-4579-8'
}

const requestPUT = {
    payload: book1,
    query: '?id=1',
    method: 'PUT'
};

const book2 = {
    id: 6,
    year: 2015,
    author: 'Thomas Stalker',
    title: 'Peanuts',
    isbn: '978-1-63067-038-2'
}

const requestPOST = {
    payload: book2,
    method: 'POST'
};

const requestDELETE = {
    payload: {},
    query: '?year=2020',
    method: 'DELETE'
}


test('Should process a GET request', () => {
    const response = testServer.dispatch(requestGET);
    const responseGET = {
        status: 200,
        body: [
        
        ]
        }
    expect(response).toEqual(responseGET);
});

test('Should return an error response for a GET request', () => {

});

test('Should process a POST request', () => {
    // ... Use book2
});

test('Should return an error response for a POST request', () => {
    // ...
});

test('Should process a PUT request', () => {
    // ... Use book1
});

test('Should return an error response for a PUT request', () => {
    // ...
});

test('Should process a DELETE request', () => {
    // ... Use book1
});

test('Should return an error response for a DELETE request', () => {
    // ...
});
