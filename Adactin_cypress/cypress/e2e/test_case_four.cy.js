describe('test case 4', () => {
    it('Verify that location selected is displayed correctly in the search page', () => {
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
      cy.get('#datepick_in').click;
  
      // Select the check-out date
      cy.get('#datepick_out').click;
  
      cy.get('#adult_room').select(1)
      cy.get('#child_room').select(0)
  
      cy.get('#Submit').click();
      
  
  
    })
  })