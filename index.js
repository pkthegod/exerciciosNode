const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')
const Post = require('./models/Posts')
//config the template engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
// body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function(req, res){
	Post.findAll({order: [['id', 'DESC']]}).then(function(posts) {
		res.render('home', {posts: posts})
	})
})

app.get('/cad', function(req, res){
	res.render('form')
})

app.post('/addpost', function(req, res){
	Post.create({
		title: req.body.title,
		content: req.body.content
	}).then(function() {
		res.redirect('/')
	}).catch(function(erro) {
		res.send('Ocorreu um erro: ' + erro)
	})
})

app.get('/delete/:id', function(req, res){
	Post.destroy({where: { 'id': req.params.id }}).then(function(){
			res.send('Postagem apagada com sucesso.')
		}).catch(function(erro){
			res.send('Essa postagem não existe')
	})
})

//localhost:3003
app.listen(3003, function(){
	console.log("Server listening on http://localhost:3003")
})