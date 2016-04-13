function timeHandler () {

	this.handleTime = function (req, res) {
		
	    
		var leDate =  formatInputDate(req.params.elDate);
		var retObject = {};
			
		if (leDate.toString() === 'Invalid Date') {
			retObject['natural'] = null;
			retObject['unix'] = null;
			res.json(retObject);
		}
			retObject.natural = convMonth(leDate.getMonth()) + ' ' + leDate.getDate() + ', ' + leDate.getFullYear();
			
			retObject.unix = Date.UTC(leDate.getFullYear(), leDate.getMonth(), leDate.getDate(),
				leDate.getHours(), leDate.getMinutes(), leDate.getSeconds(), leDate.getMilliseconds())/1000;
				
			res.end(JSON.stringify(retObject));
	}
	
	function formatInputDate (iDate) {
		if (Number(iDate)) {
	    	iDate = Number(iDate) * 1000;
	    }
	    
	    return new Date(iDate);
	}
	
	function convMonth (month) {
		switch (month){
			case 0:
				return 'January';
			case 1:
				return 'February';
			case 2:
				return 'March';
			case 3:
				return 'April';
			case 4:
				return 'May';
			case 5:
				return 'June';
			case 6:
				return 'July';
			case 7:
				return 'August';
			case 8:
				return 'September';
			case 9:
				return 'October';
			case 10:
				return 'November';
			case 11:
				return 'December';
			default:
				return 'Mangos';
		}
	}
	
	


}

module.exports = timeHandler;