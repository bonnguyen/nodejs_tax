var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var index = require("../src/index.js");

// TESTSUITE FOR A MOTO TYPE
describe("TEST - Calc invoice for a moto", function() {

	it("shouldReturn15IfAMotoHasEngineSizeNotOver150",function(){
		var expected= 15;

		var data={
			manufactory : "Toyota",
			model : "Avensis",
			registed: 2012,
			type: 2,
			engine: 100
		}
		var result = index.calcInvoice(data);
		expect(result).to.equal(expected);
	})

	it("shouldReturn30IfAMotoHasEngineSizeFrom151ccto400cc",function(){
		var expected =30;

		var data={
			manufactory : "Toyota",
			model : "Avensis",
			registed:2012,
			type: 2,
			engine: 152
		}
		var result= index.calcInvoice(data);
		expect(result).to.equal(expected);
	})

	it("shouldReturn45IfAMotoHasEngineSizeFrom401ccto600cc",function(){
		var expected=45;

		var data={
			manufactory : "Toyota",
			model : "Avensis",
			registed: 2012,
			type:2,
			engine: 445

		}
		var result = index.calcInvoice(data);
		expect(result).to.equal(expected);
	})

	it("shouldReturn60ForAllOtherMotocycles",function(){
		var expected=60;

		var data={
			manufactory : "Toyota",
			model : "Avensis",
			registed: 2012,
			type:2,
			engine: 700

		}
		var result = index.calcInvoice(data);
		expect(result).to.equal(expected);
	})
});














