function setTimer() {
  const javascriptDiv = `<div>
    <h1> Vanilla Javascript</h1> <input type="text" />
    <p>${new Date().toLocaleTimeString()} </p>
</div>`;
  document.getElementById("javascriptDiv").innerHTML = javascriptDiv;

  const reactDiv = React.createElement(
    "div",
    null,
    React.createElement("h1", null, "React"),
    React.createElement("input", { type: "text" }),
    React.createElement("p", null, new Date().toLocaleTimeString())
  );

  ReactDOM.render(reactDiv, document.getElementById("reactDiv"));
}
setInterval(setTimer, 1000);
