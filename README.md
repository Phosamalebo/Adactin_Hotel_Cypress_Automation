## Adactin Hotel Cypress Automation

### Project Overview

This project contains a Cypress test suite for automated end-to-end testing of the Adactin Hotel App. The tests cover various functionalities such as hotel search, booking, cancellation, and user authentication features like login and logout.

All tests were written and executed using Visual Studio Code (VSCode) as the IDE.


### Prerequisites

Before running the tests, ensure you have the following installed:

- Node.js (v14 or higher recommended)
- Visual Studio Code (or any preferred IDE)
- Cypress (installed via npm)

### Test Cases Summary

- Test Case ID	         Description
- Test Case 2:	           Verify valid hotel search functionality with future dates
- Test Case 3:          	 Verify system error message when selecting past check-in dates
- Test Case 4:	           Verify selected location is correctly displayed on search page
- Test Case 9:	           Verify user can successfully logout
- Test Case 17:	         Verify search order ID functionality
- Test Case 19:	         Verify the ability to cancel an existing hotel order
- Test Case 20:	         Verify navigation and proper display of Search, Itinerary, and Password Change pages


### How Tests are Structured

- Login Flow: All test cases begin with login using a test account.
- Hotel Search Flow: Select location, hotel, room type, and input dates dynamically.
- Dynamic Dates: Dates are calculated dynamically based on the current date, to avoid hardcoding.
- Assertions & Actions: Test cases perform actions like hotel booking, searching by order ID, cancellation, and logout.

### Tools & Technologies

- Cypress: End-to-end testing framework.
- JavaScript (ES6): Test script language.
- Visual Studio Code (VSCode): Development environment.
