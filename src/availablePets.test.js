/**
 * @fileoverview
 * Example of testing pure functions
 */
import { returnAvailablePets } from './availablePets'

/**
 * 1. Lets set up our data inputs to plug in our function in test
 */
const CODES = {
  AVAILABLE: 3
}

const PETS = [

  // Available PET
  {
    name: 'Sammy',
    type: 'dog',
    code: 3,
    vaccinated: true
  },
  {
    name: 'Lemiwinks',
    type: 'cat',
    code: 3,
    vaccinated: true
  },

  // NOT AVAILABLE
  {
    name: 'Aso',
    type: 'dog',
    code: 12,
    vaccinated: true
  },
  {
    name: 'Butch',
    type: 'cat',
    code: 3,
    vaccinated: false
  }
]

/**
 * 2. Beginning of our Spec
 */
describe('Getting Available Pets', () => {

  /**
   * 3. Our Happy Path Test
   */
  it('should return pets that are available and vaccinated', () => {
    expect(returnAvailablePets(PETS, CODES)).toEqual([PETS[0], PETS[1]])
  })

  /**
   * 4. Our Unhappy path tests
   */
  describe('Not returning available pets', () => {
    it('should not return pets that are not vaccinated and available', () => {
      expect(returnAvailablePets(PETS, CODES)).toEqual(expect.not.arrayContaining([PETS[2], PETS[3]]))
    })
  })

  /**
   * 4. Our Unhappy path tests
   */
  describe('Missing arguments', () => {
    it('should return a false response if pets data structure is not a array', () => {
      expect(returnAvailablePets('not correct type', CODES)).toEqual({ success: false, details: 'pets passed is not type array' })
    })

    it('should return a false response if pets data is empty', () => {
      expect(returnAvailablePets([], CODES)).toEqual({ success: false, details: 'pets passed in does not have any items' })
    })
  })
})