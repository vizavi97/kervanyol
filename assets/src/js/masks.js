if (document.querySelector('.form-control-number')) {
  var number = new Cleave('.form-control-number', {
    numeral: true,
    multiple: true
  });
}
if (document.querySelector('.form-control-credit-card')) {

  new Cleave('.form-control-credit-card', {
    creditCard: true,
    onCreditCardTypeChanged: function (type) {
      this.type = "visa"
    }
  })
}