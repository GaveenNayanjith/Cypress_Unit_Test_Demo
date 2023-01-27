import React from 'react'
import Stepper from './Stepper'

describe('<Stepper />', () => {

  //Checking whether the Stepper component is loaded. 
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Stepper />)
  })

  //Checking whether the counter has the initial value of 0
  it('Counter has 0',()=>{
    cy.mount(<Stepper/>)
    cy.get('[data-cy=counter]').should('have.text','0')
  })


  //Clicking the incremanent counter and checking whether the counter is raised.
  it('Counter increased by 1',()=>{
    cy.mount(<Stepper/>)
    cy.get('[data-cy=increment]').click()
    cy.get('[data-cy=counter]').should('have.text','1')
  }) 

  //Setting the initial value to 100 (Passing props/dummy data to the component)
  it('Counter value set to 100',()=>{
    cy.mount(<Stepper initial={100} />) //The props should be passed when the component is initially mounted. 
    cy.get('[data-cy=counter]').should('have.text','100')
  }) 

  //Clicking the decrement counter and checking whether the counter is raised.
  it('Counter increased by 1',()=>{
    cy.mount(<Stepper/>)
    cy.get('[data-cy=decrement]').click()
    cy.get('[data-cy=counter]').should('have.text','-1')
  }) 

})