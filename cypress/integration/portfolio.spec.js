describe("Portfolio: ", function() {
    it("shows user data", function() {
        cy.visit("/")
        cy.get("#user-name").should("contain", "Shivam Sheth")
    })
})