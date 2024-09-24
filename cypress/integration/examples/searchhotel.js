///<reference types = "cypress"/>

describe('search hotel', function(){
    it('agoda.com', function(){
        //open url
        cy.visit('https://www.agoda.com/en-gb/')
        //search field
        cy.get('#textInput').type('Bangkok')
        //select Bangkok from dynamic dropdown
        cy.get('li[data-element-value="Bangkok"]').click()
        //Select checkindate
        cy.get("#check-in-box")
        cy.get('[data-selenium-date="2024-10-23"]').click({force: true})
        //Select checkoutdate
        cy.get('[data-selenium-date="2024-10-25"]').click({force: true})
        //add children count to 2
        cy.get("button[data-element-name='occupancy-selector-panel-children']:nth-child(3)").click({force: true}).click({force: true})
        cy.get("button[data-element-name='occupancy-selector-panel-children']:nth-child(3)").should('be.visible')
        //select age of child 1 and 2
        cy.get("[data-selenium='dropdownInput']").each(($el,index,$list)=>{
            if(index===0)
            {
                cy.wrap($el).select("5", { force: true })
            }
            else{
                cy.wrap($el).select("10", { force: true })
                cy.wait(1000)
            }

        } )
        //select search button
        cy.get("[data-element-name='search-button']").click({ force: true })        
        //assert results showing for bangkok
        cy.get('[data-selenium="area-city-text"]').each(($el,index,$list)=>{
            cy.wrap($el).should('contain.text','Bangkok')
        })
        //assert checkin and checkout date
        cy.get('[data-selenium="checkInText"]').should('contain.text','23 Oct 2024')
        cy.get('[data-selenium="checkOutText"]').should('contain.text','25 Oct 2024')
        //filter the price to 100 max
        cy.get('[type="text"]:visible', { force: true }).eq(2).then((clearfield)=>{
            cy.wait(4000)
            cy.wrap(clearfield).type('100',{ force: true })
            cy.wrap(clearfield).type('{enter}',{ force: true })
        })        
        //assert first result shown is 100 or below
        cy.get('.PropertyCardPrice__Value').each(($el,index,$list)=>{
            cy.wrap($el).invoke('text').then((text) => {
                const value = parseFloat(text); // Convert the text to a number
              
                expect(value).to.be.lte(100); 
        })
    })
        /*
        cy.get('.PropertyCardPrice__Value').eq(0).invoke('text').then((text) => {
            const value = parseFloat(text); // Convert the text to a number
          
            expect(value).to.be.lte(100); 

        })    */   
    })
})

