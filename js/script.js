document.getElementById("check").addEventListener("click", interest);

function interest() {
  // This gets our users input from the DOM
  let principal = document.querySelector(".principal").value;
  let rate = document.querySelector(".rate").value;
  let time = document.querySelector(".time").value;

  // Simple Interest calculations
  time = time / 12;
  let si = Math.floor((principal * rate * time) / 100);
  let totalReturn = Number(principal) + Number(si);

  // This returns our result back to the DOM
  document.querySelector(".show1").innerHTML = "Your S.I Result is";
  document.querySelector(".show2-1").innerHTML = "Interest: " + si;
  document.querySelector(".show2-2").innerHTML = "Total Return: " + totalReturn;
  document.querySelector(".show1").classList.add("resultTitle");
  document.querySelector(".show2").classList.add("resultOutput");
}


// Still working on principal, time, and rate calculation....