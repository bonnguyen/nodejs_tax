var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var index = require("../src/index.js");

// TESTSUITE FOR A VAN TYPE
describe("TEST - Calc invoice for a van", function() {
	it("shouldReturn165IfAVanHasWeightLessThan3500", function(){
		var expected = 165;

		var data = {
			manufactory : "Toyota",
			model : "Avensis",
			registed : 2001,
			type : 0, // VAN type
			weight : 3000
		}
		var result = index.calcInvoice(data);
		expect(result).to.equal(expected);
	});

	it("shouldReturn190IfAVanHasWeightGreaterThan3500", function(){
		var expected = 190;

		var data = {
			manufactory : "Toyota",
			model : "Avensis",
			registed : 2001,
			type : 0, // VAN type
			weight : 4000
		}
		var result = index.calcInvoice(data);
		expect(result).to.equal(expected);
	});
});