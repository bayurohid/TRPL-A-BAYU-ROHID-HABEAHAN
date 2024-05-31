describe("test saucedemo", () => {
  it("berhasil login", () => {
    cy.visit("https://www.saucedemo.com/v1/");
    cy.get("#user-name").type("standart_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get("#login-button").click();
    // cy.get(".app_logo").should("be.visible");
  });
  // it("gagal login", () => {
  //   cy.visit("https://www.saucedemo.com/v1/");
  //   cy.get('[data-test="username"]').type("locked_out_user");
  //   cy.get('[data-test="password"]').type("secret_sauce");
  //   cy.get("#login-button").click();
  //   cy.get('[data-test="error"]').should(
  //     "contain.text",
  //     "this user has been locked out"
  //   );
  // });
});
