///<reference types = "cypress"/>

describe('search hotel', function(){
    it('agoda.com', function(){
        cy.visit('https://www.agoda.com/en-gb/')
        cy.get('#textInput').type('Bangkok')
        cy.get('li[data-element-value="Bangkok"]').click()
        //cy.pause()
        /*cy.get("#check-in-box").then(()=>
            {
                cy.get(".PriceSurgePicker-Day").contains('31')

        })*/
        cy.get("#check-in-box")
        cy.get('[data-selenium-date="2024-10-23"]').click({force: true})
        cy.get('[data-selenium-date="2024-10-25"]').click({force: true})
        
        //cy.wait(2000)      

        
        cy.get("button[data-element-name='occupancy-selector-panel-children']:nth-child(3)").click({force: true}).click({force: true})
        cy.wait(1000)

        cy.get("[data-selenium='dropdownInput']").each(($el,index,$list)=>{
            if(index===0)
            {
                cy.wrap($el).select("5", { force: true })
            }
            else{
                cy.wrap($el).select("10", { force: true })
            }

        } )
        cy.get("[data-element-name='search-button']").click({ force: true })
        
        //assert results showing for bangkok
        cy.get('[data-selenium="area-city-text"]').eq(1).should('contain.text','Bangkok')


        
        //assert date
        cy.get('[data-selenium="checkInText"]').should('contain.text','23 Oct 2024')
        cy.get('[data-selenium="checkOutText"]').should('contain.text','25 Oct 2024')
        


        //filter the price to 500 max
        cy.get('[type="text"]:visible', { force: true }).eq(2).clear().type('500').type('{enter}')
        //assert first result shown is 500 or below

        cy.get('.PropertyCardPrice__Value').eq(0).invoke('text').then((text) => {
            const value = parseFloat(text); // Convert the text to a number
          
            expect(value).to.be.lte(500); 

        })      
        

        
    })
})

/*
Error1: We initially found matching element(s), but while waiting for them to become actionable, they disappeared from the page
soltn: click({force: true})

err2:  object tested must be an array, a map, an object, a set, a string, or a weakset, but object give
soltn: should('contain.text','Bangkok')

err3: cy.should() failed because the page updated as a result of this command, but you tried to continue the command chain.
soltn: 
*/