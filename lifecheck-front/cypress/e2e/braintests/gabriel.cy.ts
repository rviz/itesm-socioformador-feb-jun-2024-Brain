describe('Prueba E2E Gabriel, revisar las categorías dentro de la pestaña de resources', () => {
    beforeEach(() => {
      cy.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('NEXT_REDIRECT')) {
          return false;
        }
        return false;
      });
    });
  
    it('debe de mandar al usuario a la página de recursos', () => {
      cy.visit('http://localhost:3000');
      cy.contains('p', 'Descubre y mejora tu calidad de vida con nuestro análisis');
      cy.get('[href="/resources"]').click();
    });
  
    it('se deberían poder ver las categorías', () => {
      cy.visit('http://localhost:3000/resources');
      cy.url().should('include', '/resources');
      cy.contains('salud');
      cy.contains('educación');
      cy.contains('satisfacción personal');
      cy.contains('vivienda');
      cy.contains('medio ambiente');
      cy.contains('ingresos');
      cy.contains('seguridad');
      cy.contains('equilibrio entre vida y trabajo');
  
    });
  });