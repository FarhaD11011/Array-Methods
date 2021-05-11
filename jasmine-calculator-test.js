
describe('calculate Monthly Payment', function(){
it('should calculate the monthly rate correctly', function () {
  let values  = { amount: 15000, years: 3, rate: 7.5 };
  expect(calculateMonthlyPayment(values)).toEqual('466.59');
});
it("should return a result with 2 decimal places", function() {
  let  values  = { amount: 17685, years: 3, rate: 7.5 };
  expect(calculateMonthlyPayment(values)).toEqual('550.11');
});
it("should calculate super high rate correctly", function() {
  let  values  = { amount: 25000, years: 3, rate: 99 };
  expect(calculateMonthlyPayment(values)).toEqual('2188.61');
});
it("should calculate zero rate correctly", function() {
  let  values  = { amount: 15753, years: 3, rate: 0 };
  expect(calculateMonthlyPayment(values)).toEqual('437.58');
});
})

