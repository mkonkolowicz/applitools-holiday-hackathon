describe("Main Page", () => {
    beforeEach(() => {
      cy.visit("/tlcHackathonMasterV2.html");
    })
    it("main page",() => {
      cy.eyesOpen({
        appName: 'AppliFashion',
        testName: 'Test 1',
      });
      cy.eyesCheckWindow('main page');
      cy.eyesClose();
    });
    it("filter by color", () =>{
        cy.get('#SPAN__checkmark__107').click();
        cy.get('#filterBtn').click();
        cy.eyesOpen({
            appName: 'AppliFashion',
            testName: 'Test 2',
          });
          cy.eyesCheckWindow({
            target: 'region',
            selector: '#product_grid'
          });
        cy.eyesClose();
    });
    it("product details", () =>{
        cy.get('#IMG__imgfluid__215').click();
        cy.eyesOpen({
            appName: 'AppliFashion',
            testName: 'Test 3',
          });
          cy.eyesCheckWindow();
        cy.eyesClose();
    });
});