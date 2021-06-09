const inputNum = document.getElementById("number");
const resultNum = document.getElementById("result");

fetch("/start", { method: "POST" })
  .then((res) => res.text())
  .then((body) => {
    let myJSON = JSON.parse(body);
    resultNum.value = myJSON.data;
  });

const addNumber = () => {
  let str = "calc/add/" + inputNum.value;
  fetch(str, { method: "POST" })
    .then((res) => res.text())
    .then((body) => {
      let myJSON = JSON.parse(body);
      resultNum.value = myJSON.data;
    });
};

const subtructNumber = () => {
  let str = "calc/sub/" + inputNum.value;
  fetch(str, { method: "POST" })
    .then((res) => res.text())
    .then((body) => {
      let myJSON = JSON.parse(body);
      resultNum.value = myJSON.data;
    });
};

const multiplyNumber = () => {
  let str = "calc/multiply/" + inputNum.value;
  fetch(str, { method: "PUT" })
    .then((res) => res.text())
    .then((body) => {
      let myJSON = JSON.parse(body);
      resultNum.value = myJSON.data;
    });
};

const divideNumber = () => {
  let str = "calc/divide/" + inputNum.value;
  if (inputNum.value == 0) {
    showError("Cant divide by zero");
    return;
  } else {
    fetch(str, { method: "PUT" })
      .then((res) => res.text())
      .then((body) => {
        let myJSON = JSON.parse(body);
        resultNum.value = myJSON.data;
      });
  }
};
const closeServer = () => {
  let str = "calc/del";
  fetch(str, { method: "DELETE" })
    .then((res) => res.text())
    .then((body) => {
      let myJSON = JSON.parse(body);
      console.log(myJSON.data);
    });
};
const resetNumber = () => {
  let str = "calc/reset";
  fetch(str, { method: "POST" })
    .then((res) => res.text())
    .then((body) => {
      let myJSON = JSON.parse(body);
      resultNum.value = myJSON.data;
    });
};

const showError = (error) => {
  const errorDiv = document.createElement("div");
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");
  errorDiv.className = "alert alert-danger";
  errorDiv.appendChild(document.createTextNode(error));
  card.insertBefore(errorDiv, heading);
  setTimeout(clearError, 3000);
};

const clearError = () => {
  document.querySelector(".alert").remove();
};

document.getElementById("Add").addEventListener("click", addNumber);
document.getElementById("Subtruct").addEventListener("click", subtructNumber);
document.getElementById("Multiply").addEventListener("click", multiplyNumber);
document.getElementById("Divide").addEventListener("click", divideNumber);
document.getElementById("Close").addEventListener("click", closeServer);
document.getElementById("Reset").addEventListener("click", resetNumber);
