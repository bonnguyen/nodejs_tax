var calcInvoice = function(data) {
	if(data.type == 0) {
		return this.calcInvoiceForVan(data);
	} else if (data.type == 1) {
		return this.calcInvoiceForCar(data);
	} else if(data.type==2){
		return this.calcInvoiceForMotocycle(data);
	}
};

var calcInvoiceForVan = function(data) {
	if(data.weight < 3500) {
		return 165;
	} else {
		return 190;
	}
}

var calcInvoiceForCar = function(data) {
	if (data.registed < 2002) {
		return this.calcInvoiceForCarWhenRegistedLessThan2002(data);
	} else {
		return this.calcInvoiceForCarWhenRegistedGreaterAndEqual2002(data);
	}
}

var calcInvoiceForCarWhenRegistedLessThan2002 = function(data) {
	if (data.engine <= 1550) {
		return 110;
	} else {
		return 165;
	}
}

var calcInvoiceForCarWhenRegistedGreaterAndEqual2002 = function(data) {
	if (data.emission <= 100) {
		return 65;
	}
	else if (data.emission>100 && data.emission<=120) {
		return 75;
	}
	else if (data.emission>120 && data.emission<=150) {
		return 105;
	}
	else if (data.emission>150 && data.emission<=165) {
		return 125;
	}
	else if ( data.emission>165 && data.emission<=185) {
		return 145;
	} else {
		return 160;
	}
}

var calcInvoiceForMotocycle = function(data) {
	if (data.engine <=150) {
		return 15;
	} else if (data.engine>=151 && data.engine<=400) {
		return 30;
	} else if (data.engine>=401 && data.engine<=600) {
		return 45;
	} else {
		return 60;
	}
}

module.exports = {
	calcInvoice: calcInvoice,
	calcInvoiceForVan: calcInvoiceForVan,
	calcInvoiceForCar: calcInvoiceForCar,
	calcInvoiceForCarWhenRegistedLessThan2002: calcInvoiceForCarWhenRegistedLessThan2002,
	calcInvoiceForCarWhenRegistedGreaterAndEqual2002: calcInvoiceForCarWhenRegistedGreaterAndEqual2002,
	calcInvoiceForMotocycle: calcInvoiceForMotocycle
} 