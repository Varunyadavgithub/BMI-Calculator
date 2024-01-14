let height = document.getElementById("height");
let weight = document.getElementById("weight");
let calculate = document.getElementById("calculate");
let reload = document.getElementById("reload");
let bmiShow = document.getElementById("bmi");
let category = document.getElementById("category");

// add event listener on calculate button...
calculate.addEventListener("click", function () {
  // formula BMI = kg/m*m
  let meter = height.value * 0.3048; //convert feet in meter...
  let squareMeter = meter * meter;
  let bmiCal = (weight.value / squareMeter).toFixed(2);

  if (height.value === "" && weight.value === "") {
    bmiShow.classList.add("invalid");
    bmiShow.innerHTML = "Please enter your Height and Weight.";
  }
  else if(height.value === ""){
    bmiShow.classList.add("invalid");
    bmiShow.innerHTML = "Please enter your Height.";
  }
  else if(weight.value === ""){
    bmiShow.classList.add("invalid");
    bmiShow.innerHTML = "Please enter your Weight.";
  }
  else {
    bmiShow.classList.remove("invalid");
    bmiShow.innerHTML = `Your BMI is : ${bmiCal}`;

    // add conditions on category...
    if (bmiCal < 18) {
      category.innerHTML = "You are Underweight.";
    } 
    else if (bmiCal >= 18 && bmiCal < 24) {
      category.innerHTML = "You are Normal Weight.";
    }
    else if (bmiCal >= 24 && bmiCal < 30) {
      category.innerHTML = "You are Overweight.";
    } 
    else {
      category.innerHTML = "You are Obese.";
    }
  }
});

// add event listener on reload button...
reload.addEventListener("click", function () {
  window.location.reload(); //method which is use to refresh the page...
});
