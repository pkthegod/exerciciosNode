const Sequelize = require('sequelize');
const sequelize = new Sequelize('sistemadecadastros', 'root', '', {
	host: "localhost",
	dialect: 'mariadb'
});

const Posting = sequelize.define('postings', {
	title: {
		type: Sequelize.STRING
	},
	content: {
		type: Sequelize.TEXT
	}
});

//Posting.create({
//	title: "SOME TITLE",
//	content: "Some content"
//});

//Posting.sync({ force: true });
const User = sequelize.define('users', {
	name: {
		type: Sequelize.STRING
	},
	surname: {
		type: Sequelize.STRING
	},
	age: {
		type: Sequelize.INTEGER
	},
	email: {
		type: Sequelize.STRING
	}
});

//User.sync({ force: true });

User.create({
	name: "Paulo",
	surname: "Morais",
	age: 27,
	email: "paulom@gmail.com"
});