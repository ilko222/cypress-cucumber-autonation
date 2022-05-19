var randomize = require('randomatic');
describe("get request", () => {
    it("get one resource", () => {
        cy.request({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/posts/1",
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            let body = response.body
            cy.log(body);
            cy.log(body.id);
            cy.log(body.title);
            cy.log(body.body);
            cy.log(body.userId);
            expect(response.status).to.eql(200);
        })
    })
    it("get random resource", () => {
        let num = randomize('00');
        cy.request({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/posts/" + num,
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            let body = response.body
            cy.log(body);
            cy.log(body.id);
            cy.log(body.title);
            cy.log(body.body);
            cy.log(body.userId);
            expect(response.status).to.eql(200);
        })
    })
    it("get all resources", () => {
        cy.request({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/posts",
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            let body = response.body
            cy.log(body);
            cy.log(body[33].id);
            cy.log(body[1].title);
            cy.log(body[2].body);
            cy.log(body[99].userId);
            expect(response.status).to.eql(200);
        })
    })
    it("get non-existent resource int", () => {
        let num = randomize('0000');
        cy.request({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/posts/" + num,
            failOnStatusCode: false,
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            let body = response.body
            cy.log(body);
            cy.log(body.id);
            cy.log(body.title);
            cy.log(body.body);
            cy.log(body.userId);
            expect(response.status).to.eql(404);
        })
    })
    it("get non-existent resource string", () => {
        let num = randomize('aa');
        cy.request({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/posts/" + num,
            failOnStatusCode: false,
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            let body = response.body
            cy.log(body);
            cy.log(body.id);
            cy.log(body.title);
            cy.log(body.body);
            cy.log(body.userId);
            expect(response.status).to.eql(404);
        })
    })
})

describe("post request", () => {
    it("post the resource", () => {
        cy.request({
            method: "POST",
            url: "https://jsonplaceholder.typicode.com/posts",
            headers: {
                accept: "application/json; charset=UTF-8"
            },
            body: {
                title: 'jim',
                body: 'beam',
                userId: 777,
            }
        }).then(response => {
            let body = response.body
            cy.log(body);
            cy.log(body.id);
            cy.log(body.title);
            cy.log(body.body);
            cy.log(body.userId);
            expect(response.status).to.eql(201);
        })
    })
})

describe("put request", () => {
    it("update the resource", () => {
        let num = randomize('00');
        cy.request({
            method: "PUT",
            url: "https://jsonplaceholder.typicode.com/posts/" + num,
            headers: {
                accept: "application/json; charset=UTF-8"
            },
            body: {
                title: 'jack',
                body: 'daniels',
                userId: 777,
            }
        }).then(response => {
            let body = response.body
            cy.log(body);
            cy.log(body.id);
            cy.log(body.title);
            cy.log(body.body);
            cy.log(body.userId);
            expect(response.status).to.eql(200);
        })
    })
})

describe("patch request", () => {
    it("patch the resource", () => {
        let num = randomize('00');
        cy.request({
            method: "PATCH",
            url: "https://jsonplaceholder.typicode.com/posts/" + num,
            headers: {
                accept: "application/json; charset=UTF-8"
            },
            body: {
                title: 'tom',
            }
        }).then(response => {
            let body = response.body
            cy.log(body);
            cy.log(body.id);
            cy.log(body.title);
            cy.log(body.body);
            cy.log(body.userId);
            expect(response.status).to.eql(200);
        })
    })
})

describe("delete request", () => {
    it("delete random resource", () => {
        let num = randomize('00');
        cy.request({
            method: "DELETE",
            url: "https://jsonplaceholder.typicode.com/posts/" + num,
            headers: {
                accept: "application/json; charset=UTF-8"
            }
        }).then(response => {
            expect(response.status).to.eql(200);
        })
    })
})

describe("filtering resources", () => {
    it("return all the posts that belong to the one random user", () => {
        let num = randomize('0');
        cy.request({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/posts?userId=" + num,
            headers: {
                accept: "application/json; charset=UTF-8"
            }
        }).then(response => {
            let body = response.body
            cy.log(body);
            for(let i = 0; i<10; i++){
                cy.log(body[i].id);
                cy.log(body[i].title);
                cy.log(body[i].body);
                cy.log(body[i].userId);
            };
            expect(response.status).to.eql(200);
        })
    })

    it("return all the photos that belong to the one random user", () => {
        let num = randomize('0');
        cy.request({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/albums/1" + num + "/photos",
            headers: {
                accept: "application/json; charset=UTF-8"
            }
        }).then(response => {
            let body = response.body
            cy.log(body)
            for(let i = 0; i<50; i++){
                cy.log(body[i].albumId)
                cy.log(body[i].id)
                cy.log(body[i].url);
                cy.log(body[i].thumbnailUrl);
                cy.log(body[i].title);
            };
            expect(response.status).to.eql(200);
        })
    })
})


