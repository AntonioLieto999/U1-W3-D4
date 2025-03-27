const numDiv = document.createElement("div");
const TableFunction = function () {
  const tombola = document.getElementById("tombola");
  for (let i = 1; i <= 90; i++) {
    const numDiv = document.createElement("div");
    numDiv.classList.add("casella");
    numDiv.innerText = i;
    numDiv.dataset.numero = i;
    tombola.appendChild(numDiv);
  }
};

const numRand = function () {
  const random = Math.floor(Math.random() * 90 + 1);
  addNum(random);
};
const addNum = function (x) {
  const newNum = document.querySelectorAll(".casella");
  for (let i = 1; i < newNum.length; i++)
    if (parseInt(newNum[i].dataset.numero) === x) {
      newNum[i].classList.add("selezionato");
    }
};
const button1 = document.querySelector(".estrazione");
button1.addEventListener("click", numRand);
TableFunction();
