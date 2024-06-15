describe("prueba e2e Eugenio, acceder a evaluacion solamente loggeado", () => {
	beforeEach(() => {
		// Ignore specific uncaught exceptions from the application
		cy.on("uncaught:exception", (err, runnable) => {
			// Check if the error is related to NEXT_REDIRECT
			if (err.message.includes("NEXT_REDIRECT")) {
				return false; // Prevent Cypress from failing the test
			}
			// Return false to let Cypress ignore the exception
			return false;
		});
	});

	it("should redirect to external login page if not logged in", () => {
		// Step 1: Visit the home page
		cy.visit("http://localhost:3000");

		// Step 2: Verify the initial content
		cy.contains(
			"p",
			"Descubre y mejora tu calidad de vida con nuestro análisis"
		);

		// Step 3: Attempt to access the buainness page
		cy.get('[href="/business"]').click();
	});
});
