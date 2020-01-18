function numerosPrimos (veces){
var primos = []
	for (var i=1 ; veces != primos.length; i++) {
		var noprimos= false
		for (var j=1; i>j  ;j++) {
				if (i%j === 0 &&  j!== 1 ) {
					noprimos = true;
	}
	}
		if (noprimos === false ) {
		primos.push(i)
	}
		}

	return primos
	}

console.log(numerosPrimos(100))


