import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));



app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname, '../dist/index.html'));
});


app.get('/users', function(request, response) {
	response.json([
		{"id" : 1, "firstName" : "Bob", "lastName" : "Smith", "email": "bob@aol.com"},
		{"id" : 2, "firstName" : "Tammy", "lastName" : "Swanson", "email": "t1@aol.com"},
		{"id" : 3, "firstName" : "Tammy Two", "lastName" : "Swanson", "email": "t2@aol.com"},
	]);
});


app.listen(port, function(err){
	if(err) {
		console.log(err);
	} else {
		open('http://localhost:' + port);
	}
});
