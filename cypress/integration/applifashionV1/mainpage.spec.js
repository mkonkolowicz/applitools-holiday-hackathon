
const {makeVisualGridClient} = require('applitools/visual-grid-client');

const visualGridClient = makeVisualGridClient()

describe("Main Page", () => {
    beforeEach(() => {
      cy.visit("/tlcHackathonMasterV2.html");
    })
    it("main page",() => {
      visualGridClient.openEyes({
        appName: 'AppliFashion',
        testName: 'Test 1',
        browser: [{ deviceName: 'iPhone X' }, { width: 320, height: 480 }],
      });
      visualGridClient.CheckWindow('main page');
      visualGridClient.Close();
    });
    it("filter by color", () =>{
        cy.get('#SPAN__checkmark__107').click();
        cy.get('#filterBtn').click();
        visualGridClient.openEyes({
            appName: 'AppliFashion',
            testName: 'Test 2',
            browser: [{ deviceName: 'iPhone X' }, { width: 320, height: 480 }],
          });
          visualGridClient.CheckWindow({
            target: 'region',
            selector: '#product_grid'
          });
          visualGridClient.Close();
    });
    it("product details", () =>{
        cy.get('#IMG__imgfluid__215').click();
        visualGridClient.openEyes({
            appName: 'AppliFashion',
            testName: 'Test 3',            
            browser: [{ deviceName: 'iPhone X' }, { width: 320, height: 480 }],
          });
          visualGridClient.CheckWindow();
        visualGridClient.Close();
    });
});