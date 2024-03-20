$(document).ready(function () {
  $("#expenses").hide();
  $("#btn-exp").click(function () {
    $("#expenses").toggle(250);
  });
});

function Transaction(amt, tdate, type) {
  this.amt = amt;
  this.tdate = tdate;
  this.type = type;
}

function Display() {}

Display.prototype.add = function (transaction) {
  const tableBody = document.getElementById("tableBody");
  let tableData = `<tr>
                        <td>${transaction.amt}</td>
                        <td>${transaction.tdate}</td>
                        <td>${transaction.type}</td>
                        
                    </tr> `;

  tableBody.innerHTML += tableData;
};
Display.prototype.clear = function () {
  expenseForm.reset();
};

Display.prototype.validate = function (transaction) {
  if (transaction.amt <= 0) {
    return false;
  } else {
    return true;
  }
};

let expenseForm = document.getElementById("expenses");
expenseForm.addEventListener("submit", expenseFormSubmit);

function expenseFormSubmit(e) {
  console.log("You have submitted the form");
  let amt = parseInt(document.getElementById("amount").value);
  let tdate = document.getElementById("date").value;
  let type = document.getElementById("type").value;

  let transaction = new Transaction(amt, tdate, type);

  let display = new Display();

  if (display.validate(transaction)) {
    display.add(transaction);
    display.clear();
    alert("Transaction Successfully added");
  } else {
    display.clear();
    alert("Some error occurred");
  }
  e.preventDefault();
}
