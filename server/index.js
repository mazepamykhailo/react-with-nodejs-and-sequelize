import express from 'express';
import bodyParser from 'body-parser';
import serveStatic from 'serve-static';
import cookieParser from 'cookie-parser';
import passport from 'passport';

import bands from './routes/bands';
import albums from './routes/albums';
import models from './models';

const app = express();

// Create a new middleware function to serve files from within a given root directory.
// The file to serve will be determined by combining req.url with the provided root directory.
// When a file is not found, instead of sending a 404 response, this module will instead call next()
// to move on to the next middleware, allowing for stacking and fall-backs.
// ------- app.use(serveStatic(__dirname + '/../../public'));
// Parse Cookie header and populate req.cookies with an object keyed by the cookie names.
// Optionally you may enable signed cookie support by passing a secret string,
// which assigns req.secret so it may be used by other middleware.
app.use(cookieParser());

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport
// Initialize passport, express + passport session and add them both as middleware.
// We do this by adding these lines some spaces after the bodyParser import line.
app.use(session({ secret: 'node and more node please', resave: true, saveUninitialized:true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Routes
app.use('/api/bands/', bands);
app.use('/api/albums/', albums);

// Middleware for errors
app.use((req, res) => {
	res.status(404).json({ errors: { global: "Still working on it. Please try again later when we implement it." } });
});

// Sync database with Sequelize models
models.sequelize.sync().then(function() {
	if (process.env.NODE_ENV !== "test") {
		console.log('Database connected!');
	}
}).catch(function(err) {
	console.error(err, "Something went wrong, database is not connected!");
});

if (process.env.NODE_ENV == 'test')
	app.listen(5000, () => console.log(`Tests listening to 5000.`));
else
	app.listen(8080, () => console.log(`NodeJS listening to 8080. Current environment: ${process.env.NODE_ENV}.`));

module.exports = app;

// ------------------------------------------------------------------------------
// NodeJS Environment > process.env.NODE_ENV
// ------------------------------------------------------------------------------
// To set an environment variable in Windows normally:
//		SET NODE_ENV=development
// Through PowerShell terminal:
//		$env:NODE_ENV="development"
// If you are in OSX or Linux terminals:
//		export NODE_ENV=development
