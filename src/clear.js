let clear = () => {
  let main = document.getElementsByClassName('main')[0];
  main.remove();

  let buttons = document.getElementsByTagName('button');
  for (let i = 0; i< buttons.length; i++) {
    buttons[i].className = "";
  }
}

export default clear;