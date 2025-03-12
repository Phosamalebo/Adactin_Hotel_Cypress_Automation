describe('test case 17', () => {
    it('Verify whether search order ID is working', () => {
      cy.visit('https://adactinhotelapp.com/')
  
      // Login
      cy.get('#username').type('Omphe1995');
      cy.get('#password').type('27IS4Y');
      cy.get('#login').click();

      //Click on the Booked Itenary button
      cy.get('[href="BookedItinerary.php"]').click();

      //Type in the Order ID
      cy.get('#order_id_text').type('2EK2F85130');
      cy.get('#search_hotel_id').click();
      
  
  
    })
  })