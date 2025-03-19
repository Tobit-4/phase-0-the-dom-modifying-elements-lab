// Write your code here!
const removeId = document.getElementById("main");

removeId.remove();

const newHeader = document.createElement("h1");
newHeader.id="victory"
newHeader.textContent="HI";
newHeader.textContent="Fidel is the champion";

document.body.appendChild(newHeader);

newHeader.textContent="Fidel is the champion";