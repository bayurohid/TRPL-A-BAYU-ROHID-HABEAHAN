describe("test saucedemo", () => {
  it("berhasil login", () => {
    cy.visit("https://www.saucedemo.com/v1/");
    cy.get("#user-name").type("standart_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get(".btn_action").click();
  });
});
