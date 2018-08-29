const ROOT = document.querySelector('#app')

let url = 'https://swapi.co/api/people'

ROOT.innerHTML = `
  <h1>Swapi App</h1>
  <button>Get Characters</button>
  <section></section>
  <div class="buttons"></div>
`

const button = document.querySelector('button')
button.addEventListener('click', (e) => {
  getData(url)
})
