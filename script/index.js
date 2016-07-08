
$(document).ready(function(){
	var alfabeto = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	var letrasPc = [];
	var letrasUsuario = [];
	var turno = 0;
	var puntos = 0;
	var stop=false;

	generarLetra();

			

	$("#botonCapturaLetraUsuario").click(function(){
		capturarLetra();
		comparaLetras();
		if (stop===false){
			generarLetra();
		}
	});


	function capturarLetra(){
		
		var letra = $("#letraUsuario").val();
		letrasUsuario = letra.split("");
		console.log(letrasUsuario);
		$("#letraUsuario").val("");
		
	}


	//Funcion que genera la letra al azar


	function generarLetra() {
		
		if(turno < 5){
			var aleatorio = Math.round(Math.random()* 26);
			var miLetra = alfabeto[aleatorio]
			alert(miLetra);
			letrasPc.push(miLetra);
			console.log(letrasPc);
			turno=turno+1;
		}
		else{
			alert("El Juego ha terminado, su puntaje es: " + puntos);
		}
	}






	// Funcion que compara

	function comparaLetras(){

		for (var i = 0 ; i < letrasPc.length; i++){
							
			if (letrasPc[i]===letrasUsuario[i]){
				puntos=puntos +2;		
				console.log(puntos);
				stop=false;
			}

			else if (letrasPc[i]!==letrasUsuario[i]){ 
				puntos=puntos-1;
				alert("Te equivocaste");

				// $("#mensaje").show(function(){

				// });
				letrasUsuario=[];
				$('#letrausuario').val();
				i=letrasPc.length;
				stop=true
			}
		}
		letrasUsuario=[];
	}
});	






