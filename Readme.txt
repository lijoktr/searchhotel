Steps to create project
1. mkdir searchhotel
2. cd searchhotel
3. npm -i init //package.json will get created
4. npm install cypress --save-dev
5. npm install
6. .\node_modules\.bin\cypress open //for opening testrunner 
7. 
/*
Error1: We initially found matching element(s), but while waiting for them to become actionable, they disappeared from the page
soltn: click({force: true})

err2:  object tested must be an array, a map, an object, a set, a string, or a weakset, but object give
soltn: should('contain.text','Bangkok')

err3: cy.should() failed because the page updated as a result of this command, but you tried to continue the command chain.
soltn: 
*/