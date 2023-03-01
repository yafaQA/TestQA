# cypress-foncia
Cypress framework with cucumber

## Installation
Run the following commands to install the test project :
```bash
npm install
```

## Test files
* All tests should be stored in **cypress/e2e**

## Test Runner
Cypress has a unique test runner that allows us to see commands as they execute. Additionally, it also shows the real-time run of the application under test.
In order to open the test runner, run the following command in terminal:
```bash
npm run cy:open
```

## Test execution
It is possible to run test in headless mode and for that purpose use the following command :
```bash
npm run cy:run
``` 

### Test execution report
Mochawesome reporter is a custom reporter which generates a standalone HTML/CSS report to help visualize your test runs. It has simple, clean, and modern design. The report has filters to display only the tests you want and shows stack trace for failed tests.
* To generate report after execution, run the command :
```bash
npm run cy:run
``` 
* At the end of execution, an html report(**index.html**) will be generated in :
```bash
cypress/reports
```
