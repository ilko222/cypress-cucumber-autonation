
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
    it("get first 20 booking id's", () => {
        cy.request({
            method: "GET",
            url: "https://restful-booker.herokuapp.com/booking",
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            let i = 0;
            while (i <= 20) {
                let body = response.body[i];
                cy.log(body);
                i = i + 1;
            }
            expect(response.status).to.eql(200);
        })
    })

    it("get and validate object properties", () => {
        cy.request({
            method: "GET",
            url: "https://restful-booker.herokuapp.com/booking",
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            let body = response.body[0];
            cy.log(body);
            cy.wrap(body.bookingid).as('id');
            expect(response.status).to.eql(200);
        });
        cy.get('@id').then((id) => {
            cy.request({
                method: "GET",
                url: "https://restful-booker.herokuapp.com/booking/" + id,
                headers: {
                    accept: "application/json"
                }
            }).then(response => {
                let body = JSON.parse(JSON.stringify(response.body));
                cy.log(body.bookingdates, body.firstname, body.lastname);
                expect(body).has.property("firstname");
                expect(body).has.property("lastname");
                expect(response.status).to.eql(200);
            })
        })

    })

    it("get and validate several objects properties", () => {
        cy.request({
            method: "GET",
            url: "https://restful-booker.herokuapp.com/booking",
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            let i = 0;
            while (i <= 20) {
                i = i + 1;
                let body = response.body[i];
                cy.log(body);
                cy.wrap(body.bookingid).as('id');
                cy.get('@id').then((id) => {
                    cy.request({
                        method: "GET",
                        url: "https://restful-booker.herokuapp.com/booking/" + id,
                        headers: {
                            accept: "application/json"
                        }
                    }).then(response => {
                        let body = JSON.parse(JSON.stringify(response.body));
                        cy.log(body);
                        cy.log(i, body.firstname, body.lastname, body.totalprice, body.depositpaid, body.bookingdates, body.additionalneeds);
                        expect(response.status).to.eql(200);
                    })
                });
            }
            expect(response.status).to.eql(200);
        })
    })

    describe("post/put requests", () => {
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

        it("put an object", () => {
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
                cy.wrap(body.token).as('newToken');
            })
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
                expect(body.booking).has.property("firstname", "Jabba");
                expect(body.booking).has.property("lastname", "Hutt");
                expect(response.status).to.eql(200);
                cy.log(body.bookingid);
                cy.wrap(body.bookingid).as('newId')
            })
            cy.get('@newToken').then((newToken) => {
                cy.get('@newId').then((newId) => {
                    cy.request({
                        method: "PUT",
                        url: "https://restful-booker.herokuapp.com/booking/" + newId,
                        headers: {
                            accept: "application/json",
                            cookie: "token=" + newToken
                        },
                        body: {
                            firstname: "Khan",
                            lastname: "Solo",
                            totalprice: 555,
                            depositpaid: true,
                            bookingdates: {
                                checkin: "2299-01-01",
                                checkout: "2300-01-01"
                            },
                            additionalneeds: "Breakfast"
                        }
                    }).then(response => {
                        let body = JSON.parse(JSON.stringify(response.body));
                        cy.log(body)
                        cy.log(body.bookingid,
                            body.firstname,
                            body.lastname,
                            body.totalprice,
                            body.depositpaid,
                            body.bookingdates,
                            body.additionalneeds);
                        expect(body).has.property("firstname", "Khan");
                        expect(body).has.property("lastname", "Solo");
                        expect(response.status).to.eql(200);
                    })
                })
            })
        })
    })
})

describe("delete request", () => {
    it("delete an object", () => {
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
            cy.wrap(body.token).as('newToken');
        })
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
            expect(body.booking).has.property("firstname", "Jabba");
            expect(body.booking).has.property("lastname", "Hutt");
            expect(response.status).to.eql(200);
            cy.log(body.bookingid);
            cy.wrap(body.bookingid).as('newId')
        })
        cy.get('@newToken').then((newToken) => {
            cy.get('@newId').then((newId) => {
                cy.request({
                    method: "DELETE",
                    url: "https://restful-booker.herokuapp.com/booking/" + newId,
                    headers: {
                        accept: "application/json",
                        cookie: "token=" + newToken
                    }
                }).then(response => {
                    expect(response.status).to.eql(201);
                })
                cy.request({
                    method: "GET",
                    url: "https://restful-booker.herokuapp.com/" + newId,
                    failOnStatusCode: false
                }).then(response1 => {
                    expect(response1.status).to.eql(404);
                })
            })
        })
    })
})

describe("get booking by name", () => {
    it("get booking by name", () => {
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
            cy.wrap(body.token).as('newToken');
        })
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
            expect(body.booking).has.property("firstname", "Jabba");
            expect(body.booking).has.property("lastname", "Hutt");
            expect(response.status).to.eql(200);
            cy.wrap(body.booking.firstname).as('fname');
            cy.wrap(body.booking.lastname).as('lname');
            cy.wrap(body.bookingid).as('id');
        })
        cy.get('@newToken').then((newToken) => {
            cy.get('@fname').then((fname) => {
                cy.get('@lname').then((lname) => {
                    cy.get('@id').then((id) => {
                        cy.request({
                            method: "GET",
                            url: "https://restful-booker.herokuapp.com/booking?firstname=" + fname + "&lastname=" + lname,
                            headers: {
                                accept: "application/json",
                                cookie: "token=" + newToken
                            }
                        }).then(response => {
                            let body = response.body;
                            cy.log(body[1]);
                            cy.log(id);
                            expect(response.status).to.eql(200);
                        })
                    })
                    
                })
            })
        })
    })
})

