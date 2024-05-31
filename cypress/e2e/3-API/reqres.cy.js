describe("reqres API test", () => {
  let bodyData = {
    name: "bayu",
    job: "SQA",
  };
  it("Get List User", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users?page=2",
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it("Create User", () => {
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/users",
      body: bodyData,
    }).then((response) => {
      expect(response.status).to.equal(201);
      cy.log(bodyData);
    });
  });
});
