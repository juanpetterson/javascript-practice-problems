function createButtons() {
  for (let i = 1; i <= 5; i++) {
    var button = document.createElement('BUTTON');
    button.innerHTML = 'Button ' + i;
    button.onclick = function () {
      alert('This is button ' + i);
    };
    document.body.appendChild(button);
  }
}

function createButtons2() {
  for (let i = 1; i <= 5; i++) {
    var button = document.createElement('BUTTON');
    button.innerHTML = 'Button ' + i;

    (function (num) {
      button.onclick = function () {
        alert('This is button ' + num);
      };
    })(i);
    document.body.appendChild(button);
  }
}

function createButtons3() {
  for (let i = 1; i <= 5; i++) {
    var button = document.createElement('BUTTON');
    button.innerHTML = 'Button ' + i;

    addClickFunctionality(button, i);

    document.body.appendChild(button);
  }
}

function addClickFunctionality(button, num) {
  button.onclick = function () {
    alert('This is button ' + num);
  };
}

createButtons();
createButtons2();
createButtons3();
