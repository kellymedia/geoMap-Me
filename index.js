//Loads the express module
const express = require('express');
//Creates our express server
const app = express();
const port = 3000;

//Serves static files (we need it to import a css file)



var path = require('path')
app.use(express.static('public'))

var exphbs  = require('express-handlebars');
//Sets our app to use the handlebars engine
app.set('view engine', 'handlebars');
//app.set('views', path.join(__dirname, 'views'));
//Sets handlebars configurations (we will go through them later on)

app.engine('handlebars', exphbs());




//Sets a basic route
app.get('/', (req, res) => {
    console.log('we hit hte route')
    res.render('index');

});

//Makes the app listen to port 3000
app.listen(port, () => console.log(`App listening to port ${port}`));
