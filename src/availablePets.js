
/**
 * @function returnAvailablePets
 * @param {[Object]} pets Array of Pets. Structure follows: { ..., code: Number, vaccinated: Boolean, ... }
 * @param {Object} CODES Object of Codes. Structure follows: { ..., AVAILABLE: Number, ... }
 * @return {[Object]} Array of available pet
 */
const returnAvailablePets = (pets, CODES) => {
  let response = { success: false, details: '' }

  if (!Array.isArray(pets)) {
    response.details = 'pets passed is not type array'
    return response
  }

  if (pets.length < 1) {
    response.details = 'pets passed in does not have any items'
    return response
  }

  const petsAvailable = pet => pet.code === CODES.AVAILABLE && pet.vaccinated

  return pets.filter(petsAvailable)
}

export { returnAvailablePets }