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
    it("get first 20 objects", () => {
        cy.request({
            method: "GET",
            url: "https://restful-booker.herokuapp.com/booking",
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            let i = 0;
            while (i <= 20) {
                console.log(i);
                i = i + 1;
                let body = response.body[i];
                cy.log(body);
            }
            expect(response.status).to.eql(200);
        })
    })

    it("get and validate object properties", () => {
        let i = 10;
        cy.request({
            method: "GET",
            url: "https://restful-booker.herokuapp.com/booking/" + i,
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            let body = JSON.parse(JSON.stringify(response.body));
            cy.log(body);
            cy.log(body.bookingdates);
            expect(body).has.property("firstname", "Mark");
            expect(body).has.property("lastname", "Jackson");
            expect(response.status).to.eql(200);
        })
    })

    it("get and validate several objects properties", () => {
        for (let i = 10; i < 15; i++) {
            cy.request({
                method: "GET",
                url: "https://restful-booker.herokuapp.com/booking/" + i,
                headers: {
                    accept: "application/json"
                }
            }).then(response => {
                let body = JSON.parse(JSON.stringify(response.body));
                cy.log(body);
                cy.log(i, body.firstname, body.lastname, body.totalprice, body.depositpaid, body.bookingdates, body.additionalneeds);
                expect(response.status).to.eql(200);
            })
        }
    })

    it("post new object", () => {
        cy.request({
            method: "POST",
            url: "https://restful-booker.herokuapp.com/booking",
            headers: {
                accept: "application/json"
            },
            body: {
                "firstname": "Jabba",
                "lastname": "Hutt",
                "totalprice": 1000000000,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2234-01-01",
                    "checkout": "2235-01-01"
                },
                "additionalneeds": "Dinner"
            }
        }).then(response => {
            let body = JSON.parse(JSON.stringify(response.body));
            cy.log(body.bookingid,
                body.booking.firstname, 
                body.booking.lastname, 
                body.booking.totalprice, 
                body.booking.depositpaid, 
                body.booking.bookingdates, 
                body.booking.additionalneeds);
            expect(body.booking).has.property("firstname", "Jabba");
            expect(body.booking).has.property("lastname", "Hutt");
            expect(response.status).to.eql(200);
        })
    })
})
