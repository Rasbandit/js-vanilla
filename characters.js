function displayIndividual(person) {
  return `
    <div class="character">
      <h4>${person.name}</h4>
      <h5>${person.hair_color}</h5>
      <h5>${person.birth_year}</h5>
    </div>
  `;
}

function displayCharacters(response) {
  const DATA = response.results.map(displayIndividual).join('');
  return `
  <div class="allCharacters">
    ${DATA}
  </div>
  <div class="buttons">
    <button class="prev">Previous</button>
    <button class="next">Next</button>
  </div>
  `;
}
