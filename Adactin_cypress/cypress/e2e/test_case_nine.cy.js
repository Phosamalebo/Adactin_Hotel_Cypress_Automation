describe('test case 9', () => {
    it('Verify that you can logout', () => {
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

      cy.get('#radiobutton_0').click();

      cy.get('#continue').click();



      // Book a hotel
      cy.get('#first_name').type('Malebo');
      cy.get('#last_name').type('Phosa');
      cy.get('#address').type('Pretoria');
      cy.get('#cc_num').type('1234567890987654');
      cy.get('#cc_type').select('VISA');
      cy.get('#cc_exp_month').select('April');
      cy.get('#cc_exp_year').select('2024');
      cy.get('#cc_cvv').type(1234);

      cy.get('#book_now').click();

      //Logout
      cy.get('#logout', { timeout: 10000 }).click();
      
  
  
    })
  })