var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HOLA Mundo' });
});

router.get('/welcome', function(req,res){

	res.render('welcome', {nombre:'Miguel', apellido:'del Barrio' });


});

router.get('/quizes/question', quizController.question);
router.post('/quizes/answer', quizController.answer);
router.get('/quizes/creditos', quizController.creditos);
module.exports = router;
