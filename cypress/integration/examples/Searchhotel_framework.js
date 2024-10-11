///<reference types = "cypress"/>

describe('search hotel', function(){
    before(function(){
        //runs bfore all the tests in the block
        cy.fixture('example').then(function(data){
            this.data=data
        }) 
    })


    it('agoda.com', function(){
        //open url
        cy.visit('https://www.agoda.com/en-gb/')
        //search field
        cy.get('#textInput').type(this.data.city)
        //select Bangkok from dynamic dropdown
        cy.get('li[data-element-value="Bangkok"]').click()
        //Select checkindate
        cy.get("#check-in-box")
        cy.get('[data-selenium-date="2024-11-23"]').click({force: true})
        //Select checkoutdate
        cy.get('[data-selenium-date="2024-11-25"]').click({force: true})
        //add children count to 2
        cy.get("button[data-element-name='occupancy-selector-panel-children']:nth-child(3)").click({force: true}).click({force: true})
        cy.get("button[data-element-name='occupancy-selector-panel-children']:nth-child(3)").should('be.visible')
        //select age of child 1 and 2
        cy.get("[data-selenium='dropdownInput']").each(($el,index,$list)=>{
            cy.wrap($el).select(index === 0 ? "5" : "10", { force: true }).then(() => {
                
                  cy.wait(1000);
                
              });

        } )
        //select search button
        cy.get("[data-element-name='search-button']").click({ force: true })        
        //assert results showing for bangkok
        cy.get('[data-selenium="area-city-text"]').each(($el,index,$list)=>{
            cy.wrap($el).should('contain.text',this.data.city)
        })
        //assert checkin and checkout date
        cy.get('[data-selenium="checkInText"]').should('contain.text',this.data.checkindate)
        cy.get('[data-selenium="checkOutText"]').should('contain.text',this.data.checkoutdate)
        //filter the price to 100 max
        cy.get('[type="text"]:visible', { force: true }).eq(2).then((clearfield)=>{
            cy.wait(4000)
            cy.wrap(clearfield).type(this.data.maxprice,{ force: true })
            cy.wrap(clearfield).type(this.data.enterbutton,{ force: true })
        })        
        //assert first result shown is 100 or below
        cy.get('.PropertyCardPrice__Value').each(($el,index,$list)=>{
            cy.wrap($el).invoke('text').then((text) => {
                const value = parseFloat(text); // Convert the text to a number
              
                expect(value).to.be.lte(this.data.maxprice); 
        })
    })

    })
})

