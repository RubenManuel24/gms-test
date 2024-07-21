/// <reference types="cypress"/>

describe('US-012 - Funcionalidade: Cadastro de membros', () => {

    beforeEach(() => {
        cy.visit('/')
    });

    afterEach(() => {
        cy.screenshot()
      })

   // it('Deve fazer busca única de filmes pelo nome', () => {

       // cy.get('#search-input').type('Matrix')
       // cy.get('#search-button').click()
       // cy.get('#results-section').should('contain', 'Matrix')

    //})


    //it('Deve fazer busca de um filmes numa lista pelo nome', () => {

        //cy.fixture('filmes').then((filme) => {

           // cy.get('#search-input').type(filme[0].titulo)
            //cy.get('#search-button').click()
           // cy.get('#results-section').should('contain', filme[0].titulo)

        //})



    //})


    it('Deve fazer busca de todos filmes numa lista pelo nome', () => {

        cy.fixture('filmes').each((filme) => {

            cy.get('#search-input').clear().type(filme.titulo)
            cy.get('#search-button').click()
            cy.get('#results-section').should('contain', filme.titulo)

        })

    })

    it('Não deve emcontrar filme', () => {

        cy.get('#search-input').clear().type('...')
        cy.get('#search-button').click()
        cy.get('#results-section > p').should('contain', 'Filme não encontrado.')

    })

})