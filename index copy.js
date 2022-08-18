function setTimer() {
  const javascriptDiv = `<div>
    <h1> Vanilla Javascript</h1> <input type="text" />
    <p>${new Date().toLocaleTimeString()} </p>
  </div>`;
  document.getElementById("javascriptDiv").innerHTML = javascriptDiv;
}
setInterval(setTimer, 1000);
