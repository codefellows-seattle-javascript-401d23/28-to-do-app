// import cy from 'cypress';

describe('Front Page', () => {
  it('finds the content "h2 title"', () => {
    cy.visit('http://localhost:8080');
    cy.contains('Welcome to To-Do-List');
  });
});
describe('Check Input, Update, Remove', () => {
  it('clicks the link "type"', () => {
    cy.visit('http://localhost:8080');

    cy.contains('Dashboard').click();
    cy.get('input').type('Go for a walk');
    cy.contains('Add Note').click();
    cy.contains('Go for a walk').dblclick();
    cy.get('.modal-main > .noteForm > input').type('Get some water');
    cy.get('.updateButton').click();
    cy.get(':nth-child(2) > :nth-child(3) > .newNote').type('Do some code');
    cy.contains('Add Note').click();
    cy.get(':nth-child(2) > .noteItem').dblclick();
    cy.get(':nth-child(2) > .noteItem > .modal > .modal-main > .noteForm > .newNote').type('Read some docs'); 
    cy.get('.updateButton').click(); 
    cy.get(':nth-child(1) > .noteItem > :nth-child(1)').click();
    cy.get(':nth-child(1) > .noteItem > :nth-child(1)').click();
  });
});
