/// <reference types = "cypress" />

describe("get request", () => {
    var result;
    it("validate status code", () => {
        result = cy.request("http://automationpractice.com/modules/blocklayered/blocklayered-ajax.php");
        result.its("status").should("equal", 200);
    });

    it("validate keys and values", () => {
        cy.request({
            method: "POST",
            url: "http://automationpractice.com/index.php?controller=authentication",
            headers: {
                Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                Connection: "keep-alive",
                Cookie: "PrestaShop - a30a9934ef476d11b6cc3c983616e364=WocTdgeiJPnQnxuDUreaFGOs4wR7HcoLamKlvjf % 2BW3IBN6oQjgi0GJw24xspTqZG40R3M0fk0Sj6zF3jXGTL4kT % 2FDslFx2d65HSfrqb4HDMdQ0Op0yzqr7Px0FJhO1AVefSotRyVO6bl4ln1MAfRixtmKw609MPSwkdnttTA8xKyQzjWvMi9tJI8XNoyKvDuFIqkRQjKZTbvrNC0fg4ehdeBnyFdeaZ6f % 2FlCM1mjWS17o % 2BnTPa2wUbXv % 2FyWm % 2BzVn % 2Bi % 2Bao5uF9T4ypUfPZVcibw % 3D % 3D000193",
                Host: "automationpractice.com",
                Origin: "http://automationpractice.com",
                Referer: "http://automationpractice.com/index.php?controller=authentication&back=my-account"
            },
            body: {
                email: "asd1234@mail.com",
                passwd: "Password1234",
                back: "my-account",
                SubmitLogin: ""
            }
        }).then(responce => {
            let body = responce.body//JSON.parse(JSON.stringify(responce.body));
            cy.log(body);
            expect(responce.status).to.eql(200);
        });
        cy.request({
            method: "GET",
            url: "http://automationpractice.com/index.php?controller=my-account",
            headers: {
                accept: "text/html"
            }
        })
    });
})