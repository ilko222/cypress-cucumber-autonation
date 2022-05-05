describe("post request", () => {
    it("validate status code", () => {
        cy.request({
            method: "POST",
            url: "https://restful-booker.herokuapp.com/auth",
            headers: {
                accept: "application/json"
            },
            body: {
                username: "admin",
                password: "password123"
            }
        }).then(response => {
            let body = response.body
            cy.log(body);
            expect(response.status).to.eql(200);
        })
    })
})

describe("get request", () => {
    it("validate status code", () => {
        cy.request({
            method: "GET",
            url: "https://restful-booker.herokuapp.com/booking",
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            let i = 0;
            while (i<=20) {
                console.log(i);
                i = i + 1;
                let body = response.body[i];
            cy.log(body);
            }
            expect(response.status).to.eql(200);
        })
    })
})





