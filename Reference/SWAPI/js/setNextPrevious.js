function setNextPrevious(next, previous) {
  const buttons = document.querySelector('.buttons')
  let nextHTML = '';
  let previousHTML = '';
  if(next) {
    nextHTML= `
      <div id="next">
        next
      </div>
    `
  }
  if(previous) {
    previousHTML= `
      <div id="prev">
        Previous
      </div>
    `
  }
  const joinedHTML =  previousHTML + nextHTML;

  buttons.innerHTML = joinedHTML;

  const NEXT_NODE = document.querySelector('#next')
  const PREV_NODE = document.querySelector('#prev')
  if(NEXT_NODE) NEXT_NODE.addEventListener('click', () => getData(next))
  if(PREV_NODE) {
    PREV_NODE.setAttribute('style', 'background-color: red')
    PREV_NODE.addEventListener('click', () => {
      getData(previous)
    })
  }
  // document.querySelector('#prev').addEventListener('click', () => getData(previous))

}

