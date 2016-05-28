var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var index = require("../src/index.js");

// TESTSUITE FOR A CAR TYPE
describe("TEST - Calc invoice for a car", function() {
	it("shouldReturn110IfBefore2002ACarHasAndEngineSizeLessThan1500CC",function(){
		var expected= 110;

		var data = {
			manufactory : "Toyota",
			model : "Avensis",
			registed: 2001,
			type: 1,
			engine: 1400
		}
		var result = index.calcInvoice(data);
		expect(result).to.equal(expected);
	})

	it("shouldReturn165IfBefore2002ACarHasAndEngineSizeGreaterThan1500CC",function(){
		var expected= 165;

		var data = {
			manufactory : "Toyota",
			model : "Avensis",
			registed : 2001,
			type: 1,
			engine : 1670
		}
		var result = index.calcInvoice(data);
		expect(result).to.equal(expected);
	})

	it("shouldReturn65IfAfter2002ACarHasEmissionUpTo100", function(){
		var expected = 65;

		var data = {
			manufactory : "Toyota",
			model : "Avensis",
			registed: 2003,
			type: 1,
			emission: 90
		}
		var result = index.calcInvoice(data);
		expect(result).to.equal(expected);
	})

	it("shouldReturn65IfAfter2002ACarHasEmissionFrom101To120",function(){
		var expected=75;

		var data={
			manufactory : "Toyota",
			model : "Avensis",
			registed:2003,
			type:1,
			emission:102
		}
		var result=index.calcInvoice(data);
		expect(result).to.equal(expected);
	})

	it("shouldReturn105IfAfter2002ACarHasEmissionFrom121To150",function(){
		var expected=105;

		var data={
			manufactory : "Toyota",
			model : "Avensis",
			registed:2004,
			type:1,
			emission:123
		}
		var result=index.calcInvoice(data);
		expect(result).to.equal(expected);
	})

	it("shouldReturn125IfAfter2002ACarHasEmissionFrom151To165", function(){
		var expected=125;

		var data={
			manufactory : "Toyota",
			model : "Avensis",
			registed:2005,
			type:1,
			emission:160
		}
		var result=index.calcInvoice(data);
		expect(result).to.equal(expected);
	})

	it("shouldReturn145IfAfter2002ACarHasEmissionFrom166To185", function(){
		var expected = 145;

		var data = {
			manufactory : "Toyota",
			model : "Avensis",
			registed : 2016,
			type : 1,
			emission : 170

		}
		var result = index.calcInvoice(data);
		expect(result).to.equal(expected);
	})

	it("shouldReturn160IfAfter2002ACarHasEmissionOver185",function(){
		var expected=160;

		var data={
			manufactory : "Toyota",
			model : "Avensis",
			registed: 2017,
			type:1,
			emission: 200
		}
		var result = index.calcInvoice(data);
		expect(result).to.equal(expected);
	})

});