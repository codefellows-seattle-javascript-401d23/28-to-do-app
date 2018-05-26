describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true);
  });
});
describe('My second Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://deliman206.github.io/to-do-app/.');
  });
});
