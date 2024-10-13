class Homepage
{
    getcityeditbox()
    {
        return cy.get('#textInput')
    }
    getclickcity()
    {
        return cy.get('li[data-element-value="Bangkok"]')
    }
    getcheckindatefield()
    {
        return cy.get("#check-in-box")
    }
    getcheckindate()
    {
        return cy.get('[data-selenium-date="2024-11-23"]')
    }
    getcheckoutdate()
    {
        return cy.get('[data-selenium-date="2024-11-25"]')
    }
    getchildrencount()
    {
        return cy.get("button[data-element-name='occupancy-selector-panel-children']:nth-child(3)")
    }
    getchildageindex()
    {
        return cy.get("[data-selenium='dropdownInput']")
    }

    getsearch()
    {
        return cy.get("[data-element-name='search-button']")
    }

}
export default Homepage;