// Calculate the dates dynamically
const currentDate = new Date();
const checkInDate = new Date(currentDate);
checkInDate.setDate(currentDate.getDate() + 7); // 5 days from now
const checkOutDate = new Date(currentDate);
checkOutDate.setDate(currentDate.getDate() + 5); // 6 days from now

// Format the dates to match the expected format (dd/mm/yyyy)
const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const checkInFormatted = formatDate(checkInDate);
const checkOutFormatted = formatDate(checkOutDate);

describe('test case 2', () => {
  it('passes', () => {
    cy.visit('https://adactinhotelapp.com/')

    // Login
    cy.get('#username').type('Omphe1995')
    cy.get('#password').type('27IS4Y')
    cy.get('#login').click()

    // Search Hotel
    cy.get('#location').select('Sydney')
    cy.get('#hotels').select('Hotel Creek')
    cy.get('#room_type').select('Standard')
    cy.get('#room_nos').select(1)

    // Select the check-in date
    cy.get('#datepick_in').clear().type(checkInFormatted);

    // Select the check-out date
    cy.get('#datepick_out').clear().type(checkOutFormatted);

    cy.get('#adult_room').select(1)
    cy.get('#child_room').select(0)

    cy.get('#Submit').click();
    


  })
})