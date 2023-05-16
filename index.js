const express = require("express");
const morgan = require('morgan');
const cors = require('cors');
var mysql = require('mysql');
const app = express();
const session = require('express-session');
const flash = require('connect-flash');
const methodOverride = require("method-override");
const expressLayouts = require("express-ejs-layouts");
const path = require('path');
const passport = require('passport');
const authRoutes = require('./routes/auth');
const homeRoutes = require("./routes/home.js");
const adminRoutes = require("./routes/admin.js");
const userRoutes = require("./routes/user.js");
require('dotenv').config();
require('./config/passport')(passport);
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use("/assets", express.static(__dirname + "/assets"));
app.set('views', path.join(__dirname , '/views'));
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(morgan('dev'));//@
app.use(cors());//@
app.use(methodOverride('_method'));
app.use(session({
	secret: "secret",
	resave: true,
	saveUninitialized: true
}));

const conobj=require('./config/dbConnection');
// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "treasure_hunt"
// });
const { User } = require("./models/user");
console.log(User);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use((req, res, next) => {
	res.locals.currentUser = req.user;
	res.locals.error = req.flash("error");
	res.locals.success = req.flash("success");
	res.locals.warning = req.flash("warning");
	next();
});


const port = 4000;
app.use(homeRoutes);
app.use(authRoutes);
app.use(userRoutes);
app.use(adminRoutes);
app.use((req, res) => {
	res.status(404).render('404Page', { title: 'Page Not Found!!' });
})
// const connection = new Sequelize('treasure_hunt', 'root', '',{
//     dialect: 'mysql',
//     host: 'localhost'
// });

// connection.authenticate().then(() => {
//    console.log('Connection has been established successfully.');
// }).catch((error) => {
//    console.error('Unable to connect to the database: ', error);
// });
	
	conobj.sync().then(() => {
		console.log("Db connected !");
	})
		.catch((err) => {
		console.log("Db failed to connect!")
	})

	app.listen(4000, (err) => {
		if (!err) {
			console.log("App Started")
		}
		else {
			console.log("Error in starting")
		}
	})