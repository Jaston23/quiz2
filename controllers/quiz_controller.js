exports.question = function(req,res){
 var preguntas=['Capital España','Capital UK','Capital EEUU','Capital Canada'];

 var pregunta= preguntas[Math.ceil(3*Math.random())]

	res.render('quiz/question', {pregunta: pregunta});


}

exports.answer = function(req,res){


	var resultado;

	if (req.query.q==="Capital_UK"){
		if(req.body.respuesta==="Londres"){ resultado=true;}
		else{resultado=false}



	}

	else if(req.query.q==="Capital_España"){
		if(req.body.respuesta==="Barcelona"){ resultado=true;}
		else{resultado=false}
	}


	res.render('quiz/answer',{resultado: resultado})


}

exports.creditos = function(req,res){

res.render('quiz/creditos')


}