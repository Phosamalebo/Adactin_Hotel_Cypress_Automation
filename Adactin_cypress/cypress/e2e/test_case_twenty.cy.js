describe('test case 20', () => {
    it('Verify that every page reflects its objective', () => {
      cy.visit('https://adactinhotelapp.com/')
  
      // Login
      cy.get('#username').type('Omphe1995');
      cy.get('#password').type('27IS4Y');
      cy.get('#login').click();

      // Search hotel
      cy.get('[href="SearchHotel.php"]').click();

      // Booked Itenary
      cy.get('[href="BookedItinerary.php"]').click();
      
      // Change password
      cy.get('[href="ChangePassword.php"]').click();
      
  
  
    })
  })