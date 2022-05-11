describe('rate.am link test', () => {
    it('', () => {
        cy.visit('http://rate.am/');
        cy.get('#ctl00_MainMenuControl1_hpCB > a').click(); 
        cy.get('div.cnt:nth-child(5) div.cnt-body:nth-child(2) div.cnt-left div.panel:nth-child(5) td:nth-child(1) table.bankpagebankcontact:nth-child(2) tbody:nth-child(1) tr:nth-child(2) > td:nth-child(2)')
        .should('eq', ' (374 10) 58 38 41')
        cy.get('#ctl00_Content_cbInfo_hpUrl').click();
        cy.title().should('eq' ,'Հայաստանի Հանրապետության Կենտրոնական Բանկ');
    })
})