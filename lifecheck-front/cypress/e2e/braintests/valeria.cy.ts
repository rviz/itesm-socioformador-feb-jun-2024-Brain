describe("prueba e2e valeria,el flujo en resultados es correcto", () => {
  beforeEach(() => {
    cy.on("uncaught:exception", (err, runnable) => {
      if (err.message.includes("NEXT_REDIRECT")) {
        return false;
      }
      return false;
    });
  });

  describe("Verificación de inicio de sesión basado en el menú desplegable", () => {
    it("se verifica la funcionalidad del menú desplegable", () => {
      cy.visit("http://localhost:3000");

      cy.get('button[id^="radix-"]').click();

      cy.contains("Logout").should("be.visible");

      cy.contains("Login").should("be.visible");
    });
  });

  it("Renderiza a la página para loggearse", () => {
    cy.visit("http://localhost:3000");
    cy.contains("resultados");
    cy.get('[href="/results"]').click();
  });

  describe("Se acceden recuersos cuando no está logueado", () => {
    it("should redirect to external login page if not logged in", () => {
      cy.visit("http://localhost:3000");
      cy.get('[href="/resources"]').should("be.visible");
      cy.get('[href="/resources"]').click();
    });
  });

  describe("Se acceden recuersos cuando no está logueado", () => {
    it("should redirect to external login page if not logged in", () => {
      cy.visit("http://localhost:3000/resources");
      cy.contains("La Misión de Lifecheck").should("be.visible");
      cy.contains("medida").click();
    });
  });
});
