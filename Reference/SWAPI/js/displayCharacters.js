function displayCharacters(characters, element) {
  const HTML = characters.map((character) =>
    `
    <div class="character">
      <h4>${character.name}</h4>
      <h4>${character.birth_year}</h4>
    </div>
    `
  ).join('')
  document.querySelector(element).innerHTML = HTML
}