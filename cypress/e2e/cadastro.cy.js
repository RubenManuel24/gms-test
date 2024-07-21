/// <reference types="cypress"/>


describe('US-012 - Funcionalidade: Cadastro de membros', () => {

  beforeEach(()=> {
    cy.visit('/')
  });

  afterEach(() => {
    cy.screenshot()
  })

  
  it('Deve fazer o cadastro de campos obrigatórios', () => {

    var email = `ruben${Date.now()}@gmail.com`

    cy.preencherCadastro('Ruben', 'Manuel', email, '938475621', 'rubenmauel')

  })
})

