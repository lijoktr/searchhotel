class Resultpage
{
    getcheckindatedisplayed()
    {
        return cy.get('[data-selenium="checkInText"]')
    }
    getcheckoutdatedisplayed()
    {
        return cy.get('[data-selenium="checkOutText"]')
    }
    getpricefilter()
    {
        return cy.get('[type="text"]:visible', { force: true })
    }
    getfirstfilter()
    {
        return cy.get('.PropertyCardPrice__Value')
    }
}
export default Resultpage;