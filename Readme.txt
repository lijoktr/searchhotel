Steps to create project
1. mkdir searchhotel
2. cd searchhotel
3. npm -i init //package.json will get created
4. npm install cypress --save-dev
5. npm install
6. .\node_modules\.bin\cypress open //for opening testrunner 

framework build Steps
1. create the test script
2. Handle data with fixtures
3. Page object model   
4. default command timeout or env variables
5. mochawsome reporter

/*
Error1: We initially found matching element(s), but while waiting for them to become actionable, they disappeared from the page
soltn: click({force: true})

err2:  object tested must be an array, a map, an object, a set, a string, or a weakset, but object give
soltn: should('contain.text','Bangkok')

err3: cy.should() failed because the page updated as a result of this command, but you tried to continue the command chain.
soltn: .should('be.visible');
*/

Pushing code from 2nd time:
1. git add .
2. git commit -m "updating max price field"    
3. git push -u origin master 

Running code through command line:
1. npx Cypress run --spec C:\Users\lijom\Cypress\searchhotel\cypress\integration\examples\searchhotel.js --headed --browser chrome   

