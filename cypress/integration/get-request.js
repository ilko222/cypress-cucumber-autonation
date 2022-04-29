/// <reference types = "cypress" />

describe("get request", () => {
    var result;
    it("validate status code", () => {
        result = cy.request("http://automationpractice.com/modules/blocklayered/blocklayered-ajax.php");
        result.its("status").should("equal", 200);
    })
})