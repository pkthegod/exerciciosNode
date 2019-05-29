const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');

//config the template engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
//body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//database connect
const sequelize = new Sequelize('sistemadecadastros', 'root', '', {
	host: "localhost",
	dialect: 'mariadb'
});

app.get('/cad',function(req, res){
	res.render('form');
});

app.post('/addpost',function(req, res){
	res.send(`Texto: ${req.body.title} e conteúdo: ${req.body.content}`);
});

//localhost:3003
app.listen(3003, function(){
	console.log("Server listening on http://localhost:3003")
});