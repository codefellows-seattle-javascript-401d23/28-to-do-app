describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true);
  });
});
describe('My second Test', () => {
  it('Visits the Landing', () => {
    cy.visit('http://localhost:8080');
  });
});
describe('My third Test', () => {
  it('finds the content "h2 title"', () => {
    cy.visit('http://localhost:8080');
    cy.contains('Welcome to To-Do-List');
  });
});
describe('My fourth Test', () => {
  it('clicks the link "type"', () => {
    cy.visit('http://localhost:8080');

    cy.contains('Dashboard').click();
    cy.get('input').type('Go for a walk');
    cy.contains('Create Note').click();
  });
});
