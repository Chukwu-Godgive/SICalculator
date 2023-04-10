document.getElementById("check").addEventListener("click", interest);

function interest() {
  let principal = document.querySelector(".principal").value;
  let rate = document.querySelector(".rate").value;
  let time = document.querySelector(".time").value;

  let si = (principal * rate * time) / 100;

  document.querySelector(".show1").innerHTML = "Your S.I Result is";
  document.querySelector(".show2").innerHTML = si;
  document.querySelector(".show1").classList.add("resultTitle");
  document.querySelector(".show2").classList.add("resultOutput");
}
