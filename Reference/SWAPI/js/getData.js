function getData(url) {
  console.log(url)
  const X_HTTP = new XMLHttpRequest();
  X_HTTP.onreadystatechange = function (params) {
    const CHARACTERS = JSON.parse(this.response)
    console.log(CHARACTERS)
    displayCharacters(CHARACTERS.results, 'section')
    setNextPrevious(CHARACTERS.next, CHARACTERS.previous)
  }
  X_HTTP.open("GET", url);
  X_HTTP.send();
}