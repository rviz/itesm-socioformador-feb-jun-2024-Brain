describe('prueba e2e página empresa Hugo, ', () => {
    beforeEach(() => {
      // Ignore specific uncaught exceptions from the application
      cy.on('uncaught:exception', (err, runnable) => {
        // Check if the error is related to NEXT_REDIRECT
        if (err.message.includes('NEXT_REDIRECT')) {
          return false; // Prevent Cypress from failing the test
        }
        // Return false to let Cypress ignore the exception
        return false;
      });
    });
  
    it('Testing business page', () => {
      // Step 1: Visit the home page
      cy.visit('http://localhost:3000/business');
  
      // Step 2: Verify the initial content
      cy.contains('h3', 'Para una mejor colaboración, hay que contar con una buena calidad de vida. Con una evaluación que diagnosticará y retroalimentará tus áreas de crecimiento personal.');
      // test2@hotmail.com
      // 123456_A@l
    });
  });
  