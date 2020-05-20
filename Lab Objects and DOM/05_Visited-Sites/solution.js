function solve() {
  //TODO
  function clickEvent() {
      let textElement = this.parentNode.children[1];
      let text = textElement.innerText.toString();
      let number = text.match(/\d+/)[0];
      text = text.replace(number, (+number + 1).toString());
      textElement.innerHTML = text;
  }

  let linkElements = document.getElementById('exercise');

  for (let linkElement of linkElements){
      linkElement.addEventListener('click', clickEvent);
  }
}