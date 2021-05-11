window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) { setupIntialValues();
     form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let values  = { amount: 15000, years: 3, rate: 7.5 };
  let amountInti = document.querySelector("#loan-amount");
  let yearsInti = document.querySelector("#loan-years");
  let rateInti = document.querySelector("#loan-rate");
  amountInti.value = values.amount;
  yearsInti.value = values.years;
  rateInti.value = values.rate;
  update(); 

}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let UIValues = getCurrentUIValues();
  let  monthlyPayment = calculateMonthlyPayment(UIValues);
  updateMonthly(monthlyPayment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let p = values.amount;
  let r = (values.rate/100 )/ 12;
  let n = values.years * 12;
  if (values.rate == 0){
    return (values.amount/(values.years * 12)).toFixed(2)
  }
  let val1 = (p * r);
  let val2 = (1-((1+r)**(-n)));
  return ((val1/val2).toFixed(2));
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
 let monthlyPay = document.getElementById('monthly-payment');
 monthlyPay.innerText = '$'+ (monthly);
}





