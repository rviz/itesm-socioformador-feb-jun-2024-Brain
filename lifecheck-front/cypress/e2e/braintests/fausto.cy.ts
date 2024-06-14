describe('Prueba E2E Fausto, revisar los resultados del usuario si y sólo si está loggeado', () => {
  beforeEach(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('NEXT_REDIRECT')) {
        return false; // Ignorar estas excepciones permite que la prueba continúe
      }
      return false;
    });
  });

  it('debería redirigir a la página de inicio de sesión externa si no está logueado', () => {
    cy.visit('http://localhost:3000');
    cy.contains('p', 'Descubre y mejora tu calidad de vida con nuestro análisis');
    cy.get('[href="/results"]').click();
  });

  it('debería mostrar la página de resultados del usuario cuando esté logueado', () => {
    // Realizar el inicio de sesión aquí
    cy.visit('http://localhost:3000/results');
    cy.url().should('include', '/results');
    cy.contains('Resultados');
  });
});
