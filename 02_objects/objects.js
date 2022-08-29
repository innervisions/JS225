let invoices = {
  unpaid: [],
  paid: [],

  add: function(name, amount) {
    this.unpaid.push({ name, amount });
  },

  totalDue: function() {
    return this.unpaid.reduce((sum, currentInvoice) => {
      return sum + currentInvoice.amount;
    }, 0);
  },

  payInvoice: function(name) {
    let newUnpaid = [];
    this.unpaid.forEach(invoice => {
      if (invoice.name === name) {
        this.paid.push(invoice);
      } else {
        newUnpaid.push(invoice);
      }
    });
    this.unpaid = newUnpaid;
  },

  totalPaid: function () {
    return this.paid.reduce((sum, currentInvoice) => {
      return sum + currentInvoice.amount;
    }, 0);
  },
};

invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.5);
invoices.add('Slough Digital', 300);
console.log(invoices.totalDue());
invoices.payInvoice('Due North Development');
invoices.payInvoice('Slough Digital');
console.log(invoices.totalPaid());
console.log(invoices.totalDue());
