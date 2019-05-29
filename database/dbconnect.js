const Sequelize = require('sequelize');
const sequelize = new Sequelize('sistemadecadastros', 'root', '', {
	host: "localhost",
	dialect: 'mariadb'
});

sequelize.authenticate().then(function(){
	console.log("Connection success.");
}).catch(function(err){
	console.log("Failed to connect: " + err);
})