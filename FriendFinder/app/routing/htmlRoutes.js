var path = require('path');

module.exports = function(app) {

    // This is for the main page
    
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});

    // This is for the survey page
    
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});
};