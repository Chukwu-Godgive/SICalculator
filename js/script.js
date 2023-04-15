let calculateFor = document
  .querySelector(".selectOption")
  .addEventListener("change", function () {
    let target = this.value;

    if (target === "Interest") {
      console.log("Working Too1");
      document.querySelector(".stageInterest").style.display = "grid";
      document.querySelector(".stagePrincipal").style.display = "none";
      document.querySelector(".stageRate").style.display = "none";
      document.querySelector(".stageTime").style.display = "none";
    }
    if (target === "Principal") {
      document.querySelector(".stageInterest").style.display = "none";
      document.querySelector(".stagePrincipal").style.display = "grid";
      document.querySelector(".stageRate").style.display = "none";
      document.querySelector(".stageTime").style.display = "none";
    }
    if (target === "Rate") {
      document.querySelector(".stageInterest").style.display = "none";
      document.querySelector(".stagePrincipal").style.display = "none";
      document.querySelector(".stageRate").style.display = "grid";
      document.querySelector(".stageTime").style.display = "none";
    }

    if (target === "Time") {
      document.querySelector(".stageInterest").style.display = "none";
      document.querySelector(".stagePrincipal").style.display = "none";
      document.querySelector(".stageRate").style.display = "none";
      document.querySelector(".stageTime").style.display = "grid";
    }
  });

// Here ⬇ down handles the Calculation of Interest, Principal, Rate, and Time.
document.getElementById("checkForInterest").addEventListener("click", interest);
document
  .getElementById("checkForPrincipal")
  .addEventListener("click", principal);
document.getElementById("checkForRate").addEventListener("click", rate);
document.getElementById("checkForTime").addEventListener("click", time);

function interest() {
  // This gets our users input from the DOM
  let principalForInterest = document.querySelector(
    ".principalForInterest"
  ).value;
  let rateForInterest = document.querySelector(".rateForInterest").value;
  let timeForInterest = document.querySelector(".timeForInterest").value;

  // Simple Interest calculations
  timeForInterest = timeForInterest / 12;
  let simpleInterest = Math.floor(
    (principalForInterest * rateForInterest * timeForInterest) / 100
  );
  let totalReturnForInterest =
    Number(principalForInterest) + Number(simpleInterest);

  // This returns our result back to the DOM
  document.querySelector(".show1ForInterest").innerHTML = "Your S.I Result is";
  document.querySelector(".show2-1ForInterest").innerHTML =
    "Interest: " + simpleInterest;
  document.querySelector(".show2-2ForInterest").innerHTML =
    "Total Return: " + totalReturnForInterest;
  document.querySelector(".show1ForInterest").classList.add("resultTitle");
  document.querySelector(".show2ForInterest").classList.add("resultOutput");
}

function principal() {
  // This gets our users input from the DOM
  let interestForPrincipal = document.querySelector(
    ".interestForPrincipal"
  ).value;
  let rateForPrincipal = document.querySelector(".rateForPrincipal").value;
  let timeForPrincipal = document.querySelector(".timeForPrincipal").value;

  // Principal calculations
  let principal = 100 * interestForPrincipal;
  let totalReturnForPrincipal =
    principal / (rateForPrincipal * timeForPrincipal);

  // This returns our result back to the DOM
  document.querySelector(".show1ForPrincipal").innerHTML = "Your S.I Result is";
  document.querySelector(".show2-1ForPrincipal").innerHTML =
    "Principal: " + totalReturnForPrincipal;
  document.querySelector(".show1ForPrincipal").classList.add("resultTitle");
  document.querySelector(".show2ForPrincipal").classList.add("resultOutput");
}

function rate() {
  // This gets our users input from the DOM
  let interestForRate = document.querySelector(".interestForRate").value;
  let principalForRate = document.querySelector(".principalForRate").value;
  let timeForRate = document.querySelector(".timeForRate").value;

  // Rate calculations
  let Rate = 100 * interestForRate;
  let totalReturnForRate = Rate / (principalForRate * timeForRate);

  // This returns our result back to the DOM
  document.querySelector(".show1ForRate").innerHTML = "Your S.I Result is";
  document.querySelector(".show2-1ForRate").innerHTML =
    "Rate: " + totalReturnForRate + " %";
  document.querySelector(".show1ForRate").classList.add("resultTitle");
  document.querySelector(".show2ForRate").classList.add("resultOutput");
}

function time() {
  // This gets our users input from the DOM
  let interestForTime = document.querySelector(".interestForTime").value;
  let principalForTime = document.querySelector(".principalForTime").value;
  let rateForTime = document.querySelector(".rateForTime").value;

  // Rate calculations
  let Time = 100 * interestForTime;
  let totalReturnForTime = Math.floor(Time / (principalForTime * rateForTime));

  // This returns our result back to the DOM
  document.querySelector(".show1ForTime").innerHTML = "Your S.I Result is";

  if (totalReturnForTime <= 1) {
    document.querySelector(".show2-1ForTime").innerHTML =
      "Time: " + totalReturnForTime + " month";
    
  } else if (totalReturnForTime > 1) {
    document.querySelector(".show2-1ForTime").innerHTML = "Time: " + totalReturnForTime + " months";
  }else {
    document.querySelector(".show2-1ForTime").innerHTML = "Time: 0"
  }
  document.querySelector(".show1ForTime").classList.add("resultTitle");
  document.querySelector(".show2ForTime").classList.add("resultOutput");
}
