const ROOT = document.querySelector('#root');

function getSwapi(URL) {
  const SWAPI = new XMLHttpRequest();

  SWAPI.onreadystatechange = function() {
    const RESPONSE = JSON.parse(this.response);
    ROOT.innerHTML = displayCharacters(RESPONSE);
    const NEXT_NODE = document.querySelector('.next');
    const PREV_NODE = document.querySelector('.prev');
    console.log(RESPONSE);
    if (RESPONSE.previous) {
      PREV_NODE.addEventListener('click', () => getSwapi(RESPONSE.previous));
    }
    if (RESPONSE.next) {
      NEXT_NODE.addEventListener('click', () => getSwapi(RESPONSE.next));
    }
  };

  SWAPI.open('GET', URL);
  SWAPI.send();
}
getSwapi('https://swapi.co/api/people');

console.log(getSwapi);
