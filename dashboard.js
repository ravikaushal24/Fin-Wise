const salaryForm = document.querySelector("#salary");

$(document).ready(function () {
  $("#salary").hide();
  $("#btn-sal").click(function () {
    $("#salary").toggle(250);
  });
});

function Salary(amt) {
  this.amt = amt;
}

function Display() {}

Display.prototype.add = function (salary) {
  alert(`Your salary of Rs. ${salary.amt} added successfully `);
};

Display.prototype.clear = function () {
  salaryForm.reset();
};

Display.prototype.validate = function (salary) {
  if (salary.amt <= 0) {
    return false;
  } else {
    return true;
  }
};

salaryForm.addEventListener("submit", salaryFormSubmit);

function salaryFormSubmit(e) {
  let amt = parseInt(document.getElementById("amount").value);

  let salary = new Salary(amt);

  let display = new Display();

  if (display.validate(salary)) {
    display.add(salary);
    display.clear();
  } else {
    display.clear();
    alert("Some error occurred");
  }
  e.preventDefault();
}
