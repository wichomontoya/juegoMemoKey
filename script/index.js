
$(document).ready(function(){

	var alfabeto = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	var letrasPc = [];
	var letrasUsuario = [];
	var turno = 0;
	var puntos = 0;
	var stop=false;
	var contadorSegundos =60;

	// Ejecucion del codigo

	cronometro();	
	generarLetra();

	// Boton llama Funciones 
			

	$("#botonCapturaLetraUsuario").click(function(){
		capturarLetra();
		comparaLetras();
		if (stop===false){
			generarLetra();
		}
	});

	// Funcion Captura y divide las letras


	function capturarLetra(){
		
		var letra = $("#letraUsuario").val();
		letrasUsuario = letra.split("");
		console.log(letrasUsuario);
		$("#letraUsuario").val("");
		
	}


	//Funcion que genera la letra al azar


	function generarLetra() {
		
			var aleatorio = Math.round(Math.random()* 26);
			var miLetra = alfabeto[aleatorio]
			letras = document.getElementById("letras");
			letras.innerHTML = miLetra;
			letrasPc.push(miLetra);
			// console.log(letrasPc);
	}

	// Funcion que compara arreglos

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
				letrasUsuario=[];
				$('#letrausuario').val();
				i=letrasPc.length;
				stop=true
			}
		}

		letrasUsuario=[];
	}

	function cronometro(){
			
		 s = document.getElementById("segundos");

		var myVar= setInterval(

			function(){
				contadorSegundos=contadorSegundos-1;
				s.innerHTML = contadorSegundos;
				if (contadorSegundos<=0){
					stop=true;
					alert("El Juego ha terminado, su puntaje es: " +puntos);
					clearInterval(myVar);
				} 

			},1000
		);	

	}

});	






