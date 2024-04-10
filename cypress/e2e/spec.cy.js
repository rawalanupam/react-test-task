describe('Application Features', () => {
  it('should render the page successfully', () => {
    // Visit the application homepage
    cy.visit('http://localhost:3000/');
  });

  it('should change the order of items by name', () => {
    cy.visit('http://localhost:3000/');
    cy.wait(2000);
    // Click on the element responsible for sorting by name
    cy.get('[data-testid="sort-name"]').click();
    cy.wait(5000); 
  });

  it('should navigate to the next page successfully', () => {
    cy.visit('http://localhost:3000/');
    cy.wait(2000);
    // Click on the element to navigate to the next page
    cy.get('[data-testid="next-page"]').click(); 
    cy.wait(3000); 
  });

  it('should open and then close the modal', () => {
    cy.visit('http://localhost:3000/');
    cy.wait(2000);
    // Click on the first modal trigger element
    cy.get('[data-testid="modal-id"]').eq(0).click(); 
    cy.wait(3000);
    // Click on the close button inside the modal
    cy.get('[data-testid="close-button-id"]').click();
    cy.wait(2000);
  });
});