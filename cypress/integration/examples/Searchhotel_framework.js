///<reference types = "cypress"/>
import Homepage from "../Pageobjects/Homepage"
import Resultpage from "../Pageobjects/Resultpage"


describe('search hotel', function(){
    before(function(){
        //runs bfore all the tests in the block
        cy.fixture('example').then(function(data){
            this.data=data
        }) 
    })
    it('agoda.com', function(){
        const homepage = new Homepage()
        const resultpage = new Resultpage()
        //open url
        cy.visit('https://www.agoda.com/en-gb/')
        //search field
        homepage.getcityeditbox().type(this.data.city)
        //select Bangkok from dynamic dropdown
        homepage.getclickcity().click()
        //Select checkindate
        homepage.getcheckindatefield()
        homepage.getcheckindate().click({force: true})
        //Select checkoutdate
        homepage.getcheckoutdate().click({force: true})        
        //add children count to 2
        homepage.getchildrencount().click({force: true}).click({force: true})
        //select age of child 1 and 2
        homepage.getchildageindex().each(($el,index,$list)=>{            
            cy.wrap($el).select(index === 0 ? "5" : "10", { force: true }).then(() => {

                cy.wait(1000);
                
              });

        } )
        //select search button
        homepage.getsearch().click({ force: true })        
        //assert results showing for bangkok by customised command in command.js
        cy.selectcity(this.data.city)
        //assert checkin and checkout date
        resultpage.getcheckindatedisplayed().should('contain.text',this.data.checkindate)
        resultpage.getcheckoutdatedisplayed().should('contain.text',this.data.checkoutdate)
        //filter the price to 100 max
        resultpage.getpricefilter().eq(2).then((clearfield)=>{
            cy.wait(4000)
            cy.wrap(clearfield).type(this.data.maxprice,{ force: true })
            cy.wrap(clearfield).type(this.data.enterbutton,{ force: true })
        })        
        //assert first result shown is 100 or below
        resultpage.getfirstfilter().each(($el,index,$list)=>{
            cy.wrap($el).invoke('text').then((text) => {
                const value = parseFloat(text); // Convert the text to a number
              
                expect(value).to.be.lte(this.data.maxprice); 
        })
    })

    })
})

